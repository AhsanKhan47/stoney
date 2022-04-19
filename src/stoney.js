$(document).ready(function () {
  

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 15,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
  });