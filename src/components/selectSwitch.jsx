import React from "react";
import Click from "./click";
import SVGclick from "./svgClick";

import { Box } from "@chakra-ui/react";

export default function () {
  return (
    <Box width="100%" height="30vh">
      <div className="click">클릭</div>
      <div className="tactile">택타일</div>
      <div className="linear">리니어</div>
    </Box>
  );
}
