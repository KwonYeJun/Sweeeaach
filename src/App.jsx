import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import MainScreen from "./components/mainScreen";

import Title from "./components/title";
import HelpText from "./components/helpText";
import SelectSwitch from "./components/selectSwitch";

import ClickSwitchSVG from "./components/svgClick";
// import "./css/root.css";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "gray.800" : "gray.200";
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />}></Route>
        <Route path="/clickSwitch" element={<ClickSwitchSVG />}></Route>
      </Routes>
      <MainScreen />
    </>
  );
}
