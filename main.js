// ========== CONFIGURACIÓN DE SUPABASE ==========
const SUPABASE_URL = 'https://tusubproyecto.supabase.co';   // <--- CAMBIA ESTO
const SUPABASE_KEY = 'tu-anon-public-key';                  // <--- CAMBIA ESTO

// Inicializar cliente Supabase (disponible globalmente)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ========== CONFIGURACIÓN WHATSAPP ==========
const CONFIG = {
  phone: "18292890243"   // tu número sin +
};

// ========== FUNCIONES GLOBALES ==========
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

function sendToWhatsApp(message) {
  const url = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function generateOrderID() {
  return Math.floor(10000 + Math.random() * 90000);
}

// ========== NAVEGACIÓN CON FADE ==========
document.querySelectorAll("a").forEach(link => {
  if (link.href && !link.href.includes("#") && !link.hasAttribute('data-no-fade')) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = this.href, 250);
    });
  }
});

// ========== MENÚ HAMBURGUESA ==========
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('active'));
  }
});
