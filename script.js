// Menu burger responsive
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ----------------------new
// Apparition progressive des cartes d'expertise
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Navbar auto-hide on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.barre-de-nav');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Ajoute une ombre dès qu'on commence à scroller
  if (scrollTop > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Cache la nav quand on défile vers le bas, la montre quand on remonte
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add('nav-hidden');
  } else {
    navbar.classList.remove('nav-hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // évite les valeurs négatives
});



//✅ Étape 3 : (optionnel mais recommandé) activer automatiquement le lien actif via JS

// Met à jour automatiquement le lien actif selon l'URL
const navLinks = document.querySelectorAll('.nav a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
