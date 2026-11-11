/* Interacciones compartidas de la navegación y el carrusel de inicio. */
(() => {
  const menuButton = document.querySelector('.navbar .menu-toggle');
  const menu = document.querySelector('.navbar .nav-links');

  if (menuButton && menu) {
    const setMenuOpen = (open) => {
      menu.classList.toggle('active', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    };

    menuButton.addEventListener('click', () => setMenuOpen(!menu.classList.contains('active')));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
    window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
      if (event.matches) setMenuOpen(false);
    });
  }

  const slider = document.querySelector('.hero-slider');
  const slides = [...document.querySelectorAll('.hero-slider .slide')];
  const dotsContainer = document.getElementById('sliderDots');
  const playback = document.querySelector('.slider-toggle');
  if (!slider || !slides.length || !dotsContainer || !playback) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = reducedMotion.matches;
  let pointerInside = false;
  let current = 0;
  let timer;
  const dots = slides.map((slide, index) => {
    const dot = document.createElement('button');
    const title = slide.querySelector('h2')?.textContent.trim() || `producto ${index + 1}`;
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Mostrar ${title}`);
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
    return dot;
  });

  function updatePlaybackLabel() {
    playback.textContent = pausedByUser ? 'Reproducir' : 'Pausar';
    playback.setAttribute('aria-label', pausedByUser ? 'Reproducir carrusel' : 'Pausar carrusel');
  }

  function scheduleNext() {
    clearTimeout(timer);
    if (pausedByUser || pointerInside || slider.contains(document.activeElement) || document.hidden) return;
    timer = setTimeout(() => showSlide((current + 1) % slides.length), 6000);
  }

  function showSlide(index) {
    current = index;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
      dots[i].classList.toggle('active', active);
      if (active) dots[i].setAttribute('aria-current', 'true');
      else dots[i].removeAttribute('aria-current');
    });
    scheduleNext();
  }

  playback.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    updatePlaybackLabel();
    scheduleNext();
  });
  slider.addEventListener('mouseenter', () => { pointerInside = true; scheduleNext(); });
  slider.addEventListener('mouseleave', () => { pointerInside = false; scheduleNext(); });
  slider.addEventListener('focusin', scheduleNext);
  slider.addEventListener('focusout', () => setTimeout(scheduleNext, 0));
  document.addEventListener('visibilitychange', scheduleNext);
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) pausedByUser = true;
    updatePlaybackLabel();
    scheduleNext();
  });
  updatePlaybackLabel();
  showSlide(0);
})();
