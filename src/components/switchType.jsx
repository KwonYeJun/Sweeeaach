// 리액트 라이브러리
import React from "react";

import { Box, Image } from "@chakra-ui/react";

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
        <Box className="click">
          <Image src="/img/click.png"></Image>
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
        <Box className="tactile">
          <Image src="/img/tactile.png"></Image>
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
        <Box className="linear">
          <Image src="/img/linear.png"></Image>
        </Box>
      </Box>
    </>
  );
}
