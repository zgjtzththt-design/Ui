/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FPSCounter from './components/FPSCounter';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <FPSCounter />
      <iframe 
        src="/OriginOS_web/index.html" 
        className="w-full h-full border-none"
        title="OriginOS Web"
        allow="fullscreen"
      />
    </div>
  );
}
