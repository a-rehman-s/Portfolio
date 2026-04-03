import React from 'react';
import './index.css';

const App = () => {
  return (
    <>
      <header className="container">
        <a href="#" className="logo">
          Abdur Rehman<span>.</span>
        </a>
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
          <div className="hero-code">
            <h2>Computer Engineer</h2>
            <h1>Abdur Rehman Saeed</h1>
            <p>
              Machine Learning & Robotics Enthusiast.<br />
              Translating complex business challenges into effective machine learning solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#contact" className="btn">Initialize Contact</a>
            </div>
          </div>
          
          {/* HUD Robotics Graphic */}
          <div className="hero-graphic">
            <div className="hud-ring ring-1"></div>
            <div className="hud-ring ring-2"></div>
            <div className="hud-ring ring-3"></div>
            <div className="bot-center">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container">
          <h2 className="section-title">System Profile</h2>
          <div className="tech-panel">
            <p style={{ marginBottom: '1.5rem' }}>
              I am an innovative and adaptable professional with hands-on experience in machine learning and robotics. 
              Currently pursuing my Bachelors of Computer Engineering at the <strong style={{ color: "var(--text-primary)" }}>University of Engineering And Technology, Taxila</strong> (Expected: August 2027).
            </p>
            <p>
              I am highly skilled in Python programming and data analysis, with a notable achievement as the 
              <strong style={{ color: "var(--accent-cyan)" }}> Winner of Prompt Engineering by Hackxila</strong>. My academic GPA stands at a solid 2.98.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="tech-timeline">
            
            <div className="timeline-node">
              <div className="timeline-header">
                <span className="timeline-title">Machine Learning Intern</span>
                <span className="timeline-company">DevelopersHub Corporation</span>
                <span className="timeline-date">| March 2026 - Present</span>
              </div>
              <div className="timeline-details">
                <ul>
                  <li>Created customized applications to make critical predictions and automate reasoning.</li>
                  <li>Developed a Weather Prediction System using machine learning on mock datasets.</li>
                  <li>Incorporated data to understand and translate complex business problems into ML models.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-header">
                <span className="timeline-title">Design and Simulation Intern</span>
                <span className="timeline-company">BrainSwarm Robotics</span>
                <span className="timeline-date">| May 2025 - July 2025</span>
              </div>
              <div className="timeline-details">
                <ul>
                  <li>Designed and integrated robotic arms through SolidWorks.</li>
                  <li>Developed robotic simulations using MuJoCo for real-world robotics.</li>
                  <li>Generated digital twins of robotic systems exporting into URDF/MJCF.</li>
                  <li>Designed miniature robotic arm kits for educational projects.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-header">
                <span className="timeline-title">Data Analyst Intern</span>
                <span className="timeline-company">Leverify Quest</span>
                <span className="timeline-date">| May 2024 - July 2024</span>
              </div>
              <div className="timeline-details">
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
          <h2 className="section-title">Core Skills</h2>
          <div className="tech-grid">
            <div className="tech-card"><i>❖</i> Algorithm Development</div>
            <div className="tech-card"><i>❖</i> Python Programming</div>
            <div className="tech-card"><i>❖</i> Deep Learning</div>
            <div className="tech-card"><i>❖</i> Microcontroller Prog.</div>
            <div className="tech-card"><i>❖</i> SolidWorks</div>
            <div className="tech-card"><i>❖</i> ROS Development</div>
            <div className="tech-card"><i>❖</i> Data Analysis</div>
            <div className="tech-card"><i>❖</i> Prompt Engineering</div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container">
          <h2 className="section-title">Communication Protocol</h2>
          <div className="contact-grid">
            
            <a href="mailto:abdurrehmansaeed709@gmail.com" className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>Email</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>abdurrehmansaeed709@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/arehmans1" target="_blank" rel="noopener noreferrer" className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>LinkedIn</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>in/arehmans1</span>
            </a>

            <div className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>Phone</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>+92 314 0540826</span>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Abdur Rehman Saeed. All Rights Reserved.</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Location: JOQs 6/C, PMO, Gulshan Colony, Taxila.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
