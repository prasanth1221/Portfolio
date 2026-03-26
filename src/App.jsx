import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen" style={{ background: '#050816' }}>
      {/* Ambient background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute rounded-full opacity-10 blur-[120px]"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #6c63ff, transparent)',
            top: '-100px',
            left: '-100px',
          }}
        />
        <div
          className="absolute rounded-full opacity-10 blur-[120px]"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #a855f7, transparent)',
            bottom: '20%',
            right: '-80px',
          }}
        />
        <div
          className="absolute rounded-full opacity-8 blur-[100px]"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #22d3ee, transparent)',
            top: '50%',
            left: '40%',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
