import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt,
  FaCheckCircle, FaArrowRight, FaPaperPlane
} from 'react-icons/fa';

/* ─── data ─── */
const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/prasanthkumarbhumula', accent: '#e2e8f0' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/prasanthkumarbhumula', accent: '#0a66c2' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:prasanthkumarbhumula@gmail.com', accent: '#818cf8' },
];

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'prasanthkumarbhumula@gmail.com', color: '#818cf8' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'India', color: '#c084fc' },
  {
    icon: () => (
      <motion.span
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'block' }}
      />
    ),
    label: 'Status',
    value: 'Open to Opportunities',
    color: '#34d399',
  },
];

/* ─── floating particle ─── */
const Particle = ({ style }) => (
  <motion.div
    animate={{ y: [0, -18, 0], opacity: [0.18, 0.5, 0.18] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 }}
    style={{
      position: 'absolute',
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#818cf8,#c084fc)',
      pointerEvents: 'none',
      ...style,
    }}
  />
);

/* ─── input ─── */
const Field = ({ label, type = 'text', name, value, onChange, error, multiline }) => {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: focused ? '#818cf8' : '#475569',
        fontFamily: '"DM Mono", monospace',
        transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <Tag
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          rows={multiline ? 5 : undefined}
          placeholder={`Your ${label.toLowerCase()}…`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '13px 16px',
            borderRadius: 12,
            fontSize: 13,
            outline: 'none',
            resize: 'none',
            background: focused ? 'rgba(129,140,248,0.06)' : 'rgba(255,255,255,0.03)',
            border: error
              ? '1px solid #f87171'
              : focused
                ? '1px solid rgba(129,140,248,0.55)'
                : '1px solid rgba(255,255,255,0.07)',
            color: '#e2e8f0',
            fontFamily: '"DM Sans", sans-serif',
            transition: 'border 0.2s, background 0.2s, box-shadow 0.2s',
            boxShadow: focused ? '0 0 0 3px rgba(129,140,248,0.1)' : 'none',
            boxSizing: 'border-box',
          }}
        />
        {/* animated bottom line */}
        <motion.div
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: '10%',
            right: '10%',
            height: 1,
            background: 'linear-gradient(90deg,#818cf8,#c084fc)',
            transformOrigin: 'center',
            borderRadius: 1,
          }}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ fontSize: 11, color: '#f87171', fontFamily: '"DM Mono", monospace' }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── main component ─── */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  /* particles positions */
  const particles = [
    { top: '12%', left: '8%' }, { top: '55%', left: '3%' },
    { top: '80%', left: '14%' }, { top: '20%', right: '6%' },
    { top: '60%', right: '4%' }, { top: '88%', right: '10%' },
  ];

  return (
    <section
      id="contact"
      style={{ padding: '110px 0 120px', width: '100%', position: 'relative', overflow: 'hidden' }}
    >
      {/* ambient bg orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-120px',
        width: 420, height: 420,
        background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-100px',
        width: 380, height: 380,
        background: 'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 40px' }}>
        <SectionTitle
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have a project idea or opportunity? Let's build something amazing together."
        />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.55fr',
            gap: 28,
            marginTop: 60,
            alignItems: 'start',
          }}
        >
          {/* ══ LEFT PANEL ══ */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(145deg, rgba(129,140,248,0.07), rgba(192,132,252,0.04))',
              border: '1px solid rgba(129,140,248,0.14)',
              borderRadius: 24,
              padding: 36,
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* corner accent */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 120, height: 120,
              background: 'radial-gradient(circle at top right, rgba(192,132,252,0.15), transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* brand pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: 'rgba(129,140,248,0.1)',
              border: '1px solid rgba(129,140,248,0.22)',
              borderRadius: 100,
              padding: '5px 14px',
              marginBottom: 22,
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', display: 'block' }}
              />
              <span style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
                color: '#818cf8', fontFamily: '"DM Mono", monospace', textTransform: 'uppercase'
              }}>
                Available for work
              </span>
            </div>

            <h3 style={{
              fontSize: 26, fontWeight: 800, color: '#f1f5f9',
              margin: '0 0 12px', fontFamily: '"Syne", sans-serif', lineHeight: 1.15,
            }}>
              Let's create<br />
              <span style={{
                background: 'linear-gradient(135deg,#818cf8,#c084fc)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>
                something great
              </span>
            </h3>

            <p style={{
              fontSize: 13.5, lineHeight: 1.8, color: '#64748b',
              margin: '0 0 30px', fontFamily: '"DM Sans", sans-serif',
            }}>
              Open to AI/ML research, full-stack projects, and product collabs.
              I reply within 24–48 hours.
            </p>

            {/* divider */}
            <div style={{ height: 1, background: 'rgba(129,140,248,0.1)', marginBottom: 28 }} />

            {/* contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              {contactInfo.map(item => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14 }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 13,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: 10, color: '#475569', margin: '0 0 2px',
                      fontFamily: '"DM Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{item.label}</p>
                    <p style={{
                      fontSize: 13, fontWeight: 500, color: '#cbd5e1', margin: 0,
                      fontFamily: '"DM Sans", sans-serif', wordBreak: 'break-all',
                    }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ height: 1, background: 'rgba(129,140,248,0.1)', marginBottom: 24 }} />

            {/* socials */}
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#475569',
              fontFamily: '"DM Mono", monospace', marginBottom: 12, textTransform: 'uppercase',
            }}>Find me on</p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 30 }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -4 }}
                  whileTap={{ scale: 0.93 }}
                  title={s.label}
                  style={{
                    width: 44, height: 44, borderRadius: 13,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.accent, textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </div>

            {/* resume btn */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                padding: '12px 22px', borderRadius: 13, fontSize: 13, fontWeight: 600,
                color: '#e2e8f0',
                background: 'linear-gradient(135deg,rgba(129,140,248,0.18),rgba(192,132,252,0.14))',
                border: '1px solid rgba(129,140,248,0.28)',
                textDecoration: 'none', fontFamily: '"DM Sans", sans-serif',
                backdropFilter: 'blur(8px)',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(129,140,248,0.25)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              📄 Download Resume <FaArrowRight size={11} />
            </motion.a>
          </motion.div>

          {/* ══ RIGHT PANEL — FORM ══ */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 24,
              padding: '38px 36px',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* top-left glow */}
            <div style={{
              position: 'absolute', top: -60, left: -60,
              width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', padding: '60px 20px', minHeight: 360,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                    style={{
                      width: 72, height: 72, borderRadius: '50%',
                      background: 'rgba(52,211,153,0.12)',
                      border: '1px solid rgba(52,211,153,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 22,
                    }}
                  >
                    <FaCheckCircle size={30} style={{ color: '#34d399' }} />
                  </motion.div>
                  <h3 style={{
                    fontSize: 22, fontWeight: 800, color: '#f1f5f9',
                    margin: '0 0 10px', fontFamily: '"Syne", sans-serif',
                  }}>Message Sent!</h3>
                  <p style={{
                    fontSize: 13.5, color: '#64748b', fontFamily: '"DM Sans", sans-serif',
                    lineHeight: 1.75, margin: '0 0 28px', maxWidth: 280,
                  }}>
                    Thanks for reaching out. I'll get back to you within 24–48 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    style={{
                      fontSize: 12, fontWeight: 600, color: '#818cf8',
                      background: 'rgba(129,140,248,0.1)',
                      border: '1px solid rgba(129,140,248,0.25)',
                      borderRadius: 10, padding: '9px 20px',
                      cursor: 'pointer', fontFamily: '"DM Mono", monospace',
                      letterSpacing: '0.05em',
                    }}
                  >
                    ↩ Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  {/* form header */}
                  <div style={{ marginBottom: 4 }}>
                    <h3 style={{
                      fontSize: 21, fontWeight: 800, color: '#f1f5f9',
                      margin: '0 0 6px', fontFamily: '"Syne", sans-serif',
                    }}>Send a Message</h3>
                    <p style={{
                      fontSize: 13, color: '#475569',
                      fontFamily: '"DM Sans", sans-serif', margin: 0,
                    }}>Fill in the form and I'll get right back to you.</p>
                  </div>

                  {/* name + email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                    <Field label="Email" type="email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
                  </div>

                  <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} />
                  <Field label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} multiline />

                  {/* submit */}
                  <motion.button
                    type="submit"
                    whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 40px rgba(129,140,248,0.4)' } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                    disabled={loading}
                    style={{
                      width: '100%', padding: '15px',
                      borderRadius: 13, fontSize: 14, fontWeight: 700,
                      color: '#fff',
                      background: loading
                        ? 'rgba(129,140,248,0.35)'
                        : 'linear-gradient(135deg, #6366f1, #818cf8 40%, #c084fc)',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontFamily: '"Syne", sans-serif',
                      letterSpacing: '0.04em',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                      marginTop: 4,
                      transition: 'background 0.3s',
                      boxShadow: loading ? 'none' : '0 4px 24px rgba(99,102,241,0.25)',
                    }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          style={{
                            width: 16, height: 16,
                            border: '2px solid rgba(255,255,255,0.25)',
                            borderTop: '2px solid #fff',
                            borderRadius: '50%',
                          }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500;700&display=swap');
        @media (max-width: 800px) {
          #contact > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          #contact form > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder { color: #334155; }
        input, textarea { transition: border 0.2s, box-shadow 0.2s, background 0.2s; }
      `}</style>
    </section>
  );
};

export default Contact;