// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ScrollReveal Animations
ScrollReveal().reveal('.animate__animated', {
  delay: 300,
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  interval: 200
});