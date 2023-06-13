import React, { useEffect, useRef } from 'react';
import { PaperScope, Path } from 'paper';

function PaperCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const paperScope = new PaperScope(canvas);

    // 캔버스 크기 설정
    paperScope.setup(canvas);

    // 경로 생성
    const path = new Path.Rectangle({
      point: [50, 50],
      size: [200, 100],
      fillColor: 'red',
    });

    // 경로 그리기
    paperScope.view.onFrame = () => {
      path.rotate(1);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default PaperCanvas;
