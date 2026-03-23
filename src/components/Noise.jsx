import React from 'react';

const Noise = () => (
  <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.035] mix-blend-overlay overflow-hidden">
    <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-[noise_0.2s_steps(1)_infinite]" />
  </div>
);

export default Noise;
