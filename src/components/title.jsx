import React from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
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
      <Text fontSize="md">fortunate simian</Text>
    </Box>
  );
}
