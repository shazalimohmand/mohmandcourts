var swiper = new Swiper(".mySwiper", {
 
  spaceBetween: 30,
  loop: true,
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

});