import { Camera, MessageCircle, Users, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: `1px solid var(--c-border)` }}>
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, #8A2BE2, #FF2E97, #3AF2FF, #10B981, #F59E0B, #8A2BE2)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="font-heading text-[clamp(1.5rem,4vw,2.5rem)] font-black mb-4 uppercase tracking-tighter">
              <span style={{ color: 'var(--c-text)' }}>SPANDAN</span>
              <span className="grad-text-violet"> 2K26</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed opacity-60" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Malwa Institute of Technology's premier annual fest.
              <br />
              Celebrating culture, technology, and talent on March 30, 2026.
            </p>
          </div>
        </div>
        <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, var(--c-border), transparent)` }} />
        <p className="text-center text-xs" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          © 2026 Malwa Institute of Technology · SPANDAN-2K26 · All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
