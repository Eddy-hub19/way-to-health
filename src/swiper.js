document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    autoplay: false,
    speed: 1300,
    clickable: true,
    slidesPerView: "1", // Автоматическое определение количества видимых слайдов
    // spaceBetween: 10, // Расстояние между слайдами
    centeredSlides: true, // Разместить активный слайд в центреы

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    mousewheel: {
      forceToAxis: true,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  })
})
