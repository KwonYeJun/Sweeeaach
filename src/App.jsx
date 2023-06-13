// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import Title from "./components/title";
import Switches from "./components/selectSwitch";
import HelpText from "./components/helpText";

export default function App() {
  return (
    <div className="container">
      <Title />
      <Switches />
      <HelpText />
    </div>
  );
}
