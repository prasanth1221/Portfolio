import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ══════════════ NAV BAR ══════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled
            ? 'rgba(5, 8, 22, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'padding 0.35s ease, background 0.35s ease',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* ── Logo ── */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer', flexShrink: 0, zIndex: 110 }}>
            <span style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              PKB
              <span style={{ WebkitTextFillColor: '#22d3ee', color: '#22d3ee' }}>.</span>
            </span>
          </motion.div>

          {/* ── Desktop Nav (≥ 769px) ── */}
          <div className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}>
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                smooth duration={600} offset={-80}
                spy onSetActive={() => setActiveLink(link.to)}
                style={{
                  position: 'relative',
                  fontSize: 14,
                  fontWeight: 500,
                  color: activeLink === link.to ? '#ffffff' : '#94a3b8',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontFamily: '"DM Sans", sans-serif',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => { if (activeLink !== link.to) e.target.style.color = '#94a3b8'; }}
              >
                {link.name}
                {/* active underline */}
                <span style={{
                  position: 'absolute',
                  bottom: -2, left: 0,
                  height: 1.5,
                  width: activeLink === link.to ? '100%' : '0%',
                  background: 'linear-gradient(90deg,#818cf8,#c084fc)',
                  borderRadius: 2,
                  transition: 'width 0.3s ease',
                  display: 'block',
                }} />
              </Link>
            ))}

            <motion.a
              href="public/Prasanthkumar(software dev.pdf" download
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(129,140,248,0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 20px',
                borderRadius: 11,
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                background: 'linear-gradient(135deg, #6366f1, #818cf8 50%, #c084fc)',
                textDecoration: 'none',
                fontFamily: '"Syne", sans-serif',
                letterSpacing: '0.03em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                whiteSpace: 'nowrap',
              }}
            >
              Resume ↗
            </motion.a>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'none',            /* shown via CSS below */
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              width: 40, height: 40,
              padding: 8,
              background: menuOpen
                ? 'rgba(129,140,248,0.12)'
                : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10,
              cursor: 'pointer',
              zIndex: 110,
              flexShrink: 0,
            }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              style={{ display: 'block', width: 20, height: 2, background: '#e2e8f0', borderRadius: 2, transformOrigin: 'center' }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              style={{ display: 'block', width: 20, height: 2, background: '#e2e8f0', borderRadius: 2 }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              style={{ display: 'block', width: 20, height: 2, background: '#e2e8f0', borderRadius: 2, transformOrigin: 'center' }} />
          </button>
        </div>
      </motion.nav>

      {/* ══════════════ MOBILE MENU OVERLAY ══════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(4px)',
                zIndex: 90,
              }}
            />

            {/* slide-in panel */}
            <motion.div
              key="mobile-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0, right: 0,
                width: 'min(300px, 85vw)',
                height: '100dvh',
                background: 'linear-gradient(160deg, rgba(10,12,35,0.98), rgba(5,8,22,0.99))',
                borderLeft: '1px solid rgba(129,140,248,0.14)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                padding: '0 0 32px',
                overflowY: 'auto',
              }}
            >
              {/* panel header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                marginBottom: 8,
              }}>
                <span style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 900, fontSize: 20,
                  background: 'linear-gradient(135deg,#818cf8,#c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  PKB<span style={{ WebkitTextFillColor: '#22d3ee' }}>.</span>
                </span>

                {/* close X */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 9,
                    width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#94a3b8',
                    fontSize: 18, lineHeight: 1,
                  }}
                >
                  ✕
                </motion.button>
              </div>

              {/* nav links */}
              <div style={{ padding: '8px 20px', flex: 1 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.to}
                      smooth duration={600} offset={-80}
                      onClick={closeMenu}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '15px 14px',
                        marginBottom: 4,
                        borderRadius: 13,
                        fontSize: 15,
                        fontWeight: 600,
                        color: activeLink === link.to ? '#e2e8f0' : '#64748b',
                        background: activeLink === link.to
                          ? 'rgba(129,140,248,0.1)'
                          : 'transparent',
                        border: activeLink === link.to
                          ? '1px solid rgba(129,140,248,0.2)'
                          : '1px solid transparent',
                        cursor: 'pointer',
                        fontFamily: '"DM Sans", sans-serif',
                        transition: 'all 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(129,140,248,0.08)';
                        e.currentTarget.style.color = '#e2e8f0';
                      }}
                      onMouseLeave={e => {
                        if (activeLink !== link.to) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#64748b';
                        }
                      }}
                    >
                      <span>{link.name}</span>
                      <span style={{ color: '#334155', fontSize: 12 }}>→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                style={{ padding: '0 20px' }}
              >
                {/* available badge */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(52,211,153,0.08)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  marginBottom: 14,
                }}>
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', flexShrink: 0, display: 'block' }}
                  />
                  <span style={{
                    fontSize: 12, fontWeight: 600,
                    color: '#34d399',
                    fontFamily: '"DM Mono", monospace',
                    letterSpacing: '0.05em',
                  }}>
                    Open to Opportunities
                  </span>
                </div>

                <motion.a
                  href="public/Prasanthkumar(software dev.pdf" download
                  whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(129,140,248,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 8,
                    padding: '13px 0',
                    borderRadius: 13,
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#fff',
                    background: 'linear-gradient(135deg, #6366f1, #818cf8 50%, #c084fc)',
                    textDecoration: 'none',
                    fontFamily: '"Syne", sans-serif',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                  }}
                >
                  Download Resume ↗
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500;700&display=swap');

        /* Show hamburger on mobile, hide desktop nav */
        @media (max-width: 768px) {
          .hamburger    { display: flex !important; }
          .desktop-nav  { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger    { display: none !important; }
          .desktop-nav  { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;