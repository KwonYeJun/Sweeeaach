import React from "react";
import { Route, Routes } from "react-router-dom";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import MainScreen from "./components/mainScreen";
import ClickSwitchSVG from "./components/clickSwitchSVG";
import LinearSwitchSVG from "./components/linearSwitchSVG";
import TactileSwitchSVG from "./components/tactileSwitch.SVG";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/clickSwitch" element={<ClickSwitchSVG />} />
        <Route path="/linearSwitch" element={<LinearSwitchSVG />} />
        <Route path="/tactileSwitch" element={<TactileSwitchSVG />} />
      </Routes>
    </>
  );
}
