import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { BsBackspace } from "react-icons/Bs";
import { KeyUpEvent } from '../keyUpEvent';
import { KeyDown } from './tactileSwitchDown';
import "../../css/keyboard.css";

export default function TactileKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const pressedKeys = new Set();

    const playSound = () => {
      const linearOnPushSound = new Audio(
        "/audio/keysoundTest/tactileOnPush.m4a"
      );
      linearOnPushSound.play();
      linearOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      const linearOnLeaveSound = new Audio(
        "/audio/keysoundTest/tactileOnLeave.m4a"
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
    //     const svgElement = document.querySelector("svg");
    //     const rectElement = svgElement.querySelector(`#${event}`);
    //     rectElement.style.fill = "#d90429";
    //     console.log("test", rectElement);
    //   }
    // };

    // // 마운트 시 이벤트 리스너 등록
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
            color={"#5E503F"}
            fontFamily={"Staatliches"}
          >
            TACTILE
          </Heading>
          <Text fontFamily={"Pretendard"}>
            택타일 계열 스위치 중 클릭 사운드를 내기 위한 재킷이 달려있지 않은
            스위치이다. 청축의 클릭감은 좋지만 지나친 소음이 신경쓰이는
            사용자들에게 가장 추천되는 축 역시 갈축이다. 적당한 소음, 적당한
            키압, 기계식 느낌은 가져가면서도 실 사용이 부담스럽지 않은 키감을
            가졌기 때문이다. 가장 무난한 스위치라고 할 수 있어 게임용으로든
            사무용으로든 적절하게 사용할 수 있다. 청축은 소음이 시끄러운 건 물론
            갈축에 비해 좀 더 세게 쳐야 하므로 장시간 타자를 치기엔 손가락에
            다소 부담이 가는 편이고, 적축은 구분감이 없어 기계식 키보드의 강렬한
            피드백을 생각하고 구매한 사람들에게 실망을 안기기 때문이다. 물론
            갈축의 이런 느낌을 이도저도 아닌 것 같다며 싫어하는 사람들도 없는
            것은 아니지만, 시끄러운 청축이나 심심한 적축에 비해 호불호가
            상대적으로 적게 갈리는 것도 사실.
          </Text>
        </Box>
      </Box>
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/tactileSwitch.svg"
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
