// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import Click from "./click";
import SVGclick from "./svgClick";
import { Box, Image } from "@chakra-ui/react";

export default function () {
  return (
    <Box
      className="selectSwitch"
      width="100%"
      height="25vh"
      mx="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="switchBoxArea" width={"15%"} height={"100%"}>
        <Box className="click"></Box>
      </Box>
      <Box className="switchBoxArea" width={"15%"} height={"100%"}>
        <Box className="tactile"></Box>
      </Box>
      <Box className="switchBoxArea" width={"15%"} height={"100%"}>
        <Box className="linear"></Box>
      </Box>
    </Box>
  );
}
