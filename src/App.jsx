import React from 'react';
import './portfolio.css';

const App = () => {
  return (
    <>
      <header className="container">
        <a href="#" className="logo">Abdur Rehman Saeed<span> .</span></a>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section id="hero" className="hero">
          <div className="hero-left">
            <h2>Computer Engineer</h2>
            <h1>Abdur Rehman Saeed</h1>
            <p>
              Innovative and adaptable professional with hands-on experience in machine learning and robotics.
              Skilled in Python programming and data analysis, translating complex business challenges into effective ML solutions.
            </p>
            <a href="#contact" className="btn">Get in touch</a>
          </div>

          <div className="hero-right">
            <div className="collage-wrap">
              <img src="/src/assets/dp.png" alt="Profile" className="dp" />
              <img src="/src/assets/hero.png" alt="Work sample" className="photo-2" />
              <img src="/src/assets/react.svg" alt="Badge" className="photo-3" />
              <div className="stamp stamp--main">ABDUR REHMAN SAEED</div>
              <div className="stamp stamp--small">COMPUTER ENGINEER</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-title">Professional Summary</div>
          <div className="work-panel" style={{marginTop: '1rem'}}>
            <p>
              Innovative and adaptable professional with hands-on experience in machine learning and robotics. Skilled in
              Python programming and data analysis, contributing to projects that translate complex business challenges into
              effective machine learning solutions.
            </p>
            <div style={{marginTop: '1rem'}}>
              <strong>Academic History</strong>
              <p>University of Engineering And Technology, Taxila — Bachelors of Computer Engineering (Expected: August 2027)</p>
              <p>GPA: 2.98 • Winner Prompt Engineering by Hackxila</p>
            </div>
            <div style={{marginTop: '1rem'}}>
              <strong>Contact</strong>
              <p>Email: abdurrehmansaeed709@gmail.com • Phone: +92 314 0540826</p>
              <p>Address: JOQs 6/C, PMO, Gulshan Colony, Taxila • LinkedIn: in/arehmans1</p>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-title">Work Experience</div>
          <div className="timeline" style={{marginTop: '1rem'}}>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-title">ML/AI Intern</div>
              <div className="timeline-company">FlyRank AI | Islamabad, Pakistan (Remote) <span style={{color:'#98a6b1'}}>• Jun 2026 - Present</span></div>
              <div className="timeline-details">
                <ul>
                  <li>Working as an AI intern at a Chicago-based startup; handling heavy datasets and model training.</li>
                  <li>Building agentic AI and chatbots for startups and businesses; visualizing model results.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-title">Machine Learning Intern</div>
              <div className="timeline-company">DevelopersHub Corporation | Islamabad, Pakistan (Remote) <span style={{color:'#98a6b1'}}>• Apr 2026 - May 2026</span></div>
              <div className="timeline-details">
                <ul>
                  <li>Created customised applications to make critical predictions and automate reasoning and decisions.</li>
                  <li>Developed a Weather Prediction System using machine learning on mock datasets.</li>
                  <li>Incorporated data to translate complex business problems into ML problems.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-title">Design and Simulation Intern</div>
              <div className="timeline-company">BrainSwarm Robotics | Islamabad, Pakistan <span style={{color:'#98a6b1'}}>• May 2025 - July 2025</span></div>
              <div className="timeline-details">
                <ul>
                  <li>Designed and integrated robotic arms through SolidWorks.</li>
                  <li>Developed robotic simulations using MuJoCo to enhance real-world applications.</li>
                  <li>Generated digital twins by exporting SolidWorks models into URDF/MJCF formats.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-title">Data Analyst Intern</div>
              <div className="timeline-company">Leverify Quest | Islamabad, Pakistan (Remote) <span style={{color:'#98a6b1'}}>• May 2024 - July 2024</span></div>
              <div className="timeline-details">
                <ul>
                  <li>Used professional statistical techniques and maintained large databases for partner/customer data.</li>
                  <li>Completed data cleaning and validation to promote robust data management and accurate analysis.</li>
                  <li>Commissioned and decommissioned datasets under mentor supervision; monitored uploads for quality.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">Core Skills</div>
          <div className="services-grid" style={{marginTop:'1rem'}}>
            <div className="service-card"><h4>Machine Learning & AI</h4><p>Deep learning, model training and evaluation.</p></div>
            <div className="service-card"><h4>Agentic AI & Prompt Engineering</h4><p>Designing agent systems and prompt pipelines.</p></div>
            <div className="service-card"><h4>Embedded & Robotics</h4><p>Microcontrollers, ROS, SolidWorks integrations.</p></div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-title">Connect</div>
          <div className="contact-grid" style={{marginTop:'1rem'}}>
            <a className="contact-card" href="mailto:abdurrehmansaeed709@gmail.com"><h4>Email</h4><p>abdurrehmansaeed709@gmail.com</p></a>
            <a className="contact-card" href="https://www.linkedin.com/in/arehmans1" target="_blank" rel="noreferrer"><h4>LinkedIn</h4><p>in/arehmans1</p></a>
            <div className="contact-card"><h4>Phone</h4><p>+92 314 0540826</p></div>
          </div>
        </section>

        <footer>
          <p>&copy; 2026 Abdur Rehman Saeed. All Rights Reserved.</p>
          <p style={{color:'#8b7f76', marginTop:8}}>Location: JOQs 6/C, PMO, Gulshan Colony, Taxila.</p>
        </footer>
      </main>
    </>
  );
};

export default App;
