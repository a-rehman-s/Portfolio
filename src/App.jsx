import React from 'react';
import './portfolio.css';

const App = () => {
  return (
    <>
      <header className="container">
        <a href="#" className="logo">Abdur Rehman<span> .</span></a>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
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
              Machine Learning & Robotics Enthusiast. Translating complex business
              challenges into effective machine learning solutions.
            </p>
            <a href="#contact" className="btn">Get in touch</a>
          </div>

          <div className="hero-right">
            <div className="collage-wrap">
              <img src="/src/assets/dp.png" alt="Profile" className="dp" />
              <img src="/src/assets/hero.png" alt="Work sample" className="photo-2" />
              <img src="/src/assets/react.svg" alt="Badge" className="photo-3" />
              <div className="stamp stamp--main">MY WORK</div>
              <div className="stamp stamp--small">PHIRI</div>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-title">MY WORK</div>
          <div className="work-panel">
            <p>Selected project highlights and case studies.</p>
            <div className="timeline">
              <div className="timeline-node">
                <div className="timeline-dot"></div>
                <div className="timeline-title">Machine Learning Intern</div>
                <div className="timeline-company">DevelopersHub Corporation <span style={{color:'#98a6b1'}}> | March 2026 - Present</span></div>
                <div className="timeline-details">
                  <ul>
                    <li>Created customized applications to make critical predictions and automate reasoning.</li>
                    <li>Developed a Weather Prediction System using ML on mock datasets.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-title">SERVICES I OFFER</div>
          <div className="services-grid">
            <div className="service-card">
              <h4>Machine Learning</h4>
              <p>Model design, training and deployment.</p>
            </div>
            <div className="service-card">
              <h4>Embedded Systems</h4>
              <p>Microcontroller programming and robotics integration.</p>
            </div>
            <div className="service-card">
              <h4>Design & Documentation</h4>
              <p>SolidWorks kits, simulations and technical writeups.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-title">CONNECT WITH ME</div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:abdurrehmansaeed709@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h4>Email</h4>
              <p>abdurrehmansaeed709@gmail.com</p>
            </a>

            <a className="contact-card" href="https://www.linkedin.com/in/arehmans1" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <h4>LinkedIn</h4>
              <p>in/arehmans1</p>
            </a>

            <div className="contact-card">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h4>Phone</h4>
              <p>+92 314 0540826</p>
            </div>
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
