// Слайдер

const swiperCoaches = new Swiper('.coaches__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // колличество слайдов для показа
  slidesPerView: 4,

  // отключение функционала если слайдов меньше чем нужно
  watchOverflow: true,

  spaceBetween: 40,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // прокрутка мышкой

  /* mousewheel: {
    sensitivity: 1,
  },*/

  // autoHeight: true,

  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    1200: {
      slidesPerView: 4,
    },
  },

});


const swiperReviews = new Swiper('.reviews__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  /* mousewheel: {
    sensitivity: 1,
  },*/

  autoHeight: true,

  loopedSlides: 0,

});

export {swiperCoaches, swiperReviews};
