import "./styles/main.scss"
import "./swiper.js"

document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname
  var links = document.querySelectorAll(".nav__link")

  links.forEach(function (link) {
    var linkPath = link.getAttribute("href")
    if (currentPath === linkPath) {
      link.classList.add("current")
    }
  })
})
