import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "./components/title";
import HelpText from "./components/helpText";

export default function App() {
  return (
    <Box w={"100%"} h={"100%"} mx={"auto"} className="container">
      <Title />
      <HelpText />
    </Box>
  );
}
