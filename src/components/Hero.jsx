import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';


export const MagneticButton = ({ children, className, style, href, onClick, ...rest }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const El = href ? 'a' : 'button';
  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, x: sx, y: sy }}
      className={className}
      whileTap={{ scale: 0.94 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
};

/* ── Hero ── */
const Hero = () => {
  const { isDark } = useTheme();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const containerRef = useRef(null);

  // Mouse-driven parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const blob1X = useSpring(useTransform(mouseX, [0, 1], ['-8%', '8%']), { stiffness: 40, damping: 20 });
  const blob1Y = useSpring(useTransform(mouseY, [0, 1], ['-8%', '8%']), { stiffness: 40, damping: 20 });
  const blob2X = useSpring(useTransform(mouseX, [0, 1], ['8%', '-8%']), { stiffness: 30, damping: 18 });
  const blob2Y = useSpring(useTransform(mouseY, [0, 1], ['8%', '-8%']), { stiffness: 30, damping: 18 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const target = new Date('2026-03-30T00:00:00').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const timerColors = [
    { from: '#8A2BE2', to: '#FF2E97' },
    { from: '#FF2E97', to: '#3AF2FF' },
    { from: '#3AF2FF', to: '#3B82F6' },
    { from: '#F59E0B', to: '#FF2E97' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Parallax blobs behind hero only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute"
          style2={{
            top: '-20%', left: '-15%', width: '65%', height: '70%',
            background: `radial-gradient(ellipse, var(--c-blob1) 0%, transparent 65%)`,
            filter: 'blur(70px)', animation: 'blobDrift1 20s ease-in-out infinite',
          }} />
        <motion.div style={{ x: blob2X, y: blob2Y }} className="absolute"
          style2={{
            top: '10%', right: '-20%', width: '60%', height: '65%',
            background: `radial-gradient(ellipse, var(--c-blob2) 0%, transparent 65%)`,
            filter: 'blur(70px)', animation: 'blobDrift2 24s ease-in-out infinite',
          }} />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" ref={containerRef}>
        <motion.div
          style={{
            x: blob1X, y: blob1Y,
            top: '-20%', left: '-15%', width: '65%', height: '70%',
            background: `radial-gradient(ellipse, var(--c-blob1) 0%, transparent 65%)`,
            filter: 'blur(70px)',
            position: 'absolute',
          }}
        />
        <motion.div
          style={{
            x: blob2X, y: blob2Y,
            top: '10%', right: '-20%', width: '60%', height: '65%',
            background: `radial-gradient(ellipse, var(--c-blob2) 0%, transparent 65%)`,
            filter: 'blur(70px)',
            position: 'absolute',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* College Branding Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-12">
          
          {/* MIT Branding */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <img
                src="/mit-logo.svg" alt="MIT"
                style={{
                  height: 80, filter: isDark
                    ? 'drop-shadow(0 0 20px rgba(138,43,226,0.6)) drop-shadow(0 0 40px rgba(255,46,151,0.3))'
                    : 'drop-shadow(0 2px 8px rgba(124,58,237,0.35))'
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2
                className="font-heading font-bold"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.8rem)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: 'var(--c-text)',
                  textShadow: isDark ? '0 0 30px rgba(138,43,226,0.4)' : 'none',
                }}
              >
                Malwa Institute of Technology
              </h2>
              <p style={{ color: 'var(--c-text-faint)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>
                Indore, M.P. · Est. 2004
              </p>
            </motion.div>
          </div>

          {/* Altius Branding */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <img
                src="/altius-logo.png" alt="Altius"
                style={{
                  height: 80, filter: isDark
                    ? 'drop-shadow(0 0 20px rgba(0,210,255,0.6)) drop-shadow(0 0 40px rgba(58,242,255,0.3))'
                    : 'drop-shadow(0 2px 8px rgba(0,146,177,0.35))'
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2
                className="font-heading font-bold"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.8rem)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: 'var(--c-text)',
                  textShadow: isDark ? '0 0 30px rgba(0,210,255,0.4)' : 'none',
                }}
              >
                Altius Institute of Universal Studies
              </h2>
              <p style={{ color: 'var(--c-text-faint)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>
                Indore, M.P. · Songs of Knowledge
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gradient divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px mx-auto mb-8 max-w-sm"
          style={{ background: `linear-gradient(90deg, transparent, var(--c-accent), var(--c-accent3), transparent)` }} />

        {/* Holi Sprinkles / Splashes behind title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {[
            { color: '#FF2E97', top: '35%', left: '30%', size: '300px', delay: '0s' },
            { color: '#00D2FF', top: '45%', right: '25%', size: '350px', delay: '1.5s' },
            { color: '#39FF14', bottom: '30%', left: '40%', size: '280px', delay: '3.2s' },
            { color: '#FF8C00', top: '40%', right: '40%', size: '320px', delay: '4.8s' },
            { color: '#8A2BE2', top: '25%', left: '45%', size: '250px', delay: '0.8s' },
            { color: '#FFFF00', bottom: '35%', right: '35%', size: '200px', delay: '2.4s' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.35, 0.15],
                x: [0, 15, -15, 0],
                y: [0, -10, 10, 0]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute rounded-full blur-[60px]"
              style={{
                top: s.top, left: s.left, right: s.right, bottom: s.bottom,
                width: s.size, height: s.size,
                background: `radial-gradient(circle, ${s.color} 0%, transparent 70%)`,
              }}
            />
          ))}
        </div>

        {/* SPANDAN 2K26 — Holi Edition title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            x: useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 60, damping: 20 }),
            y: useSpring(useTransform(mouseY, [0, 1], [-15, 15]), { stiffness: 60, damping: 20 }),
            fontSize: 'clamp(2.8rem, 10vw, 7rem)',
            fontFamily: 'Orbitron, sans-serif',
            background: 'linear-gradient(to right, #FF2E97, #8A2BE2, #00D2FF, #39FF14, #FF8C00, #FF2E97)',
            backgroundSize: '200% auto',
            animation: 'shine 6s linear infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          className="font-black leading-tight mb-4 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          SPANDAN 2K26
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="font-bold tracking-tight mb-2"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
            background: isDark
              ? 'linear-gradient(90deg, #fff, var(--c-accent), #fff)'
              : 'linear-gradient(90deg, #000, var(--c-accent), #000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% auto',
            animation: 'shine 4s linear infinite',
          }}
        >
          Unleash Your Talent
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="font-semibold uppercase tracking-[0.3em] mb-4"
          style={{
            color: 'var(--c-accent3)',
            fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)',
            fontFamily: 'Orbitron, sans-serif',
            textShadow: isDark ? '0 0 15px rgba(58,242,255,0.3)' : 'none',
          }}
        >
          30 March 2026 · MIT Campus · Indore
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="flex justify-center gap-3 md:gap-5 mt-12 mb-12"
        >
          {Object.entries(timeLeft).map(([unit, val], i) => {
            const c = timerColors[i];
            return (
              <div key={unit} className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2"
                  style={{
                    background: `linear-gradient(135deg, ${c.from}22, ${c.to}22)`,
                    border: `1px solid ${c.from}55`,
                    boxShadow: isDark ? `0 0 20px ${c.from}44` : `0 4px 12px ${c.from}22`,
                  }}
                >
                  <span style={{
                    fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700, color: isDark ? '#fff' : 'var(--c-text)',
                  }}>
                    {val.toString().padStart(2, '0')}
                  </span>
                </motion.div>
                <span style={{ color: 'var(--c-text-faint)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {unit}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Magnetic CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <MagneticButton href="https://forms.zohopublic.in/lakshya2025miti1/form/NewYearPartyRSVPForm/formperma/zMwH68y4ixU5YMt_eONXjBRCrRWSPHwHmphb7qUxX8E" target="_blank" rel="noopener noreferrer" className="btn-violet text-base px-9 py-4 rounded-2xl inline-block tracking-wide"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
            ✦ For Participants
          </MagneticButton>
          <MagneticButton href="#events" className="btn-outline text-base px-9 py-4 rounded-2xl inline-block tracking-wide"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
            Explore Events →
          </MagneticButton>
        </motion.div> */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to top, var(--c-bg), transparent)` }} />
    </section>
  );
};

export default Hero;
