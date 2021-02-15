'use strict';

const cubeSlider = {
  effect: 'cube',
  loop: true,
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
};

const cubeSliderAuto = {
  effect: 'cube',
  loop: true,
  autoplay: {
    delay: 4000,
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
};

const cubeShadowOff = {
  shadow: false,
  slideShadows: false
}

if(!isSmartPhone()) {
  let slider1 = new Swiper('#slider1', cubeSlider);  
} else {
  let slider1 = new Swiper('#slider1', {
    ...cubeSlider,
    cubeEffect: cubeShadowOff
  });
  let slider2 = new Swiper('#slider2', {
    ...cubeSliderAuto,
    cubeEffect: cubeShadowOff
  });
  let slider3 = new Swiper('#slider3', {
    ...cubeSliderAuto,
    cubeEffect: cubeShadowOff
  });
  let slider4 = new Swiper('#slider4', {
    ...cubeSliderAuto,
    cubeEffect: cubeShadowOff
  });
  let slider5 = new Swiper('#slider5', {
    ...cubeSliderAuto,
    cubeEffect: cubeShadowOff
  });
}

const generateSwiper = (sliderId) => {
  let slider1 = new Swiper(sliderId, cubeSliderAuto);
};