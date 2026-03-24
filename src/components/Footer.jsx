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
              MIT and Altius - premier annual fest.
              <br />
              Celebrating culture, technology, and talent on March 30, 2026.
            </p>
          </div>
        </div>
        <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, var(--c-border), transparent)` }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-4 relative z-10">
          <p className="text-center md:text-left text-xs order-2 md:order-1 font-medium opacity-80" style={{ color: '#ffffff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            © 2026 Malwa Institute of Technology · SPANDAN-2K26 · All rights reserved.
          </p>

          <div className="group hover:scale-105 transition-all duration-300 order-1 md:order-2">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-shadow shadow-[0_0_15px_rgba(255,46,151,0.1)] hover:shadow-[0_0_25px_rgba(255,46,151,0.3)] relative overflow-hidden cursor-default"
              style={{
                background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)'
              }}>
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-r from-[#FF2E97] to-[#8A2BE2] blur-md" />
              <span className="text-[10px] tracking-wider opacity-60 italic relative z-10" style={{ color: 'var(--c-text)' }}>
                Crafted by
              </span>
              <span
                className="font-bold text-xs tracking-tight relative z-10"
                style={{
                  background: 'linear-gradient(to right, #FF2E97, #8A2BE2, #3AF2FF)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: isDark ? 'drop-shadow(0 0 10px rgba(255,46,151,0.3))' : 'none'
                }}>
                Harshraj Singh Thakur
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
