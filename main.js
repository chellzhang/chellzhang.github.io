$(document).ready(function () {
  $('#fullpage').fullpage();
  ScrollReveal().reveal('#greeting-box h1',{ delay: 300, origin:'bottom', distance: '10px', interval: 300, duration: 1500 });
  ScrollReveal().reveal('.linkbox a', {delay:1500, origin:'right', distance: '10px',interval: 500})
});

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  initialSlide: 0,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


