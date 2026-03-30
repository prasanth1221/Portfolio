import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    role: 'AI Research Intern',
    company: 'Brainmage AI',
    duration: '2024',
    color: '#a855f7',
    icon: '🧠',
    description:
      'Developed synthetic data generation pipelines and multilingual NLP models. Built end-to-end AI pipelines handling data ingestion, preprocessing, model training, and evaluation at scale.',
    tags: ['Synthetic Data', 'NLP', 'Multilingual Pipelines', 'Data Engineering'],
    certificateLink: 'https://drive.google.com/file/d/14Jc022ST0obobQZVCOYQM0X1-s69Vvxm/view?usp=sharing',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Infosys Springboard',
    duration: '2023',
    color: '#22d3ee',
    icon: '🔍',
    description:
      'Implemented fraud detection system using Local Outlier Factor (LOF) and Support Vector Machines (SVM). Achieved high precision anomaly detection on imbalanced financial datasets.',
    tags: ['Fraud Detection', 'LOF', 'SVM', 'Anomaly Detection'],
    certificateLink: 'https://drive.google.com/file/d/13gsCK1WNz9PA4L9iUEOAnwyzY9XVfVZF/view?usp=sharing',
  },
  {
    role: 'Research Intern',
    company: 'NITK — National Institute of Technology Karnataka',
    duration: '2023',
    color: '#6c63ff',
    icon: '🎓',
    description:
      'Researched Game Theory applications in Mobile Edge Computing. Analyzed congestion games and mechanism design for optimal resource allocation in distributed edge networks.',
    tags: ['Game Theory', 'Mobile Edge Computing', 'Congestion Games', 'Research'],
    certificateLink: 'https://drive.google.com/file/d/1ldrAjSEZ-e12rc8EDgc9fRIz4-TP4Wv6/view?usp=sharing',
  },
];

const ExperienceCard = ({ exp, i, isInView }) => {
  const isLeft = i % 2 === 0;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 56px 1fr',
        alignItems: 'start',
        marginBottom: '48px',
        position: 'relative',
      }}
    >
      {/* LEFT SLOT */}
      <div style={{ padding: '0 24px 0 0' }}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <Card exp={exp} />
          </motion.div>
        ) : null}
      </div>

      {/* CENTER — dot on the line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: i * 0.2 + 0.1, duration: 0.4, type: 'spring' }}
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: exp.color,
            boxShadow: `0 0 0 4px ${exp.color}25, 0 0 20px ${exp.color}60`,
            zIndex: 2,
            flexShrink: 0,
            marginTop: '24px',
          }}
        />
      </div>

      {/* RIGHT SLOT */}
      <div style={{ padding: '0 0 0 24px' }}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <Card exp={exp} />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CertificateIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const Card = ({ exp }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: `0 24px 60px ${exp.color}22` }}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '24px',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      cursor: 'default',
      backdropFilter: 'blur(12px)',
    }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = `${exp.color}40`)}
    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
  >
    {/* Header row */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        marginBottom: '16px',
      }}
    >
      {/* Emoji icon box */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: `${exp.color}18`,
          border: `1px solid ${exp.color}35`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}
      >
        {exp.icon}
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
          {exp.role}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: exp.color,
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {exp.company}
          </span>
          <span
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: '#475569',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '12px',
              color: '#64748b',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {exp.duration}
          </span>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div
      style={{
        height: '1px',
        background: 'rgba(255,255,255,0.06)',
        marginBottom: '16px',
      }}
    />

    {/* Description */}
    <p
      style={{
        fontSize: '13.5px',
        lineHeight: 1.75,
        color: '#94a3b8',
        margin: '0 0 18px 0',
        fontFamily: 'Space Grotesk, sans-serif',
      }}
    >
      {exp.description}
    </p>

    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
      {exp.tags.map(tag => (
        <span
          key={tag}
          style={{
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 600,
            background: `${exp.color}14`,
            color: exp.color,
            border: `1px solid ${exp.color}30`,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Divider above certificate */}
    <div
      style={{
        height: '1px',
        background: 'rgba(255,255,255,0.06)',
        marginBottom: '16px',
      }}
    />

    {/* Certificate Link Button */}
    <a
      href={exp.certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '8px 16px',
        borderRadius: '10px',
        background: `${exp.color}12`,
        border: `1px solid ${exp.color}35`,
        color: exp.color,
        fontSize: '12px',
        fontWeight: 600,
        fontFamily: 'Space Grotesk, sans-serif',
        letterSpacing: '0.03em',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${exp.color}22`;
        e.currentTarget.style.borderColor = `${exp.color}70`;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${exp.color}12`;
        e.currentTarget.style.borderColor = `${exp.color}35`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <CertificateIcon />
      View Certificate
      <ExternalLinkIcon />
    </a>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" style={{ padding: '100px 0', width: '100%' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <SectionTitle label="My Journey" title="Experience" />

        {/* Timeline wrapper */}
        <div
          ref={ref}
          style={{
            position: 'relative',
            marginTop: '60px',
          }}
        >
          {/* Vertical center line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, #6c63ff, #a855f7, #22d3ee, transparent)',
              borderRadius: '2px',
              zIndex: 0,
            }}
          />

          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} i={i} isInView={isInView} />
          ))}
        </div>
      </div>

      {/* Mobile: stack single column */}
      <style>{`
        @media (max-width: 700px) {
          #experience .timeline-row {
            grid-template-columns: 24px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;