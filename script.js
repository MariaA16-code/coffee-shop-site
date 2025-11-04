// Basic interactivity for the demo site
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
}

// Contact form demo (no server) - show an alert and reset form
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim() || 'friend';
    alert(`Thanks ${name}! Your message was received (demo).`);
    form.reset();
  });
}
