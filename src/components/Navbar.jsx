import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }}>
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#coordinators' },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo + Name */}
        <Magnetic strength={0.25}>
          <a href="#home" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
            <img
              src="/mit-logo.svg" alt="MIT"
              className="h-9 w-auto transition-all duration-300 group-hover:scale-105"
              style={{
                filter: isDark
                  ? 'drop-shadow(0 0 6px rgba(138,43,226,0.5))'
                  : 'drop-shadow(0 2px 4px rgba(124,58,237,0.3))'
              }}
            />
            <div className="flex items-center">
              <span className="font-heading font-bold text-base"
                style={{ color: 'var(--c-text)', letterSpacing: '0.05em' }}>
                SPANDAN<span className="grad-text-violet" style={{ marginLeft: 2 }}> 2K26</span>
              </span>
            </div>
          </a>
        </Magnetic>

        {/* Symmetric Center Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map(link => (
            <Magnetic key={link.name} strength={0.2}>
              <a href={link.href}
                className="relative text-[13px] font-bold uppercase tracking-widest group"
                style={{ color: 'var(--c-text-muted)', fontFamily: 'Orbitron, sans-serif', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--c-accent), var(--c-accent2))',
                    boxShadow: '0 0 10px var(--c-glow)'
                  }} />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* CTA (Right) */}
        <div className="hidden md:flex items-center gap-3">
          <Magnetic strength={0.3}>
            <div className="relative p-[2px] rounded-full group bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 transition-transform hover:scale-105">
              <div className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500" />

              <a href="https://forms.zohopublic.in/lakshya2025miti1/form/MealOrderForm/formperma/ps44SJ3WjU0EIdxob_NfYp9OSYl2T5-Podhsg0opF7U" target="_blank" rel="noopener noreferrer"
                className="relative px-6 py-2 bg-black rounded-full flex items-center gap-2 transition-all hover:bg-black/90 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <span className="text-sm"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Event Attendee
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Magnetic>
        </div>

        <button className="md:hidden p-1 transition-colors"
          style={{ color: 'var(--c-text-muted)' }}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold py-1"
                  style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', textDecoration: 'none' }}>
                  {l.name}
                </a>
              ))}
              <div className="relative p-[2px] rounded-full group bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 mt-2">
                <div className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500" />
                <a href="https://forms.zohopublic.in/lakshya2025miti1/form/MealOrderForm/formperma/ps44SJ3WjU0EIdxob_NfYp9OSYl2T5-Podhsg0opF7U" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
                  className="relative px-5 py-2.5 bg-black rounded-full flex items-center justify-center gap-2 transition-all hover:bg-black/90">
                  <span className="text-base"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Event Attendee
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
