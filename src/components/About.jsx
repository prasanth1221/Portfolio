import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaBrain, FaCode, FaRocket, FaDatabase } from 'react-icons/fa';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'ML Models Deployed', value: '5+' },
  { label: 'Internships', value: '3' },
  { label: 'Tech Stacks', value: '15+' },
];

const highlights = [
  { icon: FaBrain, label: 'AI/ML Engineering', color: '#6c63ff' },
  { icon: FaDatabase, label: 'Data Engineering', color: '#a855f7' },
  { icon: FaCode, label: 'Full Stack Dev', color: '#22d3ee' },
  { icon: FaRocket, label: 'Research & Innovation', color: '#f59e0b' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        width: '100%',
      }}
    >
      {/* Centered container */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <SectionTitle label="Who I Am" title="About Me" />

        {/* Two-column grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            marginTop: '60px',
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {/* Avatar card */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{ fontSize: '80px', userSelect: 'none', zIndex: 1 }}>🧑‍💻</span>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(168,85,247,0.2))',
                  }}
                />
              </motion.div>

              {/* Floating badge — anchored to bottom-right of card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  right: '-14px',
                  background: 'rgba(5,8,22,0.9)',
                  border: '1px solid rgba(34,211,238,0.35)',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#22d3ee',
                  backdropFilter: 'blur(10px)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                🎓 AI/ML Engineer
              </motion.div>
            </div>

            {/* Stats grid — 2×2, full width of column */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                width: '100%',
                maxWidth: '280px',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(108,99,255,0.2)',
                    borderRadius: '16px',
                    padding: '16px 12px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      fontFamily: 'Space Grotesk, sans-serif',
                      background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      marginTop: '4px',
                      color: '#64748b',
                      fontFamily: 'Space Grotesk, sans-serif',
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            <h3
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                color: '#f1f5f9',
                margin: '0 0 16px 0',
                lineHeight: 1.3,
              }}
            >
              Building Intelligent Systems for the Real World
            </h3>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#94a3b8',
                margin: '0 0 14px 0',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              I'm an AI & Machine Learning student with strong expertise in building end-to-end ML
              pipelines, data engineering, and full-stack web applications.
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#94a3b8',
                margin: '0 0 32px 0',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Experienced in fraud detection systems, synthetic data generation, and scalable
              backend development. Passionate about solving real-world problems using AI and modern
              technologies — from research lab to production deployment.
            </p>

            {/* Highlights — 2×2 grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    cursor: 'default',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${h.color}55`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: `${h.color}18`,
                      border: `1px solid ${h.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <h.icon size={15} style={{ color: h.color }} />
                  </div>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      fontFamily: 'Space Grotesk, sans-serif',
                      lineHeight: 1.3,
                    }}
                  >
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #about > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;