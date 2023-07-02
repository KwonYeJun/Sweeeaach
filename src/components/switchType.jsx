// 리액트 라이브러리
import React from "react";
import { Link } from "react-router-dom";
// 리액트 컴포넌트
import { Box, Image, Text } from "@chakra-ui/react";
import ClickSwitch from "./clickSwitch";
import TactileSwitch from "./tactileSwitch";
import LinearSwitch from "./linearSwitch";

import "@fontsource/Koulen";

export default function () {
  return (
    <>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="clickBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Link to={"/clickSwitch"}>
            <ClickSwitch />
          </Link>
          <Text
            fontFamily={"Pretendard"}
            fontSize={35}
            fontWeight={900}
            color={"#00A6FB"}
          >
            CLICK
          </Text>
        </Box>
      </Box>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="tactileBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Link to={"/tactileSwitch"}>
            <TactileSwitch></TactileSwitch>
          </Link>
          <Text
            fontFamily={"Pretendard"}
            fontSize={35}
            fontWeight={900}
            color={"#5E503F"}
          >
            TACTILE
          </Text>
        </Box>
      </Box>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="linearBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Link to={"/linearSwitch"}>
            <LinearSwitch></LinearSwitch>
          </Link>
          <Text
            fontFamily={"Pretendard"}
            fontSize={35}
            fontWeight={900}
            color={"#DB3A34"}
          >
            LINEAR
          </Text>
        </Box>
      </Box>
    </>
  );
}
