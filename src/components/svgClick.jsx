import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyBoard");
      if (targetElement) {
        console.log(targetElement)
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        let keyboardsKeys = [];
        const children = targetElement.children[2].children;
        for (let i = 0; i < children.length; i++) {
          let keys = children[i];
          keyboardsKeys.push(keys);
          keys.addEventListener("click", console.log("클릭됨"));
        }
        console.log(keyboardsKeys);
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

  const handleChildClick = (event) => {
    // 자식 요소 클릭 시 실행되는 작업
    const clickedChild = event.target;
    console.log("자식 요소 클릭:", clickedChild);
    // 특정 작업 수행
  };

  const handleKeyDown = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 누름`);
    console.log(test);
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
