import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyBoard");
      if (targetElement) {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
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

  const handleKeyDown = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 누름`);
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
