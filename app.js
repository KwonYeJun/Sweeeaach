const container = document.getElementById("container");
let positionY = 0;
let movingDown = false;
const step = 50; // 이동 거리를 조정하려면 이 값을 변경하세요

container.style.transform = `translateY(${positionY}px)`;

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
  container.style.transform = `translateY(${positionY}px)`;
}

function moveUp() {
  positionY -= step;
  if (positionY < 0) {
    positionY = 0;
  }
  container.style.transform = `translateY(${positionY}px)`;
}
