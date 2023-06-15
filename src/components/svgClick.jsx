import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyBoard");
      if (targetElement) {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        settest(targetElement)
        // 자식들 찾다
        console.log(targetElement.children[2]);


      }
    }

    // Clean up event listeners
    return () => {
      if (svgLoaded) {
        const targetElement = document.getElementById("KeyBoard");
        if (targetElement) {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);
        }
      }
    };
  }, [svgLoaded]);
  const handleSvgInjection = (event) => {
    if (svgLoaded) {
      if (/^[0-9]$/.test(event)) {
        const number = parseInt(event);
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#_${number}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('숫자',rectElement);
      } 
      else if ((/^[+=]$/.test(event))){
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#Num${event}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('특문', rectElement);
      }
      else {
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('test', rectElement);
      }


      // const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
      // const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
      // // rect 요소에 접근하여 원하는 작업 수행
      // console.log('test',rectElement);
    }
  };
  const handleKeyDown = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 누름`);
    handleSvgInjection(pressedKey)
    console.log(test)
    playSound();
  };
  const handleKeyUp = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 뗐음`);
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
