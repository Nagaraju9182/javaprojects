// script.js
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show-menu")) {
      navLinks.classList.remove("show-menu");
    } else {
      navLinks.classList.add("show-menu");
    }
  }
  