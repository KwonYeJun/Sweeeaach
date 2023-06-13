import React, { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";

export default function KeyBoardSVG() {
  const svgRef = useRef(null);
  useEffect(() => {
    if (svgRef.current) {
      const svgElement = svgRef.current;
      console.log(svgElement);
    }
  }, []);

  return (
    <div className="KeyboardBox">
      <ReactSVG
        src="svg/KeyBoard.svg"
        beforeInjection={(svg) => (svgRef.current = svg)}
      />
    </div>
  );
}
