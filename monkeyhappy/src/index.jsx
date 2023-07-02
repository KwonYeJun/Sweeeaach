import React from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode="light" />
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
