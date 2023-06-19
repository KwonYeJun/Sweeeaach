import React from "react";
import { Box } from "@chakra-ui/react";
import Title from "./components/title";
import HelpText from "./components/helpText";

export default function App() {
  return (
    <div className="container">
      <Box>
        <Title />
        <HelpText />
      </Box>
    </div>
  );
}
