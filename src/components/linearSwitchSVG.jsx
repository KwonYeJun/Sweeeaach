import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { Box } from "@chakra-ui/react";

import "../css/keyboard.css";

export default function LinearKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    let linearOnPushSound;
    let linearOnLeaveSound;

    const playSound = () => {
      linearOnPushSound = new Audio("/audio/keysoundTest/linearOnPush.m4a");
      linearOnPushSound.play();
      linearOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      linearOnLeaveSound = new Audio("/audio/keysoundTest/linearOnLeave.m4a");
      linearOnLeaveSound.play();
      linearOnLeaveSound.volume = Math.random();
    };

    const handleKeyDown = (event) => {
      event.preventDefault();
      const pressedKey = event.key;
      console.log(event.code, " 이거");
      handleSvgInjection(pressedKey, event.code);
      console.log(pressedKey);
      playSound();
    };

    const handleKeyUp = (event) => {
      event.preventDefault();
      const pressedKey = event.key;
      console.log(`${pressedKey} 뗐음`);
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#${pressedKey}`);
      rectElement.style.fill = null;
      console.log("test", rectElement);
      playSoundTwo();
    };

    const handleSvgInjection = (event, code) => {
      if (svgLoaded) {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#${event}`);
        rectElement.style.fill = "#d90429";
        console.log("test", rectElement);
      }
    };

    // 마운트 시 이벤트 리스너 등록
    if (svgLoaded) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    // 언마운트 시 이벤트 리스너 제거 및 사운드 정지
    return () => {
      if (svgLoaded) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }

      if (linearOnPushSound) {
        linearOnPushSound.pause();
        linearOnPushSound = null;
      }
      if (linearOnLeaveSound) {
        linearOnLeaveSound.pause();
        linearOnLeaveSound = null;
      }
    };
  }, [svgLoaded]);

  return (
    <Box
      className="keyboardBoxArea"
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/linearSwitch.svg"
          afterInjection={() => setSvgLoaded(true)}
        />
      </Box>
    </Box>
  );
}
