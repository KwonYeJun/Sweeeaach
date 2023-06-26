// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import SVGclick from "./clickSwitchSVG";
import { Box, Image } from "@chakra-ui/react";
import SwitchType from "./switchType";

export default function () {
  return (
    <Box
      className="selectSwitch"
      width="75%"
      height="25vh"
      mx="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SwitchType />
    </Box>
  );
}
