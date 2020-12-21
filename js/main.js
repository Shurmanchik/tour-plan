var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,/*перелистывает в начало когда дойдет до последней картинки */
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  effect:  "coverflow",
});