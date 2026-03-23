import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | glitch | done

  useEffect(() => {
    // Animate progress bar
    const start = Date.now();
    const duration = 1800;
    const frame = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(frame);
      else {
        setPhase('glitch');
        setTimeout(() => {
          setPhase('done');
          setTimeout(onComplete, 600);
        }, 800);
      }
    };
    requestAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: '#0B0B0F' }}
        >
          {/* MIT Logo with glitch */}
          <div className="relative mb-10" style={{ willChange: 'transform' }}>
            <motion.img
              src="/mit-logo.svg"
              alt="MIT"
              style={{ height: 100, filter: 'drop-shadow(0 0 24px rgba(138,43,226,0.7))' }}
              animate={phase === 'glitch' ? {
                x: [0, -4, 4, -2, 2, 0],
                filter: [
                  'drop-shadow(0 0 24px rgba(138,43,226,0.7)) hue-rotate(0deg)',
                  'drop-shadow(0 0 40px rgba(255,46,151,0.9)) hue-rotate(120deg)',
                  'drop-shadow(0 0 24px rgba(58,242,255,0.9)) hue-rotate(240deg)',
                  'drop-shadow(0 0 24px rgba(138,43,226,0.7)) hue-rotate(0deg)',
                ],
              } : {}}
              transition={{ duration: 0.35, repeat: phase === 'glitch' ? 2 : 0 }}
            />
            {/* Scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, #8A2BE2, #3AF2FF, transparent)', top: '0%' }}
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Title */}
          <h1
            className="font-display font-black text-white mb-2 text-center"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)', letterSpacing: '0.08em', textShadow: '0 0 24px rgba(138,43,226,0.6)' }}
          >
            SPANDAN-2K26
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Malwa Institute of Technology
          </p>

          {/* Progress bar */}
          <div className="mt-10 w-64 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #8A2BE2, #FF2E97, #3AF2FF)',
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(138,43,226,0.8)',
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="mt-3 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
