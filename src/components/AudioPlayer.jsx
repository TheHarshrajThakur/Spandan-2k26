import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    audio.current = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=electronic-future-beats-117997.mp3');
    audio.current.loop = true; audio.current.volume = 0.4;
    return () => { audio.current.pause(); audio.current.src = ''; };
  }, []);

  const toggle = () => {
    playing ? audio.current.pause() : audio.current.play().catch(() => {});
    setPlaying(!playing);
  };

  return (
    <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-xl transition-all duration-200"
      style={{
        background: playing ? 'linear-gradient(135deg, #7C3AED22, #EC489922)' : '#0E0E14',
        border: `1px solid ${playing ? 'rgba(124,58,237,0.5)' : '#23233A'}`,
        color: playing ? '#A78BFA' : 'rgba(255,255,255,0.4)',
        boxShadow: playing ? '0 0 16px rgba(124,58,237,0.25)' : 'none',
      }}
      aria-label="Toggle music">
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
};

export default AudioPlayer;
