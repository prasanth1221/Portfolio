import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase,
  FaHtml5, FaFlask,
} from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiScikitlearn, SiMysql, SiCplusplus } from 'react-icons/si';

const skillCategories = [
  {
    category: 'Programming Languages',
    color: '#6c63ff',
    glow: 'rgba(108,99,255,0.15)',
    skills: [
      { name: 'Python', icon: FaPython, level: 90 },
      { name: 'Java', icon: FaJava, level: 75 },
      { name: 'C++', icon: SiCplusplus, level: 70 },
    ],
  },
  {
    category: 'Machine Learning',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.15)',
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 85 },
      { name: 'TensorFlow', icon: SiTensorflow, level: 80 },
      { name: 'Keras', icon: SiKeras, level: 78 },
    ],
  },
  {
    category: 'Data Engineering',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.12)',
    skills: [
      { name: 'SQL / MySQL', icon: SiMysql, level: 85 },
      { name: 'Data Cleaning', icon: FaDatabase, level: 88 },
      { name: 'Feature Engineering', icon: FaDatabase, level: 82 },
    ],
  },
  {
    category: 'Web Development',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    skills: [
      { name: 'React.js', icon: FaReact, level: 80 },
      { name: 'Node.js', icon: FaNodeJs, level: 75 },
      { name: 'JavaScript', icon: FaJs, level: 82 },
    ],
  },
  {
    category: 'Backend & APIs',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    skills: [
      { name: 'Flask', icon: FaFlask, level: 82 },
      { name: 'REST APIs', icon: FaNodeJs, level: 80 },
      { name: 'HTML & CSS', icon: FaHtml5, level: 88 },
    ],
  },
  {
    category: 'Tools & Practices',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.12)',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85 },
      { name: 'GitHub', icon: FaGithub, level: 85 },
      { name: 'SDLC / Debugging', icon: FaGitAlt, level: 78 },
    ],
  },
];

const SkillBar = ({ name, icon: Icon, level, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} style={{ marginBottom: '18px' }}>
      {/* Label row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: `${color}18`,
              border: `1px solid ${color}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon size={12} style={{ color }} />
          </div>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#cbd5e1',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {name}
          </span>
        </div>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          {level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height: '5px',
          width: '100%',
          borderRadius: '99px',
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: '100%',
            borderRadius: '99px',
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      style={{ padding: '100px 0', width: '100%' }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <SectionTitle label="What I Know" title="Skills & Expertise" />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '56px',
          }}
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              whileHover={{
                y: -6,
                boxShadow: `0 24px 64px ${cat.glow}`,
              }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'default',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${cat.color}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      fontFamily: 'Space Grotesk, sans-serif',
                      margin: 0,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {cat.category}
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      color: cat.color,
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 500,
                      opacity: 0.85,
                    }}
                  >
                    {cat.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Skill bars */}
              <div style={{ flex: 1 }}>
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    delay={catIdx * 0.08 + i * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #skills > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          #skills > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;