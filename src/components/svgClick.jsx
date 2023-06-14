import React, { useEffect, useState, useRef } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgLoaded) {
      const targetElement = svgRef.current;
      if (targetElement) {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        console.log(targetElement.children[2]);
      }
    }

    // Clean up event listeners
    return () => {
      if (svgLoaded) {
        const targetElement = svgRef.current;
        if (targetElement) {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);
        }
      }
    };
  }, [svgLoaded]);

  // Rest of your component code...

  return (
    <div className="KeyboardBox">
      <ReactSVG
        ref={svgRef}
        src="svg/KeyBoard.svg"
        afterInjection={() => setSvgLoaded(true)}
      />
    </div>
  );
}
