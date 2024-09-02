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
    const header = document.querySelector(".header");

    bgEffect.style.width = `${this.offsetWidth}px`;
    bgEffect.style.left = `${this.getBoundingClientRect().left - 1}px`;
    bgEffect.style.backgroundColor = "#fbff00";
    header.style.backgroundColor = "#ffffff";
  });
  a.addEventListener("mouseleave", function () {
    const bgEffect = document.querySelector(".background-effect");
    const header = document.querySelector(".header");
    
    bgEffect.style.width = "0px";
    header.style.backgroundColor = "";
  });
});
