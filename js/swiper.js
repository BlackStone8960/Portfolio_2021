'use strict';

if(!isSmartPhone()) {
  let cubeSlider = new Swiper('#slider1', {
    effect: 'cube',
    loop: true,
    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });  
} else {
  let cubeSlider = new Swiper('#slider1', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });  
  let slider2 = new Swiper('#slider2', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let slider3 = new Swiper('#slider3', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let slider4 = new Swiper('#slider4', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let slider5 = new Swiper('#slider5', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const generateSwiper = (sliderId) => {
  let cubeSlider = new Swiper(sliderId, {
    effect: 'cube',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};