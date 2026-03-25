import { color, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Registration = () => {
  const { isDark } = useTheme();

  return (
    <section id="register" className="py-40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-[0.9] mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span style={{ color: 'var(--c-text)' }}>Be Part of the </span>
            <br />
            <span className="grad-text-emerald">Legend</span>
          </h2>
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-50" style={{ color: 'var(--c-text-muted)' }}>Join MIT's biggest cultural celebration</p>
        </motion.div>

        {/* Buttons removed - moved to Hero section */}


        <p className="mt-12 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] opacity-80" style={{ color: '#ffffff' }}>
          30 March 2026 · MIT Campus · Indore
        </p>
      </div>
    </section >
  );
};

export default Registration;
