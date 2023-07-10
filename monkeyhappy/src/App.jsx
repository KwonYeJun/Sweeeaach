import React from "react";
import { Route, Routes } from "react-router-dom";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import MainScreen from "./components/mainScreen";
import ClickSwitchSVG from "./components/clickSwitch/clickSwitchSVG";
import LinearSwitchSVG from "./components/linearSwitch/linearSwitchSVG";
import TactileSwitchSVG from "./components/tactileSwitch/tactileSwitchSVG";
import BlackSwitchSVG from "./components/blackSwitch/blackSwitchSVG";
export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/clickSwitch" element={<ClickSwitchSVG />} />
        <Route path="/linearSwitch" element={<LinearSwitchSVG />} />
        <Route path="/tactileSwitch" element={<TactileSwitchSVG />} />
        <Route path="/blackSwitch" element={<BlackSwitchSVG />} />
      </Routes>
    </>
  );
}
