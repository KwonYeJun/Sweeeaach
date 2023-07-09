import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { BsBackspace } from "react-icons/bs";
// import hand from './testUpEvent'
import { KeyUpEvent } from '../keyUpEvent';
import { KeyDownEvent } from './linearSwitchDown';
import "../../css/keyboard.css";

export default function LinearKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const pressedKeys = new Set();

    const playSound = () => {
      const linearOnPushSound = new Audio(
        "/audio/keysoundTest/linearOnPush.m4a"
      );
      linearOnPushSound.play();
      linearOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      const linearOnLeaveSound = new Audio(
        "/audio/keysoundTest/linearOnLeave.m4a"
      );
      linearOnLeaveSound.play();
      linearOnLeaveSound.volume = Math.random();
    };

    const handleKeyDown = (event) => {
      event.preventDefault();
      const pressedKey = event.key;

      if (pressedKeys.has(pressedKey)) {
        return; // 키가 이미 눌러져 있다면, 이벤트를 무시하고 반환
      }
      
      pressedKeys.add(pressedKey); // 키 추가
      console.log('이건코드',event.code); // 테스
      KeyDownEvent(pressedKey, event.code,svgLoaded);
  
      console.log('이건key',pressedKey);
      playSound();
    };

    const handleKeyUp = (event) => {
      event.preventDefault();
      const pressedKey = event.key;
      pressedKeys.delete(pressedKey); // 키 뗌 이벤트 발생 시 키를 집합에서 삭제
      KeyUpEvent(pressedKey, event.code,svgLoaded);

      playSoundTwo();
    };

    // const handleSvgInjection = (event, code) => {
    //   if (svgLoaded) {
    //     const svgElement = document.querySelector("svg");
    //     const rectElement = svgElement.querySelector(`#${event}`);
    //     rectElement.style.fill = "#d90429";
    //     console.log("test", rectElement);
    //   }
    // };

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
            color={"#DB3A34"}
            fontFamily={"Staatliches"}
          >
            LINEAR
          </Heading>
          <Text fontFamily={"Pretendard"}>
            택타일 스위치와 다르게 스템의 돌기가 선형적(Linear), 즉 올곧은
            직선이기 때문에 별도의 촉각적 걸림 없이 그대로 바닥까지 내려가는
            스위치이다. 대표적인 스위치는 적축(MX Red), 흑축(MX Black), 스피드
            은축(MX Speed Silver ). 저소음 적축과 저소음 흑축도 있다.
            진회축(Dark Grey, 혹은 Linear Grey)도 존재하지만 체리 홈페이지에는
            등재되지 않았다. 택타일 스위치인 회축(Grey)의 스프링을 사용한 리니어
            스위치인데, 그 무겁다는 흑축보다 무거워서 실사용하기엔 버거운 수준.
            때문에 상당히 희귀하다.
          </Text>
        </Box>
      </Box>
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/bluekey.svg"
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
