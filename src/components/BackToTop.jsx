import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-xl transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)', color: '#fff', boxShadow: '0 4px 16px rgba(124,58,237,0.4)' }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(124,58,237,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          aria-label="Back to top">
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
