document.querySelectorAll(".head_menu a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    document.querySelector(".header").style.height = "300px";
  });
});

document.querySelector(".header").addEventListener("mouseleave", function () {
  this.style.height = "80px";
});

document.querySelectorAll(".head_menu a").forEach((a) => {
  a.addEventListener("mouseenter", function () {
    const bgEffect = document.querySelector(".background-effect");

    bgEffect.style.width = `${this.offsetWidth}px`;
    bgEffect.style.left = `${this.getBoundingClientRect().left}px`;
    bgEffect.style.backgroundColor = "#fbff00";
  });
});
