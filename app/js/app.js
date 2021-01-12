const toggleBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const iconBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
  toggleBtn.classList.toggle('show-close');
});
