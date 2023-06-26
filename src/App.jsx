import React from "react";
import { Route, Routes } from "react-router-dom";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import MainScreen from "./components/mainScreen";
import ClickSwitchSVG from "./components/svgClick";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "gray.800" : "gray.200";

  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/clickSwitch" element={<ClickSwitchSVG />} />
      </Routes>
    </>
  );
}
