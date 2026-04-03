import React, { useEffect } from 'react';
import './index.css';

const App = () => {
  useEffect(() => {
    // Add dynamic cursor blob effect if mouse is used
    const blob = document.getElementById("cursor-blob");
    const handlePointerMove = (e) => {
      if (blob) {
        blob.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      <div id="cursor-blob" style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        background: 'var(--gradient)',
        borderRadius: '50%',
        filter: 'blur(150px)',
        zIndex: -2,
        transform: 'translate(-50%, -50%)',
        opacity: 0.3,
        pointerEvents: 'none'
      }}></div>

      <header className="container">
        <div className="logo">Abdur<span>.</span></div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="container hero">
          <div className="hero-content">
            <h2>Hello, I'm</h2>
            <h1>Abdur Rehman<br /><span>Saeed</span></h1>
            <p>Computer Engineer | Machine Learning & Robotics Enthusist.</p>
            <p style={{ marginTop: '-1rem' }}>Translating complex business challenges into effective machine learning solutions.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
              <a href="#experience" className="btn glass-panel" style={{ padding: '0.8rem 1.5rem', borderRadius: '30px' }}>View Work</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-blob">
              {/* Optional avatar or abstract graphic */}
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="glass-panel">
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I am an innovative and adaptable professional with hands-on experience in machine learning and robotics. 
              Currently pursuing my Bachelors of Computer Engineering at the <b>University of Engineering And Technology, Taxila</b> (Expected graduation: August 2027).
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              I am highly skilled in Python programming and data analysis, with a notable achievement as the 
              <b> Winner of Prompt Engineering by Hackxila</b>. My academic GPA stands at a solid 2.98.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="container">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="timeline">
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Machine Learning Intern</h3>
                <h4>DevelopersHub Corporation</h4>
                <span className="date">March 2026 - Present | Remote</span>
                <ul>
                  <li>Created customized applications to make critical predictions and automate reasoning.</li>
                  <li>Developed a Weather Prediction System using machine learning on mock datasets.</li>
                  <li>Incorporated data to understand and translate complex business problems into ML models.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>Design and Simulation Intern</h3>
                <h4>BrainSwarm Robotics</h4>
                <span className="date">May 2025 - July 2025 | Islamabad</span>
                <ul>
                  <li>Designed and integrated robotic arms through SolidWorks.</li>
                  <li>Developed robotic simulations using MuJoCo for real-world robotics.</li>
                  <li>Generated digital twins of robotic systems exporting into URDF/MJCF.</li>
                  <li>Designed miniature robotic arm kits for educational projects.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Data Analyst Intern</h3>
                <h4>Leverify Quest</h4>
                <span className="date">May 2024 - July 2024 | Remote</span>
                <ul>
                  <li>Utilized statistical techniques and maintained large databases.</li>
                  <li>Completed data cleaning and validation for robust data management.</li>
                  <li>Commissioned and decommissioned datasets under mentorship.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="container">
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-pill">Algorithm Development</div>
            <div className="skill-pill">Python Programming</div>
            <div className="skill-pill">Deep Learning</div>
            <div className="skill-pill">Microcontroller Programming</div>
            <div className="skill-pill">SolidWorks</div>
            <div className="skill-pill">ROS Development</div>
            <div className="skill-pill">Data Analysis</div>
            <div className="skill-pill">Prompt Engineering</div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-container">
            
            <a href="mailto:abdurrehmansaeed709@gmail.com" className="contact-card glass-panel">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h3>Email</h3>
              <p>abdurrehmansaeed709@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/arehmans1" target="_blank" rel="noopener noreferrer" className="contact-card glass-panel">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <h3>LinkedIn</h3>
              <p>in/arehmans1</p>
            </a>

            <div className="contact-card glass-panel">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3>Phone</h3>
              <p>+92 314 0540826</p>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Abdur Rehman Saeed. All Rights Reserved.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>JOQs 6/C, PMO, Gulshan Colony, Taxila.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
