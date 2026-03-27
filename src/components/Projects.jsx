import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaGithub, FaStar } from 'react-icons/fa';

const featuredProjects = [
  {
    title: 'Student Counseling System',
    emoji: '🎓',
    subtitle: 'Full Stack Web Platform',
    description:
      'A web platform connecting students with academic counselors. Features real-time appointment scheduling, encrypted session notes, progress tracking dashboards, and secure messaging between students and counselors.',
    theory:
      'Flask REST API backend with MySQL relational database. Role-based authentication separates student and counselor views. JavaScript frontend with dynamic form handling and session management via secure cookies.',
    tech: ['Flask', 'MySQL', 'HTML/CSS', 'JavaScript', 'REST API', 'Python'],
    color: '#10b981',
    github: 'https://github.com/prasanthkumarbhumula',
  },
  {
    title: 'Dynamic Pricing with RL',
    emoji: '💹',
    subtitle: 'Deep Q-Network Agent',
    description:
      'Reinforcement learning-based dynamic pricing engine using Deep Q-Networks (DQN). The agent learns optimal pricing strategies by interacting with a simulated market environment to maximize long-term revenue.',
    theory:
      'DQN agent trained on simulated demand-supply curves. Uses experience replay and target networks to stabilize training. State space encodes competitor prices, demand elasticity, and inventory levels.',
    tech: ['Python', 'PyTorch', 'DQN', 'Reinforcement Learning', 'Gym', 'NumPy'],
    color: '#a855f7',
    github: 'https://github.com/prasanthkumarbhumula',
  },
  {
    title: 'Credit Card Fraud Detection',
    emoji: '🛡️',
    subtitle: 'Anomaly Detection Pipeline',
    description:
      'End-to-end ML pipeline to detect fraudulent transactions on highly imbalanced financial datasets. Applied SMOTE for class balancing and ensemble models for robust anomaly scoring with high precision.',
    theory:
      'Combines Local Outlier Factor (LOF) and Support Vector Machines (SVM) with XGBoost ensemble. Handles severe class imbalance via SMOTE oversampling. Evaluated using F1-score, AUC-ROC, and precision-recall curves.',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'LOF', 'SVM', 'XGBoost'],
    color: '#f59e0b',
    github: 'https://github.com/prasanthkumarbhumula',
  },
];

const otherProjects = [
  {
    title: 'Learning Management System',
    emoji: '📚',
    subtitle: 'Full Stack MERN Application',
    description:
      'A full-featured LMS with course management, student enrollment, video streaming, quiz modules, progress tracking, and admin dashboards — built on the MERN stack with JWT authentication.',
    theory:
      'RESTful API architecture with role-based access control (RBAC). MongoDB stores course content, user progress, and quiz results. React frontend with Context API for state management.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST API'],
    color: '#22d3ee',
    github: 'https://github.com/prasanthkumarbhumula',
  },
  {
    title: 'Face Liveness Detection',
    emoji: '👁️',
    subtitle: 'UIDAI Concept Implementation',
    description:
      'A computer vision system that detects whether a face in an image or video stream is real (live) or a spoof (photo/video attack). Built to address Aadhaar-based biometric authentication security concerns.',
    theory:
      'Uses deep CNN features combined with texture analysis (LBP) and optical flow to distinguish live faces from printed photos, replay attacks, and 3D masks.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow', 'CNN', 'LBP'],
    color: '#6c63ff',
    github: 'https://github.com/prasanthkumarbhumula',
  },
];

