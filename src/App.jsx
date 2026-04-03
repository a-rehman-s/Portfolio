import React from 'react';
import './index.css';

const App = () => {
  return (
    <>
      <header className="container">
        <div className="logo">&lt;Abdur.<span style={{ color: "var(--accent-green)" }}>sys</span> /&gt;</div>
        <nav>
          <ul>
            <li><a href="#about">~/about</a></li>
            <li><a href="#experience">~/experience</a></li>
            <li><a href="#skills">~/skills</a></li>
            <li><a href="#contact">~/contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="container hero">
          <div className="hero-code">
            <div style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>
              <span className="syntax-keyword">const</span> <span className="syntax-func">engineer</span> = <span className="syntax-keyword">new</span> <span className="syntax-func">ComputerEngineer</span>();
            </div>
            <h1>
              <span className="syntax-var">Abdur Rehman</span><br />
              <span style={{ color: 'var(--text-primary)' }}>Saeed</span>
            </h1>
            <p>
              <span className="syntax-comment">// Machine Learning & Robotics Enthusiast.</span><br />
              <span style={{ color: 'var(--text-secondary)' }}>Translating complex business challenges into effective machine learning solutions.</span>
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#contact" className="btn">Deploy_Connection()</a>
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
          <h2 className="section-title">01. system_profile.md</h2>
          <div className="ide-panel">
            <div className="ide-header">
              <div className="ide-dots">
                <div className="dot-red"></div>
                <div className="dot-yellow"></div>
                <div className="dot-green"></div>
              </div>
              src/components/About.jsx
            </div>
            <div className="ide-content">
              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <span className="syntax-keyword">import</span> <span className="syntax-string">"UET_Taxila"</span>;<br /><br />
                I am an innovative and adaptable professional with hands-on experience in machine learning and robotics. 
                Currently pursuing my Bachelors of Computer Engineering at the <span className="syntax-var">University of Engineering And Technology, Taxila</span> (Expected: August 2027).
              </p>
              <p style={{ lineHeight: '1.8' }}>
                I am highly skilled in Python programming and data analysis, with a notable achievement as the 
                <span className="syntax-string"> "Winner of Prompt Engineering by Hackxila"</span>. My academic GPA stands at <span className="syntax-func">2.98</span>.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="container">
          <h2 className="section-title">02. git_history.log</h2>
          <div className="git-timeline">
            
            <div className="commit">
              <div className="commit-header">
                <span className="commit-hash">commit 8f3a3v2 (HEAD -> master, origin/master)</span>
                <span className="commit-title">feat: Machine Learning Intern</span>
                <span className="commit-company">@ DevelopersHub Corporation | March 2026 - Present</span>
              </div>
              <div className="commit-details">
                <ul>
                  <li>Created customized applications to make critical predictions and automate reasoning.</li>
                  <li>Developed a Weather Prediction System using machine learning on mock datasets.</li>
                  <li>Incorporated data to understand and translate complex business problems into ML models.</li>
                </ul>
              </div>
            </div>

            <div className="commit">
              <div className="commit-header">
                <span className="commit-hash">commit 92b41c1</span>
                <span className="commit-title">feat: Design and Simulation Intern</span>
                <span className="commit-company">@ BrainSwarm Robotics | May 2025 - July 2025</span>
              </div>
              <div className="commit-details">
                <ul>
                  <li>Designed and integrated robotic arms through SolidWorks.</li>
                  <li>Developed robotic simulations using MuJoCo for real-world robotics.</li>
                  <li>Generated digital twins of robotic systems exporting into URDF/MJCF.</li>
                  <li>Designed miniature robotic arm kits for educational projects.</li>
                </ul>
              </div>
            </div>

            <div className="commit">
              <div className="commit-header">
                <span className="commit-hash">commit 4a1d9f8</span>
                <span className="commit-title">feat: Data Analyst Intern</span>
                <span className="commit-company">@ Leverify Quest | May 2024 - July 2024</span>
              </div>
              <div className="commit-details">
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
          <h2 className="section-title">03. active_modules.json</h2>
          <div className="ide-panel">
            <div className="ide-header">
              <div className="ide-dots">
                <div className="dot-red"></div>
                <div className="dot-yellow"></div>
                <div className="dot-green"></div>
              </div>
              config/skills.json
            </div>
            <div className="ide-content tech-grid">
              <div className="tech-card"><i>#</i> Algorithm Development</div>
              <div className="tech-card"><i>#</i> Python Programming</div>
              <div className="tech-card"><i>#</i> Deep Learning</div>
              <div className="tech-card"><i>#</i> Microcontroller Prog.</div>
              <div className="tech-card"><i>#</i> SolidWorks</div>
              <div className="tech-card"><i>#</i> ROS Development</div>
              <div className="tech-card"><i>#</i> Data Analysis</div>
              <div className="tech-card"><i>#</i> Prompt Engineering</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container">
          <h2 className="section-title">04. establish_connection()</h2>
          <div className="contact-grid">
            
            <a href="mailto:abdurrehmansaeed709@gmail.com" className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>SYS.MAILPORT</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>abdurrehmansaeed709@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/arehmans1" target="_blank" rel="noopener noreferrer" className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>NET.LINKEDIN</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>in/arehmans1</span>
            </a>

            <div className="contact-node">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>COMM.RADIO</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>+92 314 0540826</span>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>SYSTEM.HALT(0) // &copy; 2026 Abdur Rehman Saeed.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--accent-green)' }}>[LOCATION: JOQs 6/C, PMO, Gulshan Colony, Taxila.]</p>
        </div>
      </footer>
    </>
  );
};

export default App;
