import { motion } from 'framer-motion';
import { Camera, Mail, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const members = [
  { name: 'Deepika Sharma', role: 'Dancing (MIT)', phone: '78797-71707', color: '#A78BFA', glow: 'rgba(167,139,250,0.4)' },
  { name: 'Shilpi Singh', role: 'Dancing (Altius)', phone: '95823-16922', color: '#A78BFA', glow: 'rgba(167,139,250,0.4)' },
  { name: 'Sushila Sahu', role: 'Singing (MIT)', phone: '79878-27881', color: '#3AF2FF', glow: 'rgba(58,242,255,0.4)' },
  { name: 'Monika Lal', role: 'Singing (Altius)', phone: '96438-18315', color: '#3AF2FF', glow: 'rgba(58,242,255,0.4)' },
  { name: 'Farhina Hashmi', role: 'Fashion Show', phone: '98931-92783', color: '#FF2E97', glow: 'rgba(255,46,151,0.4)' },
];

const Coordinators = () => {
  const { isDark } = useTheme();
  return (
    <section id="coordinators" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="tag-amber mb-4 inline-block">The Experts</span>
          <h2 className="section-title">
            <span style={{ color: 'var(--c-text)' }}>Event </span>
            <span className="grad-text-violet">Coordinators</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {members.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="perspective group"
            >
              <div className="relative h-64 preserve-3d transition-transform duration-700 group-hover:my-rotate-y-180" style={{ cursor: 'pointer' }}>
                
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6 card-elevated">
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }} />
                  <div className="absolute inset-0 rounded-3xl border transition-all duration-300 group-hover:border-2" style={{ borderColor: `${m.color}40` }} />
                  <h3 className="text-base font-heading font-bold mb-2 text-center" style={{ color: 'var(--c-text)' }}>{m.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full" style={{ color: m.color, background: `${m.color}15` }}>{m.role}</p>
                  <p className="text-xs font-bold tracking-tight" style={{ color: 'var(--c-text-faint)' }}>{m.phone}</p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden my-rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center"
                  style={{
                    background: isDark ? `linear-gradient(135deg, ${m.color}18, ${m.color}06)` : `${m.color}0d`,
                    border: `1px solid ${m.color}40`,
                  }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: m.color }} />
                  <p className="text-xs font-bold mb-4" style={{ color: m.color }}>Contact Details</p>
                  <div className="space-y-4 w-full">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: `${m.color}20` }}>
                        <MessageCircle size={14} style={{ color: m.color }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] opacity-50">Phone</span>
                        <span className="text-xs font-bold tracking-wider">{m.phone}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl"
                    style={{ background: m.color, color: '#fff', boxShadow: `0 4px 15px ${m.glow}` }}>
                    Dial Number
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