const FeaturedCard = ({ project, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.15, duration: 0.7 }}
    whileHover={{ y: -6, boxShadow: `0 28px 72px ${project.color}22` }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = `${project.color}50`)}
    onMouseLeave={e => (e.currentTarget.style.borderColor = `${project.color}25`)}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${project.color}25`,
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'default',
      backdropFilter: 'blur(12px)',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
      height: '100%',
    }}
  >
    {/* Top color bar */}
    <div
      style={{
        height: '3px',
        background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
        flexShrink: 0,
      }}
    />

    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1 }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: `${project.color}18`,
              border: `1px solid ${project.color}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              flexShrink: 0,
            }}
          >
            {project.emoji}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#f1f5f9',
                margin: '0 0 4px 0',
                fontFamily: 'Space Grotesk, sans-serif',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: project.color,
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Featured badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '999px',
            background: `${project.color}18`,
            border: `1px solid ${project.color}35`,
            color: project.color,
            fontSize: '10px',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <FaStar size={9} /> Featured
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />

      {/* Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: 1.75,
          color: '#94a3b8',
          margin: '0 0 14px 0',
          fontFamily: 'Space Grotesk, sans-serif',
        }}
      >
        {project.description}
      </p>

      {/* How it works box */}
      <div
        style={{
          borderRadius: '12px',
          padding: '14px 16px',
          marginBottom: '16px',
          background: `${project.color}0c`,
          border: `1px solid ${project.color}20`,
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 700,
            color: project.color,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.04em',
            marginBottom: '6px',
          }}
        >
          💡 HOW IT WORKS
        </span>
        <p
          style={{
            fontSize: '12px',
            lineHeight: 1.7,
            color: '#64748b',
            margin: 0,
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {project.theory}
        </p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '20px' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              padding: '4px 11px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 500,
              background: 'rgba(255,255,255,0.05)',
              color: '#94a3b8',
              border: '1px solid rgba(255,255,255,0.09)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA — pushed to bottom */}
      <div style={{ marginTop: 'auto' }}>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 20px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#ffffff',
            background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
            textDecoration: 'none',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          <FaGithub size={13} /> View on GitHub
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const OtherCard = ({ project, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.45 + index * 0.12, duration: 0.6 }}
    whileHover={{ y: -5, boxShadow: `0 20px 56px ${project.color}20` }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = `${project.color}45`)}
    onMouseLeave={e => (e.currentTarget.style.borderColor = `${project.color}22`)}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${project.color}22`,
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'default',
      backdropFilter: 'blur(12px)',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
      height: '100%',
    }}
  >
    {/* Top row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: `${project.color}18`,
          border: `1px solid ${project.color}35`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        {project.emoji}
      </div>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, color: project.color }}
        style={{ color: '#475569', transition: 'color 0.2s ease' }}
      >
        <FaGithub size={18} />
      </motion.a>
    </div>

    {/* Title + subtitle */}
    <h3
      style={{
        fontSize: '15px',
        fontWeight: 700,
        color: '#f1f5f9',
        margin: '0 0 4px 0',
        fontFamily: 'Space Grotesk, sans-serif',
      }}
    >
      {project.title}
    </h3>
    <span
      style={{
        fontSize: '11px',
        fontWeight: 600,
        color: project.color,
        fontFamily: 'Space Grotesk, sans-serif',
        display: 'block',
        marginBottom: '12px',
        letterSpacing: '0.02em',
      }}
    >
      {project.subtitle}
    </span>

    {/* Divider */}
    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '14px' }} />

    {/* Description */}
    <p
      style={{
        fontSize: '13px',
        lineHeight: 1.75,
        color: '#94a3b8',
        margin: '0 0 14px 0',
        fontFamily: 'Space Grotesk, sans-serif',
        flex: 1,
      }}
    >
      {project.description}
    </p>

    {/* How it works */}
    <div
      style={{
        borderRadius: '12px',
        padding: '12px 14px',
        marginBottom: '16px',
        background: `${project.color}0c`,
        border: `1px solid ${project.color}20`,
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '11px',
          fontWeight: 700,
          color: project.color,
          fontFamily: 'Space Grotesk, sans-serif',
          letterSpacing: '0.04em',
          marginBottom: '5px',
        }}
      >
        💡 HOW IT WORKS
      </span>
      <p
        style={{
          fontSize: '12px',
          lineHeight: 1.7,
          color: '#64748b',
          margin: 0,
          fontFamily: 'Space Grotesk, sans-serif',
        }}
      >
        {project.theory}
      </p>
    </div>

    {/* Tech tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {project.tech.map(t => (
        <span
          key={t}
          style={{
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 500,
            background: `${project.color}14`,
            color: project.color,
            border: `1px solid ${project.color}28`,
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ padding: '100px 0', width: '100%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        <SectionTitle
          label="What I've Built"
          title="Projects"
        //subtitle="From research-grade ML systems to production full-stack applications."
        />

        <div ref={ref}>
          {/* Featured label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
              marginTop: '56px',
            }}
          >
            <FaStar style={{ color: '#f59e0b', flexShrink: 0 }} size={13} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#f59e0b',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              FEATURED PROJECTS
            </span>
          </div>

          {/* Featured grid — 3 cols */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '48px',
              alignItems: 'stretch',
            }}
          >
            {featuredProjects.map((p, i) => (
              <FeaturedCard key={p.title} project={p} index={i} isInView={isInView} />
            ))}
          </div>

          {/* Other Projects divider label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#475569',
                fontFamily: 'Space Grotesk, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              OTHER PROJECTS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Other projects — 2 cols */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            {otherProjects.map((p, i) => (
              <OtherCard key={p.title} project={p} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects > div > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #projects > div > div > div[style*="repeat(3, 1fr)"],
          #projects > div > div > div[style*="repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;