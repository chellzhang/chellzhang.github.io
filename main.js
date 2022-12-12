$(document).ready(function () {
    $('#fullpage').fullpage();
});

var swiper = new Swiper(".slide-container", {
    slidesPerView: 5,
    initialSlide: 1,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });