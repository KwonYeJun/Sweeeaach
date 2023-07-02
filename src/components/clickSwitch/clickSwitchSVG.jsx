import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { BsBackspace } from "react-icons/Bs";
import { KeyUpEvent } from '../keyUpEvent';
import { KeyDown } from './clickSwitchDown';
import "../../css/keyboard.css";

export default function ClickKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const pressedKeys = new Set();

    const playSound = () => {
      const clickOnPushSound = new Audio("/audio/keysoundTest/clickOnPush.m4a");
      clickOnPushSound.play();
      clickOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      const clickOnLeaveSound = new Audio(
        "/audio/keysoundTest/clickOnLeave.m4a"
      );
      clickOnLeaveSound.play();
      clickOnLeaveSound.volume = Math.random();
    };

    const handleKeyDown = (event) => {
      event.preventDefault();
      const pressedKey = event.key;

      if (pressedKeys.has(pressedKey)) {
        return; // 키가 이미 눌러져 있다면, 이벤트를 무시하고 반환
      }
      
      pressedKeys.add(pressedKey); // 키 추가
      console.log('이건코드',event.code); // 테스
      KeyDown(pressedKey, event.code,svgLoaded);
  
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
    //     // 여기 if 조건 문으로 작엉 하면 된다.
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
            color={"#00A6FB"}
            fontFamily={"Staatliches"}
          >
            CLICK
          </Heading>
          <Text fontFamily={"Pretendard"}>
            체리MX 청축(Blue), 녹축(Clicky Green), 백축(Clicky White)이 이
            분류에 해당된다. 다만, 녹축과 백축은 한국에서 구하기 힘들며 판매처도
            해외구매 방식으로 판매하는 경우가 대부분이다. 구조를 보면 스템이
            걸쇠를 포함한 부분과 몸체로 나뉘어져 별도로 움직인다. 해당 부품을
            재킷이라고 부르는데, 걸쇠의 돌기 부분이 완전히 통과하면 재킷이
            반발력에 의해 강하게 하강하여 특유의 찰칵하는 클릭 사운드를 만들어
            내는게 특징이다. 청각적, 촉각적 피드백을 둘 다 최대한 자극적으로
            유도한 스위치이기 때문에, 다른 방식의 키보드에서 기계식으로 넘어오는
            입문자들이 주로 사용하던 스위치로 유명했다. 때문에 기계식키보드가
            PC방에 도입될 때 대부분 해당 계열의 스위치로 도배가 되어 PC방 키보드
            스위치의 대명사가 되었다.
          </Text>
        </Box>
      </Box>
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/clickSwitch.svg"
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
