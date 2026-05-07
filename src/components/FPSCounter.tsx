import { useState, useEffect } from 'react';

export default function FPSCounter() {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frame = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const updateFPS = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round(frameCount * 1000 / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
      frame = requestAnimationFrame(updateFPS);
    };

    frame = requestAnimationFrame(updateFPS);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed top-2 right-2 z-50 bg-black/50 text-white px-2 py-1 rounded text-xs pointer-events-none font-mono">
      {fps} FPS
    </div>
  );
}
