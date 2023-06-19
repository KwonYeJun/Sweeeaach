// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

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
      <Text fontSize={24} fontFamily={"Pretendard"}>스위치를 클릭하여 테스트 해보세요.</Text>
    </Box>
  );
}
