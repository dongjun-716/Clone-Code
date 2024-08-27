document.querySelectorAll(".head_menu a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    document.querySelector(".header").style.height = "300px";
  });
});

document.querySelector(".header").addEventListener("mouseleave", function () {
  this.style.height = "80px";
});
