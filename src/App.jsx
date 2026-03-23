import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Noise from './components/Noise';
import InfiniteMarquee from './components/InfiniteMarquee';
import Hero from './components/Hero';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import Coordinators from './components/Coordinators';
import Registration from './components/Registration';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';

/* ── Inner app (can access theme context) ── */
function AppInner() {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);

  // Lenis smooth scroll
  useEffect(() => {
    if (!loaded) return;
    const lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [loaded]);

  return (
    <>
      <CursorGlow />
      {/* Cinematic loader */}
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      {/* ═══ GLOBAL ANIMATED BACKGROUND ═══ */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
        style={{ backgroundColor: 'var(--c-bg)', transition: 'background-color 0.6s ease' }}
      >
        {/* Blob 1 */}
        <div className="absolute" style={{
          top: '-20%', left: '-15%', width: '75%', height: '80%',
          background: `radial-gradient(ellipse, var(--c-blob1) 0%, transparent 65%)`,
          animation: 'blobDrift1 18s ease-in-out infinite',
          filter: 'blur(80px)', transition: 'background 0.8s ease',
        }} />
        {/* Blob 2 */}
        <div className="absolute" style={{
          top: '5%', right: '-20%', width: '70%', height: '75%',
          background: `radial-gradient(ellipse, var(--c-blob2) 0%, transparent 65%)`,
          animation: 'blobDrift2 22s ease-in-out infinite',
          filter: 'blur(80px)', transition: 'background 0.8s ease',
        }} />
        {/* Blob 3 */}
        <div className="absolute" style={{
          top: '45%', left: '15%', width: '65%', height: '70%',
          background: `radial-gradient(ellipse, var(--c-blob3) 0%, transparent 65%)`,
          animation: 'blobDrift3 26s ease-in-out infinite',
          filter: 'blur(80px)', transition: 'background 0.8s ease',
        }} />
        {/* Blob 4 */}
        <div className="absolute" style={{
          bottom: '-15%', right: '5%', width: '60%', height: '65%',
          background: `radial-gradient(ellipse, var(--c-blob4) 0%, transparent 65%)`,
          animation: 'blobDrift1 30s ease-in-out infinite reverse',
          filter: 'blur(80px)', transition: 'background 0.8s ease',
        }} />
        {/* Blob 5 */}
        <div className="absolute" style={{
          bottom: '15%', left: '-15%', width: '55%', height: '60%',
          background: `radial-gradient(ellipse, var(--c-blob5) 0%, transparent 65%)`,
          animation: 'blobDrift2 24s ease-in-out infinite reverse',
          filter: 'blur(80px)', transition: 'background 0.8s ease',
        }} />

        {/* Starfield dots */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.2)'} 1px, transparent 1px)`,
          backgroundSize: '55px 55px',
          animation: 'starfieldDrift 60s linear infinite',
          opacity: isDark ? 0.28 : 0.12,
          transition: 'opacity 0.6s ease',
        }} />

        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />

        {/* Top rainbow streak */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent 0%, #8A2BE2 25%, #FF2E97 50%, #3AF2FF 75%, transparent 100%)',
          opacity: isDark ? 0.7 : 0.4,
        }} />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
          opacity: isDark ? 1 : 0.2,
        }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent)' }} />
        <InfiniteMarquee text="SPANDAN 2K26 • CULTURAL FEST • MIT INDORE • " speed={40} />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent3)' }} />
        <EventDetails />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent2)' }} />
        <Events />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent)' }} />
        <InfiniteMarquee text="SINGING • DANCING • FASHION • FUN • " speed={30} direction="right" />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent2)' }} />
        <Coordinators />
        <div className="section-divider" style={{ '--c-accent': 'var(--c-accent3)' }} />
        <Registration />
      </main>
      <Footer />
      <Noise />
      <BackToTop />
    </>
  );
}

/* ── Root with ThemeProvider ── */
function App() {
  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen">
        <AppInner />
      </div>
    </ThemeProvider>
  );
}

export default App;
