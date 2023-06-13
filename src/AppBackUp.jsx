import React, { useEffect } from "react";
import paper from "paper";

function App() {
  useEffect(() => {
    const canvasRef = React.createRef();

    const onKeyDown = (event) => {
      console.log("키 입력됨");
    };

    const playSound = () => {
      const clickOnPush = new Audio(
        "./src/audio/keysound_edit/click_onPush.m4a"
      );
      clickOnPush.play();
      clickOnPush.volume = Math.random();
    };

    const playSoundTwo = () => {
      const clickOnLeave = new Audio(
        "./src/audio/keysound_edit/click_leavePush.m4a"
      );
      clickOnLeave.play();
      clickOnLeave.volume = Math.random();
    };

    const importSVG = (path, callback) => {
      paper.project.importSVG(path, callback);
    };

    useEffect(() => {
      const papers = new paper.PaperScope();
      papers.setup(canvasRef.current);

      let tool;

      papers.view.onKeyDown = onKeyDown;

      importSVG("./SVG/Keyboard.svg", (item) => {
        const centerX = papers.view.center.x;
        const centerY = papers.view.center.y;
        item.position = new papers.Point(centerX, centerY);
        const switchHouse = Object.values(item.children[2]["_children"]);
        const backSpace = item.children[2]["_children"]["BackSpace"];
        tool = new papers.Tool();
        backSpace.onKeyDown = onKeyDown;
      });

      document.addEventListener("keydown", () => {
        console.log("키 입력 감지됨");
        playSound();
      });

      document.addEventListener("keyup", () => {
        console.log("키 입력 감지됨");
        playSoundTwo();
      });

      return () => {
        papers.remove();
      };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
  }, []);

  return (
    <div className="App">
      <h1>Document</h1>
    </div>
  );
}

export default App;
