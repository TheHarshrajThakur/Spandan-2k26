import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Expand } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1540039155732-6785006b52a5?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2 md:row-span-2', color: '#8A2BE2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', span: '', color: '#FF2E97' },
  { id: 3, url: 'https://images.unsplash.com/photo-1525683707269-eecda5a9cbde?auto=format&fit=crop&w=800&q=80', span: '', color: '#3AF2FF' },
  { id: 4, url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80', span: 'row-span-2', color: '#F59E0B' },
  { id: 5, url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', span: '', color: '#10B981' },
  { id: 6, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', span: '', color: '#3B82F6' },
  { id: 7, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2', color: '#A78BFA' },
];

const Gallery = () => {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="tag-cyan mb-4 inline-block">Visual Highlights</span>
          <h2 className="section-title">
            <span style={{ color: 'var(--c-text)' }}>The </span>
            <span className="grad-text-cyan">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-2.5">
          {images.map((img, i) => (
            <motion.div key={img.id}
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(img.url)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              style={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}` }}
            >
              <img src={img.url} alt="" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to top, ${img.color}70, transparent)` }} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2.5 rounded-xl backdrop-blur-sm"
                  style={{ background: `${img.color}25`, border: `1px solid ${img.color}60` }}>
                  <Expand size={18} style={{ color: img.color }} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: img.color, boxShadow: isDark ? `0 0 8px ${img.color}` : 'none' }} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(14px)' }}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute -top-4 -right-4 z-10 p-2 rounded-xl text-white"
                style={{ background: isDark ? '#16161F' : '#fff', border: `1px solid ${isDark ? '#23233A' : '#e5e7eb'}` }}>
                <X size={18} style={{ color: 'var(--c-text)' }} />
              </button>
              <img src={selected} alt="" className="max-w-5xl max-h-[82vh] object-contain rounded-2xl"
                style={{ border: `1px solid ${isDark ? '#23233A' : '#e5e7eb'}`, boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
