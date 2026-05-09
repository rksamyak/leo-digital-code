document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  // Handle sticky navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle functionality (placeholder for future expansion)
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');

  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      // Toggle logic would go here
      // For example, toggling an 'active' class on navLinks and navActions
      console.log('Mobile menu clicked');
    });
  }
});
