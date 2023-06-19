import React from "react";
import { Box, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Title from "./components/title";
import HelpText from "./components/helpText";
import SelectSwitch from "./components/selectSwitch";
// import "./css/root.css";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "gray.800" : "gray.200";
  return (
    <>
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
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          variant="ghost"
        />
      </Box>
    </>
  );
}
