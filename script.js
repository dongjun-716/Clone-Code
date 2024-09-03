//헤더 크기 조절
document.querySelectorAll(".head_menu a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    document.querySelector(".header").style.height = "300px";
  });
});

document.querySelector(".header").addEventListener("mouseleave", function () {
  this.style.height = "80px";
});

// 헤더 메뉴 background-effect
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

// Main Section 이미지 슬라이드
const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0; 
let animationID = 0;
let currentIndex = 0; 

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseleave', endDrag);

function startDrag(event) {
  event.preventDefault(); // 기본 드래그 동작 방지
  isDragging = true;
  startPos = event.clientX;
  slider.style.cursor = 'grabbing';
  animationID = requestAnimationFrame(animation);
}

function drag(event) {
  if (!isDragging) return;
  const currentPosition = event.clientX;
  currentTranslate = prevTranslate + currentPosition - startPos;
}

function endDrag() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  const movedBy = currentTranslate - prevTranslate;
  const slideWidth = slider.clientWidth;

  if (movedBy < -slideWidth / 10 && currentIndex < slider.childElementCount - 1) {
    currentIndex += 1;
  } else if(movedBy > slideWidth /10 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
  slider.style.cursor = 'grab';
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -slider.clientWidth;
  prevTranslate = currentTranslate;
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function animation() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
  if (isDragging) requestAnimationFrame(animation);
}

// 섹션바꾸기
document.querySelector('.container').addEventListener('wheel',(event) => {
  const container = event.currentTarget;
  const delta = event.deltaY;
  const logoB = document.querySelector('.logo_b');
  const logoY = document.querySelector('.logo_y');
  const main = document.querySelector('.main');
  const header = document.querySelector('.header');

  if (delta > 0) {
    container.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
    logoB.style.opacity = '0';
    logoY.style.opacity = '1';
    header.style.backgroundColor = "#ffffff";
  } else {
    container.scrollBy({
      top: -window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });

    if (main.getBoundingClientRect().top >= -1000){
      console.log(main.getBoundingClientRect().top);
      logoB.style.opacity = '1';
      logoY.style.opacity = '0';
      header.style.backgroundColor = "";
    }
  }

  event.preventDefault();
})