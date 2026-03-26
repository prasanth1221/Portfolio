import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const WORDS = ['AI Engineer', 'ML Researcher', 'Full Stack Dev', 'Problem Solver'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;
    if (!isDeleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 60);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        overflow: 'hidden',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Main content container — fully centered column */}
      <div
        style={{
          maxWidth: '860px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '999px',
            marginBottom: '32px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(108,99,255,0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22d3ee',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: '#94a3b8',
              fontFamily: 'inherit',
            }}
          >
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        {/* Name — two lines, perfectly centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(48px, 9vw, 96px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: '0 0 20px 0',
            padding: 0,
          }}
        >
          <span style={{ color: '#ffffff', display: 'block' }}>Prasanthkumar</span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #6c63ff 0%, #a855f7 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Bhumula
          </span>
        </motion.h1>

        {/* Typing effect — inline flex, perfectly centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 600,
            fontFamily: 'Space Grotesk, sans-serif',
            height: '36px', // Fixed height prevents layout shift
          }}
        >
          <span style={{ color: '#94a3b8', whiteSpace: 'nowrap' }}>I am a</span>

          {/* Fixed-width container for typed word — prevents reflow */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minWidth: '200px',
              color: '#a855f7',
              whiteSpace: 'nowrap',
            }}
          >
            {displayed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                display: 'inline-block',
                width: '2px',
                height: '22px',
                marginLeft: '2px',
                background: '#a855f7',
                borderRadius: '1px',
                verticalAlign: 'middle',
                flexShrink: 0,
              }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            maxWidth: '560px',
            margin: '0 auto 40px auto',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            lineHeight: 1.75,
            color: '#64748b',
            padding: '0 12px',
          }}
        >
          Building intelligent systems and full-stack applications that solve real-world problems.
          Specializing in ML pipelines, fraud detection, and scalable backend development.
        </motion.p>

        {/* CTA Buttons — centered row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Link to="projects" smooth={true} duration={700} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108,99,255,0.5)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: 600,
                color: '#ffffff',
                fontSize: '14px',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                border: 'none',
                background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
                fontFamily: 'Space Grotesk, sans-serif',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              View Projects →
            </motion.button>
          </Link>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.04em',
              color: '#e2e8f0',
              border: '1px solid rgba(108,99,255,0.4)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              fontFamily: 'Space Grotesk, sans-serif',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            Download Resume ↓
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator — pinned to bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '24px',
            height: '40px',
            borderRadius: '12px',
            border: '2px solid rgba(108,99,255,0.4)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: '#6c63ff',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;