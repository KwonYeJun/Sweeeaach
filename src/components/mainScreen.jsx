import React from "react";
import { Box, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Title from "./title";
import HelpText from "./helpText";
import SelectSwitch from "./selectSwitch";

export default function MainScreen() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "gray.800" : "#D9D9D9";

  return (
    <Box
      display={"flex"}
      width="100%"
      height="100vh"
      className="container"
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      backgroundColor={backgroundColor}
      mx={"auto"}
    >
      <Title />
      <SelectSwitch />
      <HelpText />
      <IconButton
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        variant="ghost"
      />
    </Box>
  );
}
