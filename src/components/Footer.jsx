import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com/prasanth1221', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prasanthkumar-bhumula-71bb5125a/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:prasanthb301@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        padding: '60px 0 48px',
        borderTop: '1px solid rgba(108, 99, 255, 0.15)',
        background: 'linear-gradient(to bottom, transparent, rgba(10, 8, 30, 0.6))',
        overflow: 'hidden',
      }}
    >
      {/* Animated glow line at top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #6c63ff 30%, #a855f7 60%, transparent)',
          transformOrigin: 'left',
        }}
      />

      {/* Subtle background orbs */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        left: '20%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(108,99,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        right: '20%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* === BRAND + SOCIALS — centered column === */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '28px',
              fontWeight: 900,
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px',
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              PKB<span style={{ color: '#22d3ee', WebkitTextFillColor: '#22d3ee' }}>.</span>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#4a5568',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}>
              AI & ML Engineer · Full Stack
            </p>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  border: '1px solid rgba(108,99,255,0.2)',
                  background: 'rgba(108,99,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4a5568',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#a78bfa';
                  e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)';
                  e.currentTarget.style.background = 'rgba(108,99,255,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#4a5568';
                  e.currentTarget.style.borderColor = 'rgba(108,99,255,0.2)';
                  e.currentTarget.style.background = 'rgba(108,99,255,0.06)';
                }}
              >
                <s.icon size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.04)',
          marginBottom: '28px',
        }} />

        {/* === BOTTOM: Copyright + heart — centered === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <p style={{
            fontSize: '11px',
            color: '#2d3748',
            fontFamily: 'monospace',
            letterSpacing: '0.02em',
            margin: 0,
          }}>
            © 2025 Prasanthkumar Bhumula. All rights reserved.
          </p>

          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ display: 'inline-flex' }}
          >
            <FaHeart size={10} style={{ color: '#f43f5e' }} />
          </motion.span>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;