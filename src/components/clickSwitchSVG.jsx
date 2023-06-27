import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { Box, useColorMode, IconButton } from "@chakra-ui/react";

import "../css/keyboard.css";

export default function ClickKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyboardClickSwitch");
      if (targetElement) {
        console.log(targetElement);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        settest(targetElement);
        // 자식들 찾다
        console.log(targetElement.children[2]);
      }
    }

    return () => {
      if (svgLoaded) {
        const targetElement = document.getElementById("KeyBoard");
        if (targetElement) {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);

          // 자식 요소의 이벤트 핸들러 제거
          const children = targetElement.children;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.removeEventListener("click", handleChildClick);
          }
        }
      }
    };
  }, [svgLoaded]);
  const handleSvgInjection = (event, code) => {
    if (svgLoaded) {
      if (/^[0-9]$/.test(event)) {
        const _ber = parseInt(event);
        const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#_${_ber}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        rectElement.style.fill = "#d90429";
        console.log("숫자", rectElement);
      } else if (code === "ShiftLeft") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#LShift`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (code === "ShiftRight") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#RShift`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (code === "ControlLeft") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#L_Ctrl`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (code === "ControlRight") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#R_Ctrl`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (/^[ㄱ-ㅎ]+/.test(event)) {
        const svgElement = document.querySelector("svg");
        // 자음 변환 로직
        if (event === "ㄱ") {
          convertedKey = "r";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㄴ") {
          convertedKey = "s";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㄷ") {
          convertedKey = "e";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㄹ") {
          convertedKey = "f";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅁ") {
          convertedKey = "a";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅂ") {
          convertedKey = "q";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅅ") {
          convertedKey = "t";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅇ") {
          convertedKey = "d";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅈ") {
          convertedKey = "w";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅊ") {
          convertedKey = "c";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅋ") {
          convertedKey = "z";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅌ") {
          convertedKey = "x";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅍ") {
          convertedKey = "v";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅎ") {
          convertedKey = "g";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㄲ") {
          convertedKey = "rr";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㄸ") {
          convertedKey = "ss";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅃ") {
          convertedKey = "qq";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅆ") {
          convertedKey = "tt";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅉ") {
          convertedKey = "ww";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅏ") {
          convertedKey = "k";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅑ") {
          convertedKey = "i";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅓ") {
          convertedKey = "j";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅕ") {
          convertedKey = "u";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅗ") {
          convertedKey = "h";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅛ") {
          convertedKey = "y";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅜ") {
          convertedKey = "n";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅠ") {
          convertedKey = "b";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅡ") {
          convertedKey = "m";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅣ") {
          convertedKey = ",";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅐ") {
          convertedKey = "o";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅒ") {
          convertedKey = "l";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅔ") {
          convertedKey = "p";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        } else if (event === "ㅖ") {
          convertedKey = ";";
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          rectElement.style.fill = "#d90429";
          console.log("한글", rectElement);
        }
      } else if (/^[A-Z]$/.test(event)) {
        const lowercaseEvent = event.toLowerCase(); // 대문자를 소문자로 변환
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#${lowercaseEvent}`);
        rectElement.style.fill = "#d90429";
        console.log("대문자", rectElement);
      } else if (event === "]" || event === "}") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`[data-name="]"]`);
        rectElement.style.fill = "#d90429";
        console.log("]", rectElement);
      } else if (event === "[" || event === "{") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_2-2`);
        rectElement.style.fill = "#d90429";
        console.log("[", rectElement);
      } else if (event === "!") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_1`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "@") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_2`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "#") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_3`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "$") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_4`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "%") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_5`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "^") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_6`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "&") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_7`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "*") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_8`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "(") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_9`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === ")") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_0`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "_") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_-`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "+" || (event === "=" && code !== "NumpadAdd")) {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_`);
        rectElement.style.fill = "#d90429";
        console.log("특수문자", rectElement);
      } else if (event === "HangulMode") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#R_Alt`);
        rectElement.style.fill = "#d90429";
        console.log("오른쪽 Alt", rectElement);
      } else if (event === "-") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_-`);
        console.log("-", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === ";" || event === ":") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_3-2`);
        console.log(";", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === "," || event === "<") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_4-2`);
        console.log(",", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === "." || event === ">") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`[data-name="."]`);
        console.log(".", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === "?" || event === "/") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_5-2`);
        console.log("/", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === "\\" || event === "|") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_8-2`);
        console.log("/", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (event === "'" || event === '"') {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_6-2`);
        console.log("/", rectElement);
        rectElement.style.fill = "#d90429";
      } else if (code === "MetaLeft") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#L_Win_Cmd`);
        rectElement.style.fill = "#d90429";
        console.log("L_Win_Cmd", rectElement);
      } else if (code === "Space") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#SpaceBar`);
        rectElement.style.fill = "#d90429";
        console.log("SpaceBar", rectElement);
      } else if (code === "Backquote") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#___`);
        rectElement.style.fill = "#d90429";
        console.log("`", rectElement);
      } else if (code === "AltLeft") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#L_Alt`);
        rectElement.style.fill = "#d90429";
        console.log("L_Alt", rectElement);
      } else if (code === "NumpadSubtract") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num-`);
        rectElement.style.fill = "#d90429";
        console.log("Num-", rectElement);
      } else if (code === "NumpadMultiply") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_10`);
        rectElement.style.fill = "#d90429";
        console.log("_10", rectElement);
      } else if (code === "NumpadDivide") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#_9-2`);
        rectElement.style.fill = "#d90429";
        console.log("_9-2", rectElement);
      } else if (code === "NumLock") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#NumLock`);
        rectElement.style.fill = "#d90429";
        console.log("NumLock", rectElement);
      } else if (code === "NumpadAdd") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num_`);
        rectElement.style.fill = "#d90429";
        console.log("Num_", rectElement);
      } else if (code === "NumpadEnter") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#NumEnter`);
        rectElement.style.fill = "#d90429";
        console.log("NumEnter", rectElement);
      } else if (code === "Numpad0") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num0`);
        rectElement.style.fill = "#d90429";
        console.log("Num0", rectElement);
      } else if (code === "NumpadDecimal") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num.`);
        rectElement.style.fill = "#d90429";
        console.log("Num.", rectElement);
      } else if (code === "Numpad1") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num1`);
        rectElement.style.fill = "#d90429";
        console.log("Num1", rectElement);
      } else if (code === "Numpad2") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num2`);
        rectElement.style.fill = "#d90429";
        console.log("Num2", rectElement);
      } else if (code === "Numpad3") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num3`);
        rectElement.style.fill = "#d90429";
        console.log("Num3", rectElement);
      } else if (code === "Numpad4") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num4`);
        rectElement.style.fill = "#d90429";
        console.log("Num4", rectElement);
      } else if (code === "Numpad5") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num5`);
        rectElement.style.fill = "#d90429";
        console.log("Num5", rectElement);
      } else if (code === "Numpad6") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num6`);
        rectElement.style.fill = "#d90429";
        console.log("Num6", rectElement);
      } else if (code === "Numpad7") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num7`);
        rectElement.style.fill = "#d90429";
        console.log("Num7", rectElement);
      } else if (code === "Numpad8") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num8`);
        rectElement.style.fill = "#d90429";
        console.log("Num8", rectElement);
      } else if (code === "Numpad9") {
        const svgElement = document.querySelector("svg");
        const rectElement = svgElement.querySelector(`#Num9`);
        rectElement.style.fill = "#d90429";
        console.log("Num9", rectElement);
      } else {
        const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
        rectElement.style.fill = "#d90429";
        // rect 요소에 접근하여 원하는 작업 수행
        console.log("test", rectElement);
      }
    }
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    const pressedKey = event.key;
    console.log(event.code, " 이거");
    handleSvgInjection(pressedKey, event.code);
    console.log(pressedKey);
    playSound();
  };
  const handleKeyUp = (event) => {
    event.preventDefault();
    const pressedKey = event.key;
    console.log(`${pressedKey} 뗐음`);
    // rect 요소의 style 속성을 제거합니다.

    if (/^[0-9]$/.test(pressedKey)) {
      const _ber = parseInt(pressedKey);
      const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
      const rectElement = svgElement.querySelector(`#_${_ber}`); // <rect> 요소 식별
      // rect 요소에 접근하여 원하는 작업 수행
      rectElement.style.fill = null;
      console.log("숫자", rectElement);
    } else if (event.code === "Space") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#SpaceBar`);
      rectElement.style.fill = null;
      console.log("SpaceBar", rectElement);
    } else if (event.code === "ShiftLeft") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#LShift`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (event.code === "ShiftRight") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#RShift`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (event.code === "ControlLeft") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#L_Ctrl`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (event.code === "ControlRight") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#R_Ctrl`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (event.code === "AltLeft") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#L_Alt`);
      rectElement.style.fill = null;
      console.log("L_Alt", rectElement);
    } else if (event.code === "MetaLeft") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#L_Win_Cmd`);
      rectElement.style.fill = null;
      console.log("L_Win_Cmd", rectElement);
    } else if (event.code === "Backquote") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#___`);
      rectElement.style.fill = null;
      console.log("`", rectElement);
    } else if (event.code === "NumpadSubtract") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num-`);
      rectElement.style.fill = null;
      console.log("Num-", rectElement);
    } else if (event.code === "NumpadMultiply") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_10`);
      rectElement.style.fill = null;
      console.log("_10", rectElement);
    } else if (event.code === "NumpadDivide") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_9-2`);
      rectElement.style.fill = null;
      console.log("_9-2", rectElement);
    } else if (event.code === "NumLock") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#NumLock`);
      rectElement.style.fill = null;
      console.log("NumLock", rectElement);
    } else if (event.code === "NumpadAdd") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num_`);
      rectElement.style.fill = null;
      console.log("Num_", rectElement);
    } else if (event.code === "NumpadEnter") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#NumEnter`);
      rectElement.style.fill = null;
      console.log("NumEnter", rectElement);
    } else if (event.code === "Numpad0") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num0`);
      rectElement.style.fill = null;
      console.log("Num0", rectElement);
    } else if (event.code === "NumpadDecimal") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num.`);
      rectElement.style.fill = null;
      console.log("Num.", rectElement);
    } else if (event.code === "Numpad1") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num1`);
      rectElement.style.fill = null;
      console.log("Num1", rectElement);
    } else if (event.code === "Numpad2") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num2`);
      rectElement.style.fill = null;
      console.log("Num2", rectElement);
    } else if (event.code === "Numpad3") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num3`);
      rectElement.style.fill = null;
      console.log("Num3", rectElement);
    } else if (event.code === "Numpad4") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num4`);
      rectElement.style.fill = null;
      console.log("Num4", rectElement);
    } else if (event.code === "Numpad5") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num5`);
      rectElement.style.fill = null;
      console.log("Num5", rectElement);
    } else if (event.code === "Numpad6") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num6`);
      rectElement.style.fill = null;
      console.log("Num6", rectElement);
    } else if (event.code === "Numpad7") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num7`);
      rectElement.style.fill = null;
      console.log("Num7", rectElement);
    } else if (event.code === "Numpad8") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num8`);
      rectElement.style.fill = null;
      console.log("Num8", rectElement);
    } else if (event.code === "Numpad9") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#Num9`);
      rectElement.style.fill = null;
      console.log("Num9", rectElement);
    } else if (/^[ㄱ-ㅎ]+/.test(pressedKey)) {
      const svgElement = document.querySelector("svg");
      // 자음 변환 로직
      if (pressedKey === "ㄱ") {
        convertedKey = "r";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㄴ") {
        convertedKey = "s";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㄷ") {
        convertedKey = "e";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㄹ") {
        convertedKey = "f";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅁ") {
        convertedKey = "a";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅂ") {
        convertedKey = "q";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅅ") {
        convertedKey = "t";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅇ") {
        convertedKey = "d";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅈ") {
        convertedKey = "w";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅊ") {
        convertedKey = "c";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅋ") {
        convertedKey = "z";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅌ") {
        convertedKey = "x";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅍ") {
        convertedKey = "v";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅎ") {
        convertedKey = "g";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㄲ") {
        convertedKey = "rr";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㄸ") {
        convertedKey = "ss";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅃ") {
        convertedKey = "qq";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅆ") {
        convertedKey = "tt";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅉ") {
        convertedKey = "ww";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅏ") {
        convertedKey = "k";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅑ") {
        convertedKey = "i";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅓ") {
        convertedKey = "j";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅕ") {
        convertedKey = "u";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅗ") {
        convertedKey = "h";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅛ") {
        convertedKey = "y";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅜ") {
        convertedKey = "n";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅠ") {
        convertedKey = "b";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅡ") {
        convertedKey = "m";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅣ") {
        convertedKey = ",";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅐ") {
        convertedKey = "o";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅒ") {
        convertedKey = "l";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅔ") {
        convertedKey = "p";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      } else if (pressedKey === "ㅖ") {
        convertedKey = ";";
        const rectElement = svgElement.querySelector(`#${convertedKey}`);
        rectElement.style.fill = null;
        console.log("한글", rectElement);
      }
    } else if (/^[A-Z]$/.test(pressedKey)) {
      const lowercasepressedKey = pressedKey.toLowerCase(); // 대문자를 소문자로 변환
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#${lowercasepressedKey}`);
      rectElement.style.fill = null;
      console.log("대문자", rectElement);
    } else if (pressedKey === "!") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_1`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "@") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_2`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "#") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_3`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "$") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_4`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "%") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_5`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "^") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_6`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "&") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_7`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "*") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_8`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "(") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_9`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === ")") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_0`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "_") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_-`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (
      pressedKey === "+" ||
      (pressedKey === "=" && event.code !== "NumpadAdd")
    ) {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_`);
      rectElement.style.fill = null;
      console.log("특수문자", rectElement);
    } else if (pressedKey === "[" || pressedKey === "{") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_2-2`);
      rectElement.style.fill = null;
      console.log("[", rectElement);
    } else if (pressedKey === ";" || pressedKey === ":") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_3-2`);
      console.log(";", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === "HangulMode") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#R_Alt`);
      rectElement.style.fill = null;
      console.log("오른쪽 Alt", rectElement);
    } else if (pressedKey === "-") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_-`);
      console.log("-", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === "]" || pressedKey === "}") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`[data-name="]"]`);
      rectElement.style.fill = null;
      console.log("]", rectElement);
    } else if (pressedKey === "," || pressedKey === "<") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_4-2`);
      console.log(",", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === "." || pressedKey === ">") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`[data-name="."]`);
      console.log(".", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === "?" || pressedKey === "/") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_5-2`);
      console.log(",", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === "\\" || pressedKey === "|") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_8-2`);
      console.log("\\", rectElement);
      rectElement.style.fill = null;
    } else if (pressedKey === '"' || pressedKey === "'") {
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#_6-2`);
      console.log("\\", rectElement);
      rectElement.style.fill = null;
    } else {
      const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
      const rectElement = svgElement.querySelector(`#${pressedKey}`); // <rect> 요소 식별
      rectElement.style.fill = null;
      // rect 요소에 접근하여 원하는 작업 수행
      console.log("test", rectElement);
    }

    playSoundTwo();
  };

  const playSound = () => {
    const clickOnPush = new Audio("/audio/keysoundTest/clickOnPush.m4a");
    clickOnPush.play();
    clickOnPush.volume = Math.random();
  };

  const playSoundTwo = () => {
    const clickOnLeave = new Audio("/audio/keysoundTest/clickLeavePush.m4a");
    clickOnLeave.play();
    clickOnLeave.volume = Math.random();
  };

  return (
    <Box
      className="keyboardBoxArea"
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/clickSwitch.svg"
          afterInjection={() => setSvgLoaded(true)}
        />
      </Box>
    </Box>
  );
}
