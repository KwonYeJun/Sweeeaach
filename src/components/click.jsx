import React, { useEffect, useRef } from 'react';
import paper from 'paper';

function PaperCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log('키 입력 감지됨');
      playSound();
    };

    const handleKeyUp = (event) => {
      console.log('키 입력 감지됨');
      playSoundTwo();
    };

    const playSound = () => {
      const clickOnPush = new Audio('/audio/keysoundTest/clickonPush.m4a');
      clickOnPush.play();
      clickOnPush.volume = Math.random();
    };

    const playSoundTwo = () => {
      const clickOnLeave = new Audio('/audio/keysoundTest/clickleavePush.m4a');
      clickOnLeave.play();
      clickOnLeave.volume = Math.random();
    };

    const canvas = canvasRef.current;
    const paperScope = new paper.PaperScope();

    paperScope.setup(canvas);

    let boolean = true;
    let tool;
    let backSpace;

    paperScope.project.importSVG('/SVG/Keyboard.svg', (item) => {
      console.log(item);
      const centerX = paperScope.view.center.x;
      const centerY = paperScope.view.center.y;
      item.position = new paperScope.Point(centerX, centerY);
      const switchHouse = Object.values(item.children[2]._children);
      backSpace = item.children[2]._children.BackSpace;
      tool = new paperScope.Tool();

      backSpace.onKeyDown = tool.onKeyDown;
      tool.onKeyDown = handleKeyDown;
    });

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default PaperCanvas;
