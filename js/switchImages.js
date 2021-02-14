'use strict';

document.querySelectorAll('.thumb').forEach((item) => {
  let captureDiscription = document.getElementById(item.dataset.img);
  let descriptionClasses = captureDiscription.classList;
  let swiperId = "#" + captureDiscription.getElementsByClassName('swiper-container')[0].id;

  item.addEventListener('mouseover', () => {
    // Add hidden classes to every description parts
    document.querySelectorAll('.site-description').forEach((item) => {
      item.classList.contains('hidden') === false && item.classList.add('hidden');
    });

    // Remove hidden class from an element user hovered cursor
    descriptionClasses.contains('hidden') === true && descriptionClasses.remove('hidden');

    // Regenerate slide when hovered
    !(isSmartPhone()) && generateSwiper(swiperId);
  })
});
