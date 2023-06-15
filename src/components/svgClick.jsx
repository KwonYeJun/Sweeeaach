import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import "../css/keyboard.css";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyBoard");
      if (targetElement) {
        console.log(targetElement);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        settest(targetElement);
        // 자식들 찾다
        console.log(targetElement.children[2]);
      }
    }

    return () => {
      if (svgLoaded) {
        const targetElement = document.getElementById("KeyBoard");
        if (targetElement) {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);

          // 자식 요소의 이벤트 핸들러 제거
          const children = targetElement.children;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.removeEventListener("click", handleChildClick);
          }
        }
      }
    };
  }, [svgLoaded]);
  const handleSvgInjection = (event) => {
    if (svgLoaded) {
      if (/^[0-9]$/.test(event)) {
        const number = parseInt(event);
        const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#_${number}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log("숫자", rectElement);
      } else if (/^[+=]$/.test(event)) {
        const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#Num${event}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log("특문", rectElement);
      } else if (/[\uAC00-\uD7AF]+/.test(event)) {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Korean${event}`);
        console.log("한글", rectElement);
      } else if (/^[A-Z]$/.test(event)) {
        const lowercaseEvent = event.toLowerCase(); // 대문자를 소문자로 변환
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#${lowercaseEvent}`);
        console.log("대문자", rectElement);
      } else {
        const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
        rectElement.style.fill = "#d90429";
        // rect 요소에 접근하여 원하는 작업 수행
        console.log("test", rectElement);
      }
    }
  };
  const handleKeyDown = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 누름`);
    handleSvgInjection(pressedKey);
    console.log(test);
    playSound();
  };
  const handleKeyUp = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 뗐음`);
    // rect 요소의 style 속성을 제거합니다.
    const rectElement = document.querySelector(`#${pressedKey}`);
    rectElement.style.fill = null;
    playSoundTwo();
  };

  const playSound = () => {
    const clickOnPush = new Audio("/audio/keysoundTest/clickonPush.m4a");
    clickOnPush.play();
    clickOnPush.volume = Math.random();
  };

  const playSoundTwo = () => {
    const clickOnLeave = new Audio("/audio/keysoundTest/clickleavePush.m4a");
    clickOnLeave.play();
    clickOnLeave.volume = Math.random();
  };

  return (
    <div className="KeyboardBox">
      <ReactSVG
        src="svg/KeyBoard.svg"
        afterInjection={() => setSvgLoaded(true)}
      />
    </div>
  );
}
