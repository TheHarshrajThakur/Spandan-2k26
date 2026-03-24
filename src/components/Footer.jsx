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
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-xs" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            © 2026 Malwa Institute of Technology · SPANDAN-2K26 · All rights reserved.
          </p>

          <div className="mt-6 w-full max-w-4xl mx-auto group hover:scale-[1.02] transition-all duration-500 ease-out">
            <div className="relative rounded-3xl p-[2px] overflow-hidden shadow-[0_0_40px_rgba(138,43,226,0.3)] hover:shadow-[0_0_60px_rgba(255,46,151,0.5)] transition-shadow duration-500">
              <div className="absolute inset-0 transition-opacity duration-1000 animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #FF2E97, #8A2BE2, #3AF2FF, #10B981, #F59E0B, #FF2E97)',
                  filter: 'blur(16px)',
                  transform: 'scale(2.5)'
                }}
              />
              <div className="absolute inset-0 opacity-100"
                style={{
                  background: 'linear-gradient(90deg, #FF2E97, #8A2BE2, #3AF2FF, #10B981)',
                }}
              />
              <div className="relative z-10 rounded-3xl px-4 py-8 md:px-12 md:py-10 flex flex-col items-center justify-center backdrop-blur-3xl"
                style={{
                  background: isDark ? '#000000' : '#FFFFFF',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)'
                }}>

                <span className="text-[10px] md:text-sm tracking-[0.2em] font-bold mb-6 opacity-50 italic" style={{ color: 'var(--c-text)' }}>
                  Crafted with ❤️ by
                </span>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  <div className="flex flex-col items-center group/h">
                    <a
                      href="https://harshrajthakur.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-all font-bold text-2xl md:text-4xl tracking-tighter relative"
                      style={{
                        background: 'linear-gradient(to right, #FF2E97, #8A2BE2, #3AF2FF)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: isDark ? 'drop-shadow(0 0 20px rgba(255,46,151,0.4))' : 'none'
                      }}>
                      Harshraj Singh Thakur
                    </a>
                    <div className="w-0 h-1 bg-gradient-to-r from-[#FF2E97] via-[#8A2BE2] to-[#3AF2FF] mt-1 rounded-full group-hover/h:w-full transition-all duration-500 shadow-[0_0_15px_rgba(138,43,226,0.6)]" />
                  </div>

                  <span className="opacity-30 text-[10px] md:text-sm font-bold rotate-0 md:-rotate-90">
                    &
                  </span>

                  <div className="flex flex-col items-center group/a">
                    <span
                      className="inline-block transition-all font-bold text-2xl md:text-3xl tracking-tighter"
                      style={{
                        background: 'linear-gradient(to right, #3AF2FF, #10B981, #FFB800)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: isDark ? 'drop-shadow(0 0 20px rgba(58,242,255,0.4))' : 'none'
                      }}>
                      Anurag Sharma
                    </span>
                    <div className="w-0 h-1 bg-gradient-to-r from-[#3AF2FF] via-[#10B981] to-[#FFB800] mt-1 rounded-full group-hover/a:w-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
