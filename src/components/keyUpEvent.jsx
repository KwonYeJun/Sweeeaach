export function KeyUpEvent(event, code,svgLoaded) {
  if (svgLoaded) {
    const isNotNumpadKey = !code.startsWith("Numpad");
    if (/^[0-9]$/.test(event)&& isNotNumpadKey) {
      const _ber = parseInt(event);
      const svgElement = document.querySelector("svg"); // SVG 컨테이너 요소 선택
      const rectElement = svgElement.querySelector(`#_${_ber}`); // <rect> 요소 식별
      // rect 요소에 접근하여 원하는 작업 수행
      rectElement.style.fill = null;
      console.log('숫자', rectElement);
    }
    else if (code === 'Space') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#SpaceBar`);
      rectElement.style.fill = null;
      console.log('SpaceBar', rectElement);
    } 
    else if (code === 'ShiftLeft') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#LShift`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } 
    else if (code === 'ShiftRight') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#RShift`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } 
    else if (code === 'ControlLeft') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#L_Ctrl`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } 
    else if (code === 'ControlRight') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#R_Ctrl`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } 
    else if (code === 'AltLeft') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#L_Alt`);
      rectElement.style.fill = null;
      console.log('L_Alt', rectElement);
    } 
    else if (code === 'MetaLeft') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#L_Win_Cmd`);
      rectElement.style.fill = null;
      console.log('L_Win_Cmd', rectElement);
    }  else if (code=== 'Backquote') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#___`);
      rectElement.style.fill = null;
      console.log('`', rectElement);
    } 
    else if (code === 'NumpadSubtract') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num-`);
      rectElement.style.fill = null;
      console.log('Num-', rectElement);
    } 
    else if (code === 'NumpadMultiply') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_10`);
      rectElement.style.fill = null;
      console.log('_10', rectElement);
    } 
    else if (code === 'NumpadDivide') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_9-2`);
      rectElement.style.fill = null;
      console.log('_9-2', rectElement);
    }   else if (code === 'NumLock') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#NumLock`);
      rectElement.style.fill = null;
      console.log('NumLock', rectElement);
    } 
    else if (code === 'NumpadAdd') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num_`);
      rectElement.style.fill = null;
      console.log('Num_', rectElement);
    } 
    else if (code === 'NumpadEnter') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#NumEnter`);
      rectElement.style.fill = null;
      console.log('NumEnter', rectElement);
    } 
    else if (code === 'Numpad0') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num0`);
      rectElement.style.fill = null;
      console.log('Num0', rectElement);
    } 
    else if (code === 'NumpadDecimal') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num.`);
      rectElement.style.fill = null;
      console.log('Num.', rectElement);
    } 
    else if (code === 'Numpad1') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num1`);
      rectElement.style.fill = null;
      console.log('Num1', rectElement);
    } 
    else if (code === 'Numpad2') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num2`);
      rectElement.style.fill = null;
      console.log('Num2', rectElement);
    } 
    else if (code === 'Numpad3') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num3`);
      rectElement.style.fill = null;
      console.log('Num3', rectElement);
    } 
    else if (code === 'Numpad4') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num4`);
      rectElement.style.fill = null;
      console.log('Num4', rectElement);
    } else if (code === 'Numpad5') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num5`);
      rectElement.style.fill = null;
      console.log('Num5', rectElement);
    } else if (code === 'Numpad6') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num6`);
      rectElement.style.fill = null;
      console.log('Num6', rectElement);
    } else if (code === 'Numpad7') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num7`);
      rectElement.style.fill = null;
      console.log('Num7', rectElement);
    } else if (code === 'Numpad8') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num8`);
      rectElement.style.fill = null;
      console.log('Num8', rectElement);
    } else if (code === 'Numpad9') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#Num9`);
      rectElement.style.fill = null;
      console.log('Num9', rectElement);
    } 
    else if (/^[A-Z]$/.test(event)) {
      const lowercaseevent = event.toLowerCase(); // 대문자를 소문자로 변환
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#${lowercaseevent}`);
      rectElement.style.fill = null;
      console.log('대문자', rectElement);
    }
    // 특문 오른쪽 알트
    else if (event === '!') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_1`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '@') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_2`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '#') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_3`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '$') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_4`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '%') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_5`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '^') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_6`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '&') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_7`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '*') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_8`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '(') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_9`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === ')') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_0`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '_') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_-`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    } else if (event === '+' || event === '=') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_2-2`);
      rectElement.style.fill = null;
      console.log('특수문자', rectElement);
    }
    else if (code === 'Backquote') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_`);
      rectElement.style.fill = null;
      console.log('`', rectElement);
    } 
    else if (event === '[' || event === '{') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_2-2`);
      rectElement.style.fill = null;
      console.log('[', rectElement);
    }
    else if (event === ';' || event === ':') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_3-2`);
      console.log(';', rectElement);
      rectElement.style.fill = null;
    }

    else if (event === 'HangulMode') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#R_Alt`);
      rectElement.style.fill = null;
      console.log('오른쪽 Alt', rectElement);
    }
    else if (event === '-') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_-`);
      console.log('-', rectElement);
      rectElement.style.fill = null;
    }
    else if (event === ']' || event === '}') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`[data-name="]"]`);
      rectElement.style.fill = null;
      console.log(']', rectElement);
    }
    else if (event === ',' || event === '<') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_4-2`);
      console.log(',', rectElement);
      rectElement.style.fill = null;
    }
    else if (event === '.' || event === '>') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`[data-name="."]`);
      console.log('.', rectElement);
      rectElement.style.fill = null;
    }
    else if (event === '?' || event === '/') {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_5-2`);
      console.log(',', rectElement);
      rectElement.style.fill = null;
    }
    else if (event === '\\' || event === "|") {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_8-2`);
      console.log('\\', rectElement);
      rectElement.style.fill = null;
    }
    else if (event === '"' || event === "'") {
      const svgElement = document.querySelector('svg');
      const rectElement = svgElement.querySelector(`#_6-2`);
      console.log('\\', rectElement);
      rectElement.style.fill = null;
    }



    else{
      const svgElement = document.querySelector("svg");
      const rectElement = svgElement.querySelector(`#${event}`);
      rectElement.style.fill = null;
      console.log(code+'code', rectElement);
    }
  }
}
