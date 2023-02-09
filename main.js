$(document).ready(function () {
  $('#fullpage').fullpage({
    licenseKey: 'gplv3-license'
  });
  ScrollReveal().reveal('#greeting-box h1',{ delay: 300, origin:'bottom', distance: '10px', interval: 300, duration: 1500 });
  ScrollReveal().reveal('.linkbox a', {delay:1500, origin:'right', distance: '10px',interval: 500})
});

(function() {
  emailjs.init('rIOs5_3AhoxfpSpmS');
})()

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  this.contact_number.value = Math.random() * 100000 | 0;
  emailjs.sendForm('service_bbp52rj', 'contact_form', this)
      .then(function() {
          console.log('SUCCESS!');
      }, function(error) {
          console.log('FAILED...', error);
      });
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
