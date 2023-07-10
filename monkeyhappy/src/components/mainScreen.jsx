import React from "react";
import {
  Box,
  useColorMode,
  IconButton,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import Title from "./title";
import HelpText from "./helpText";
import SelectSwitch from "./selectSwitch";

export default function MainScreen() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "light" ? "Dark" : "Light";

  return (
    <Box
      display={"flex"}
      width="100%"
      height="100vh"
      className="container"
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      textAlign={"center"}
      backgroundColor={backgroundColor}
      mx={"auto"}
    >
      <Title />
      <SelectSwitch />
      <HelpText />
      <Box
        className="creatorGithub"
        display={"flex"}
        justifyContent={"center"}S
        gap="20px"
      >
        <Link to={"https://github.com/KwonYeJun"}>
          <Button colorScheme="gray" leftIcon={<FaGithub />}>
            KwonYeJun
          </Button>
        </Link>

        <Link to={"https://github.com/krapli441"}>
          <Button colorScheme="gray" leftIcon={<FaGithub />}>
            krapli441
          </Button>
        </Link>
      </Box>
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
