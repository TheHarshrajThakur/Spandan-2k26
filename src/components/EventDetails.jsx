import { motion } from 'framer-motion';
import { Calendar, MapPin, Cpu, Music } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const schedule = [
  { time: '---', title: 'The Grand Mic: Singing Competition 🎤', color: '#8A2BE2', glow: 'rgba(138,43,226,0.5)' },
  { time: '---', title: 'Step Up: Dance Battle 💃', color: '#FF2E97', glow: 'rgba(255,46,151,0.5)' },
  { time: '---', title: 'Vogue night: The Mega Fashion Show 👠', color: '#3AF2FF', glow: 'rgba(58,242,255,0.5)' },
  { time: '---', title: ' Prize Distribution 🏆', color: '#F59E0B', glow: 'rgba(245,158,11,0.5)' },
];

const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const EventDetails = () => {
  const { isDark } = useTheme();
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionReveal>
          <span className="tag-cyan mb-4 inline-block">The Event</span>
          <h2 className="section-title" style={{ color: 'var(--c-text)' }}>
            Event <span className="grad-text-cyan">Details</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          <div className="space-y-4">
            {[
              { icon: Calendar, label: 'Date', value: '30 March 2026', color: '#8A2BE2', glow: 'rgba(138,43,226,0.3)' },
              { icon: MapPin, label: 'Venue', value: 'MIT Campus, Indore', color: '#3AF2FF', glow: 'rgba(58,242,255,0.25)' },
            ].map(({ icon: Icon, label, value, color, glow }, i) => (
              <SectionReveal key={label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="rounded-2xl p-6 flex items-center gap-5 card-elevated"
                  style={{ border: `1px solid ${color}35` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}35`, boxShadow: isDark ? `0 0 12px ${glow}` : 'none' }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</p>
                    <p className="text-lg font-semibold" style={{ color: 'var(--c-text)', fontFamily: 'Space Grotesk, sans-serif' }}>{value}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.2}>
              <p className="text-sm leading-relaxed mt-4 p-6 rounded-2xl border border-white/5 bg-white/5" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Join us for a day filled with electric energy, where the best voices, most powerful moves, and highest fashion take center stage. SPANDAN-2K26 is where memories are forged.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.15}>
            <div className="relative pl-7">
              <div className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, #8A2BE2, #FF2E97, #3AF2FF, #F59E0B)' }} />
              <div className="space-y-10">
                {schedule.map(({ time, title, color, glow }, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: color, boxShadow: isDark ? `0 0 10px ${glow}` : 'none', outline: '3px solid transparent', outlineOffset: '1px', outlineColor: 'var(--c-bg)' }} />
                    <span className="text-xs font-mono font-bold mb-1 block" style={{ color }}>{time}</span>
                    <p className="font-medium" style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
