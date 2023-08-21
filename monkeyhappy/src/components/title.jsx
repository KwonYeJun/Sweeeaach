// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

// 폰트

import "@fontsource/jura";

export default function title() {
  return (
    <Box
      className="titleText"
      w="100%"
      h="5vh"
      mx="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize="64" fontFamily={"jura"}>
      KeyTypers
      </Text>
    </Box>
  );
}
