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
      <Text fontSize={24} fontFamily={"Pretendard"}>
        기계식 키보드에서 가장 인기있는 세가지 축의 소리를 담았습니다.<br></br>
        자유롭게 타건하시고, 여러분에게 맞는 키보드는 어떤 축인지 찾아보세요.
      </Text>
    </Box>
  );
}
