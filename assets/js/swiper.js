var swiper = new Swiper(".mySwiper", {
  slidesPerView: "2",
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "5",
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
});