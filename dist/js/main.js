const parallax = document.querySelector(".welcome");

window.addEventListener("scroll", function() {
  let offSet = window.pageYOffset;
  parallax.style.backgroundPositionY = offSet * 0.5 + "px";
});
