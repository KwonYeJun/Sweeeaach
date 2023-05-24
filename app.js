const container = document.getElementById("container");
const Pillar = document.querySelector(".keyPillar");
let positionY = 0;
let movingDown = false;
const step = 30; // 이동 거리를 조정하려면 이 값을 변경하세요

Pillar.style.transform = `translateY(${positionY}px)`;

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
  Pillar.style.transform = `translateY(${positionY}px)`;
}

function moveUp() {
  positionY -= step;
  if (positionY < 0) {
    positionY = 0;
  }
  Pillar.style.transform = `translateY(${positionY}px)`;
}
