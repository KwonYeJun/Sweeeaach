import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "./components/title";
import HelpText from "./components/helpText";
import SelectSwitch from "./components/selectSwitch";
// import "./css/root.css";

export default function App() {
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
        backgroundColor={"#D9D9D9"}
        mx={"auto"}
      >
        <Title />
        <SelectSwitch />
        <HelpText />
      </Box>
    </>
  );
}
