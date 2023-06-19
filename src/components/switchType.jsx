// 리액트 라이브러리
import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import ClickSwitch from "./clickSwitch";
import TactileSwitch from "./tacitleSwitch";
import LinearSwitch from "./linearSwitch";

import "@fontsource/koulen"

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
          <ClickSwitch></ClickSwitch>
          <Text fontFamily={"Koulen"}>CLICK</Text>
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
          <TactileSwitch></TactileSwitch>
          <Text>TACTILE</Text>
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
          <LinearSwitch></LinearSwitch>
          <Text>LINEAR</Text>
        </Box>
      </Box>
    </>
  );
}
