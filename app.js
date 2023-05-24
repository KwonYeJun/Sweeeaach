const container = document.getElementById("container");
const middlePillar = document.querySelector(".keyMiddlePillar");
const Pillar = document.querySelector(".keyPillar");
const keyHook = document.querySelector(".keyHook");
let positionY = 0;
let positionX = 0;
let movingDown = false;
const step = 40; // 이동 거리를 조정하려면 이 값을 변경하세요
const xStep = 10;

Pillar.style.transform = `translateY(${positionY}px)`;
middlePillar.style.transform = `translateY(${positionY}px)`;
keyHook.style.transform = `translateX(${positionX}px)`;

window.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "ArrowUp" || key === "ArrowDown") {
    event.preventDefault(); // 화살표 키의 기본 동작(스크롤)을 막습니다.
  }

  if (key === "ArrowDown" && !movingDown) {
    movingDown = true;
    moveDown();
  }
});

window.addEventListener("keyup", (event) => {
  const key = event.key;

  if (key === "ArrowDown") {
    movingDown = false;
    moveUp();
  }
});

function moveDown() {
  positionY += step;
  positionX += xStep;
  Pillar.style.transform = `translateY(${positionY}px)`;
  middlePillar.style.transform = `translateY(${positionY}px)`;
  keyHook.style.transform = `translateX(${positionX}px)`;
}

function moveUp() {
  positionY -= step;
  positionX -= xStep;
  if (positionY < 0) {
    positionY = 0;
  }
  if (positionX < 0) {
    postionX = 0;
  }
  Pillar.style.transform = `translateY(${positionY}px)`;
  middlePillar.style.transform = `translateY(${positionY}px)`;
  keyHook.style.transform = `translateX(${positionX}px)`;
}

// keyMiddlePillar.style.transform = `translateY(${positionY}px)`;

// window.addEventListener("keydown", (event) => {
//   const key = event.key;

//   if (key === "ArrowUp" || key === "ArrowDown") {
//     event.preventDefault(); // 화살표 키의 기본 동작(스크롤)을 막습니다.
//   }

//   if (key === "ArrowDown" && !movingDown) {
//     movingDown = true;
//     moveDown();
//   }
// });

// window.addEventListener("keyup", (event) => {
//   const key = event.key;

//   if (key === "ArrowDown") {
//     movingDown = false;
//     moveUp();
//   }
// });

// function moveDown() {
//   positionY += step;
//   keyMiddlePillar.style.transform = `translateY(${positionY}px)`;
// }

// function moveUp() {
//   positionY -= step;
//   if (positionY < 0) {
//     positionY = 0;
//   }
//   Pillar.style.transform = `translateY(${positionY}px)`;
// }
