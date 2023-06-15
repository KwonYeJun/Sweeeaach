import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    if (svgLoaded) {
      const targetElement = document.getElementById("KeyBoard");
      if (targetElement) {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        settest(targetElement)
        // 자식들 찾다
        console.log(targetElement.children[2]);


      }
    }

    // Clean up event listeners
    return () => {
      if (svgLoaded) {
        const targetElement = document.getElementById("KeyBoard");
        if (targetElement) {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);
        }
      }
    };
  }, [svgLoaded]);
  const handleSvgInjection = (event) => {
    if (svgLoaded) {
      if (/^[0-9]$/.test(event)) {
        const number = parseInt(event);
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#_${number}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('숫자', rectElement);
      }
      else if ((/^[+=]$/.test(event))) {
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#Num${event}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('특문', rectElement);
      }
      else if (/[\uAC00-\uD7AF]+/.test(event)) {
        const svgElement = document.querySelector('svg');

        // 자음 변환 로직
        if (keyPressed === 'ㄱ') {
          convertedKey = 'r';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㄴ') 
        {
          convertedKey = 's';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㄷ') 
        {
          convertedKey = 'e';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㄹ') 
        {
          convertedKey = 'f';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅁ') 
        {
          convertedKey = 'a';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅂ') 
        {
          convertedKey = 'q';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅅ') 
        {
          convertedKey = 't';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅇ') 
        {
          convertedKey = 'd';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅈ') 
        {
          convertedKey = 'w';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅊ') 
        {
          convertedKey = 'c';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅋ') 
        {
          convertedKey = 'z';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅌ') 
        {
          convertedKey = 'x';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅍ') 
        {
          convertedKey = 'v';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅎ') 
        {
          convertedKey = 'g';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㄲ') 
        {
          convertedKey = 'rr';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㄸ') 
        {
          convertedKey = 'ss';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅃ') 
        {
          convertedKey = 'qq';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅆ') 
        {
          convertedKey = 'tt';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅉ') 
        {
          convertedKey = 'ww';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅏ') 
        {
          convertedKey = 'k';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅑ') 
        {
          convertedKey = 'i';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅓ') 
        {
          convertedKey = 'j';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅕ') 
        {
          convertedKey = 'u';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅗ') 
        {
          convertedKey = 'h';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅛ') 
        {
          convertedKey = 'y';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅜ') 
        {
          convertedKey = 'n';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅠ') 
        {
          convertedKey = 'b';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅡ') 
        {
          convertedKey = 'm';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅣ') 
        {
          convertedKey = ',';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅐ') 
        {
          convertedKey = 'o';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅒ') 
        {
          convertedKey = 'l';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅔ') 
        {
          convertedKey = 'p';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        } else if (keyPressed === 'ㅖ') 
        {
          convertedKey = ';';
          const rectElement = svgElement.querySelector(`#${convertedKey}`);
          console.log('한글', rectElement);
        }

      }
      else if (/^[A-Z]$/.test(event)) {
        const lowercaseEvent = event.toLowerCase(); // 대문자를 소문자로 변환
        const svgElement = document.querySelector('svg');
        const rectElement = svgElement.querySelector(`#${lowercaseEvent}`);
        console.log('대문자', rectElement);
      }
      else {
        const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
        const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
        // rect 요소에 접근하여 원하는 작업 수행
        console.log('test', rectElement);
      }


      // const svgElement = document.querySelector('svg'); // SVG 컨테이너 요소 선택
      // const rectElement = svgElement.querySelector(`#${event}`); // <rect> 요소 식별
      // // rect 요소에 접근하여 원하는 작업 수행
      // console.log('test',rectElement);
    }
  };
  const handleKeyDown = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 누름`);
    handleSvgInjection(pressedKey)
    console.log(test)
    playSound();
  };
  const handleKeyUp = (event) => {
    const pressedKey = event.key;
    console.log(`${pressedKey} 뗐음`);
    playSoundTwo();
  };

  const playSound = () => {
    const clickOnPush = new Audio("/audio/keysoundTest/clickonPush.m4a");
    clickOnPush.play();
    clickOnPush.volume = Math.random();
  };

  const playSoundTwo = () => {
    const clickOnLeave = new Audio("/audio/keysoundTest/clickleavePush.m4a");
    clickOnLeave.play();
    clickOnLeave.volume = Math.random();
  };

  return (
    <div className="KeyboardBox">
      <ReactSVG
        src="svg/KeyBoard.svg"
        afterInjection={() => setSvgLoaded(true)}
      />

    </div>
  );
}
