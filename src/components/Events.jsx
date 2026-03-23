import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const events = [
  {
    title: 'Dancing', subtitle: 'Shake the Stage', category: 'Cultural', tag: 'tag-pink',
    image: '/dancing-event.jpg',
    color: '#FF2E97', glow: 'rgba(255,46,151,0.6)', gradient: 'linear-gradient(135deg, rgba(255,46,151,0.12), rgba(138,43,226,0.12))',
  },
  {
    title: 'Singing', subtitle: 'Voice of MIT', category: 'Cultural', tag: 'tag-violet',
    image: '/singing-event.jpg',
    color: '#A78BFA', glow: 'rgba(138,43,226,0.6)', gradient: 'linear-gradient(135deg, rgba(138,43,226,0.12), rgba(58,242,255,0.12))',
  },
  {
    title: 'Fashion Show', subtitle: 'Wear Your Art', category: 'Showcase', tag: 'tag-amber',
    image: '/fashion-event.jpg',
    color: '#FCD34D', glow: 'rgba(245,158,11,0.6)', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(255,46,151,0.12))',
  },
];

const EventCard = ({ event, index }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);

  const onMove = e => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left - width / 2) / width) * 12;
    const y = ((e.clientY - top - height / 2) / height) * 12;
    ref.current.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)'; };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
        className="relative h-[480px] rounded-3xl overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        style={{
          transition: 'transform 0.18s ease, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d', cursor: 'pointer',
          border: `1px solid ${event.color}40`,
          boxShadow: `inset 0 0 15px ${event.color}15`,
        }}
      >
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0" style={{
          background: isDark
            ? 'linear-gradient(to top, rgba(11,11,15,0.85) 0%, rgba(11,11,15,0.4) 50%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)'
        }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500" style={{ background: event.gradient }} />

        {/* Glowing border on hover */}
        <div className="absolute inset-0 rounded-3xl transition-all duration-400 opacity-0 group-hover:opacity-100"
          style={{ boxShadow: isDark ? `inset 0 0 0 1px ${event.color}70, 0 0 30px ${event.glow}` : `inset 0 0 0 1px ${event.color}50` }} />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className={`${event.tag} mb-2 self-start opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>{event.category}</span>
          <h3 className="text-xl font-heading font-bold text-white mb-0.5">{event.title}</h3>
          <p className="text-xs mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" style={{ color: event.color, transitionDelay: '0.05s' }}>{event.subtitle}</p>
          <button className="self-start flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            style={{ color: event.color, transitionDelay: '0.08s' }}>
            View Details <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => (
  <section id="events" className="py-28 relative">
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="tag-pink mb-4 inline-block">What's Happening</span>
          <h2 className="section-title">
            <span style={{ color: 'var(--c-text)' }}>Epic </span>
            <span className="grad-text-pink">Events</span>
          </h2>
        </div>
        <p className="text-sm max-w-xs" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          From fierce competitions to jaw-dropping performances.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {events.map((e, i) => <EventCard key={i} event={e} index={i} />)}
      </div>
    </div>
  </section>
);

export default Events;
