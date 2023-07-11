import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { BsBackspace } from "react-icons/bs";
import { KeyUpEvent } from '../keyUpEvent';
import { KeyDownEvent } from './blackSwitchDown';
import "../../css/keyboard.css";
// import linearOnPushSoundFile from "/audio/keysoundTest/linearOnPush.m4a";
// import linearOnLeaveSoundFile from "/audio/keysoundTest/linearOnLeave.m4a";

import linearOnPushSoundFile from "../../audio/keysoundTest/linearOnPush.m4a";
import linearOnLeaveSoundFile from "../../audio/keysoundTest/linearOnLeave.m4a";


export default function LinearKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const pressedKeys = new Set();

    const playSound = () => {
      const linearOnPushSound = new Audio(linearOnPushSoundFile);
      linearOnPushSound.play();
      linearOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      const linearOnLeaveSound = new Audio(linearOnLeaveSoundFile);
      linearOnLeaveSound.play();
      linearOnLeaveSound.volume = Math.random();
    };
    // const playSound = () => {
    //   const linearOnPushSound = new Audio(
    //     "/audio/keysoundTest/linearOnPush.m4a"
    //   );
    //   linearOnPushSound.play();
    //   linearOnPushSound.volume = Math.random();
    // };

    // const playSoundTwo = () => {
    //   const linearOnLeaveSound = new Audio(
    //     "/audio/keysoundTest/linearOnLeave.m4a"
    //   );
    //   linearOnLeaveSound.play();
    //   linearOnLeaveSound.volume = Math.random();
    // };

    const handleKeyDown = (event) => {
      event.preventDefault();
      const pressedKey = event.key;

      if (pressedKeys.has(pressedKey)) {
        return; // 키가 이미 눌러져 있다면, 이벤트를 무시하고 반환
      }

      pressedKeys.add(pressedKey); // 키 추가
      console.log('이건코드', event.code); // 테스
      KeyDownEvent(pressedKey, event.code, svgLoaded);

      console.log('이건key', pressedKey);
      playSound();
    };

    const handleKeyUp = (event) => {
      event.preventDefault();
      const pressedKey = event.key;
      pressedKeys.delete(pressedKey); // 키 뗌 이벤트 발생 시 키를 집합에서 삭제
      KeyUpEvent(pressedKey, event.code, svgLoaded);

      playSoundTwo();
    };


    // 마운트 시 이벤트 리스너 등록
    if (svgLoaded) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      if (svgLoaded) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, [svgLoaded]);

  return (
    <Box
      className="container"
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap="3%"
    >
      <Box className="keyboardInformationBox" display={"flex"} width={"50%"}>
        <Box className="switchInformation" width={"100%"}>
          <Heading
            className="switchTitle"
            fontSize={"140px"}
            color={"#101010"}
            fontFamily={"Staatliches"}
          >
            LINEAR
          </Heading>
          <Text fontFamily={"Pretendard"}>
            많이 사용되는 키축타입은 아니지만 스위치 부분이 리니어 방식으로 되어 있어 적은 소음과 부드러움이 있지만 높은 키압을 가지고 있어 부드러운 눌림과 높은 키압으로 인한 묵직함이 동시에 존재하는 독특한 키축 방식입니다.
          </Text>
        </Box>
      </Box>
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/newBlackSwitch.svg"
          // src="svg/testkey.svg"
          afterInjection={() => setSvgLoaded(true)}
        />
      </Box>
      <Link to={"/"}>
        <Button leftIcon={<BsBackspace />} variant="solid">
          Backspace
        </Button>
      </Link>
    </Box>
  );
}
