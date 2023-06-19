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
      <div className="click">클릭</div>
      <div className="tactile">택타일</div>
      <div className="linear">리니어</div>
    </Box>
  );
}
