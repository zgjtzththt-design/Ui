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
    <div className="fixed top-2 right-2 z-50 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs pointer-events-none font-mono flex items-center gap-2.5 shadow-lg border border-slate-700/50 transition-all duration-300">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-slate-200 font-bold">{fps}</span>
        <span className="text-slate-400 text-[10px] tracking-wider uppercase">FPS</span>
      </div>
      <div className="w-[1px] h-3.5 bg-slate-700/80"></div>
      <div className="flex items-center gap-1.5" aria-label="Flags of Tunisia and Palestine">
        <img
          src="https://flagcdn.com/tn.svg"
          alt="Tunisia Flag"
          className="w-5 h-3.5 object-cover rounded-sm border border-slate-800/40"
          referrerPolicy="no-referrer"
        />
        <img
          src="https://flagcdn.com/ps.svg"
          alt="Palestine Flag"
          className="w-5 h-3.5 object-cover rounded-sm border border-slate-800/40"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
