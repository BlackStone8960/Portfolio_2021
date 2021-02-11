'use strict';

document.querySelectorAll('.thumb').forEach((item) => {
  let textClasses = document.getElementById(item.dataset.img).classList;
  item.addEventListener('mouseover', () => {
    document.querySelectorAll('.site-description').forEach((item) => {
      item.classList.contains('hidden') === false && item.classList.add('hidden');
    })
    textClasses.contains('hidden') === true && textClasses.remove('hidden');
  })
})
