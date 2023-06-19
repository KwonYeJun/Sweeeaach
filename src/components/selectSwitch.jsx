import React from "react";
import Click from "./click";
import SVGclick from "./svgClick";

import { Box } from "@chakra-ui/react";

export default function () {
  return (
    <Box
      className="selectSwitch"
      width="100%"
      height="20vh"
      mx="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="switchBoxArea">
        <Box className="click"></Box>
      </Box>
      <Box className="switchBoxArea">
        <Box className="tactile"></Box>
      </Box>
      <Box className="switchBoxArea">
        <Box className="linear"></Box>
      </Box>
    </Box>
  );
}
