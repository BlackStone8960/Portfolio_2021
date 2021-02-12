'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const nav = document.getElementById('nav');
  const navLinks = document.getElementsByClassName('nav-link');
  hamburgerMenu.addEventListener('click', (e) => {
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', (e) => {
      nav.classList.toggle('active');
    });
  }
})