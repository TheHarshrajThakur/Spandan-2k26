import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = ({ text, speed = 20, direction = 'left' }) => {
  return (
    <div className="relative py-12 overflow-hidden bg-transparent flex whitespace-nowrap border-y border-white/5">
      <div className="flex animate-[marquee_30s_linear_infinite]" 
           style={{ animationDirection: direction === 'left' ? 'normal' : 'reverse', animationDuration: `${speed}s` }}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[clamp(1.2rem,6vw,3.5rem)] font-black uppercase px-8 flex items-center"
                style={{ 
                  fontFamily: 'Orbitron, sans-serif', 
                  color: i % 2 === 0 ? 'var(--c-accent)' : '#fff',
                  textShadow: i % 2 === 0 ? '0 0 15px var(--c-glow)' : '0 0 10px rgba(255,255,255,0.3)',
                  letterSpacing: '0.15em'
                }}>
            {text}
            <span className="mx-8 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#fff]" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
