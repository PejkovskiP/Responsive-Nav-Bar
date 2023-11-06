const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
let isNavOpen = false;

navToggle.addEventListener('click', function () {
  if (isNavOpen) {
    links.classList.remove("show-links");
    navToggle.style.transform = "rotate(0deg)"; // Reset the rotation
  } else {
    links.classList.add("show-links");
    navToggle.style.transform = "rotate(90deg)"; // Rotate when opening
  }
  isNavOpen = !isNavOpen; // Toggle the state
});