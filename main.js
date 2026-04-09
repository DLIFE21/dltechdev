// Configuración central
const CONFIG = {
  phone: "18292890243",        // tu número sin +
};

// Mostrar notificación temporal
function showToast(message, isError = false) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Enviar mensaje a WhatsApp
function sendToWhatsApp(message) {
  const url = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Generar ID de orden aleatorio
function generateOrderID() {
  return Math.floor(10000 + Math.random() * 90000);
}

// Escuchar fade-out en navegación
document.querySelectorAll("a").forEach(link => {
  if (link.href && !link.href.includes("#") && !link.hasAttribute('data-no-fade')) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = this.href, 250);
    });
  }
});

// Activar menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('active'));
  }
});