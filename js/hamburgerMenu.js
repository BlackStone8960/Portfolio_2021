'use strict';

const hamburgerToggle = () => {
  document.getElementById('hamburger-menu').classList.toggle('active');
  document.getElementById('nav').classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger-menu').addEventListener('click', hamburgerToggle);
  
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', hamburgerToggle);
  }
})