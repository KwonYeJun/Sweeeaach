import React from "react";
import { Box } from "@chakra-ui/react";

export default function helpText() {
  return (
    <Box
      className="helpText"
      width="100%"
      height="5vh"
      mx="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <h3>스위치를 클릭하여 테스트 해보세요.</h3>
    </Box>
  );
}
