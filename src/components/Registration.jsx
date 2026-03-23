import { motion } from 'framer-motion';
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

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative p-1 rounded-full group bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500"
          >
            <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500" />
            
            <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer"
               className="relative px-12 py-6 bg-black rounded-full flex items-center gap-4 transition-all hover:bg-black/90 group-hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]">
              <span className="text-xl font-black uppercase tracking-widest text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Register Now
              </span>
              <ArrowRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <p className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-30" style={{ color: 'var(--c-text-faint)' }}>
          30 March 2026 · MIT Campus · Indore
        </p>
      </div>
    </section>
  );
};

export default Registration;
