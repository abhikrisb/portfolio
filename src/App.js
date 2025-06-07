import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('matrix');
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Move textArray inside useMemo to prevent recreation on every render
  const textArray = useMemo(() => [
    'Full-Stack Developer',
    'Rust & React Specialist',
    'Backend Systems Architect',
    'Problem Solver',
    'Tech Innovator'
  ], []);

  // Theme configurations
  const themes = {
    matrix: '💚',
    default: '🌟',
    cyber: '🤖',
    neon: '⚡',
    space: '🚀'
  };

  // Typewriter effect
  useEffect(() => {
    const currentText = textArray[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, textArray]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Loading effect
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Initialize theme on component mount
    document.documentElement.setAttribute('data-theme', currentTheme);

    return () => clearTimeout(loadTimer);
  }, [currentTheme]);

  // Theme cycling
  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themeKeys[nextIndex];
    
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        
       <div className="code-rain-enhanced">
          <div className="code-line">const developer = 'abhishek';</div>
          <div className="code-line">function buildAmazingApps() &#123;</div>
          <div className="code-line">return innovation + creativity;</div>
          <div className="code-line">&#125;</div>
        </div>
        
        <div className="floating-shapes-enhanced">
          <div className="shape-3d shape-1">
            <span className="shape-icon">🦀</span>
          </div>
          <div className="shape-3d shape-2">
            <span className="shape-icon">⚛️</span>
          </div>
          <div className="shape-3d shape-3">
            <span className="shape-icon">💻</span>
          </div>
          <div className="shape-3d shape-4">
            <span className="shape-icon">🚀</span>
          </div>
        </div>
        
        <div className="grid-overlay-enhanced"></div>
        
        <div className="geometric-patterns">
          <div className="pattern pattern-1"></div>
          <div className="pattern pattern-2"></div>
          <div className="pattern pattern-3"></div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={cycleTheme}>
        <span className="theme-icon">{themes[currentTheme]}</span>
        <span>Theme</span>
      </button>

      {/* Enhanced Navigation */}
      <nav className="navbar-enhanced">
        <div className="nav-container-enhanced">
          <div className="nav-brand-enhanced">
            <span className="brand-icon-enhanced">👨‍💻</span>
            <span className="brand-text-enhanced">AbhiPortfolio</span>
            <span className="version-tag-enhanced">v2.0</span>
          </div>
          <div className="nav-links-enhanced">
            <a href="#home" className="nav-link-enhanced" onClick={() => scrollToSection('home')}>
              <span className="nav-link-glow"></span>
              Home
            </a>
            <a href="#about" className="nav-link-enhanced" onClick={() => scrollToSection('about')}>
              <span className="nav-link-glow"></span>
              About
            </a>
            <a href="#skills" className="nav-link-enhanced" onClick={() => scrollToSection('skills')}>
              <span className="nav-link-glow"></span>
              Skills
            </a>
            <a href="#projects" className="nav-link-enhanced" onClick={() => scrollToSection('projects')}>
              <span className="nav-link-glow"></span>
              Projects
            </a>
            <a href="#contact" className="nav-link-enhanced" onClick={() => scrollToSection('contact')}>
              <span className="nav-link-glow"></span>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="hero-enhanced">
        <div className="hero-content">
          {/* Enhanced Status Bar */}
          <div className="status-bar-enhanced">
            <div className="status-item-enhanced">
              <div className="status-dot-enhanced live"></div>
              <span>Available for Work</span>
            </div>
            <div className="status-item-enhanced">
              <div className="status-dot-enhanced"></div>
              <span>Open Source Contributor</span>
            </div>
            <div className="status-item-enhanced">
              <div className="status-dot-enhanced"></div>
              <span>Always Learning</span>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="profile-section-enhanced">
            <div className="profile-image-enhanced">
              <div className="avatar-container-enhanced">
                <div className="avatar-enhanced">
                  <div className="avatar-glow-enhanced"></div>
                  <div className="avatar-ring"></div>
                  <span className="avatar-text">AK</span>
                  <div className="hologram-effect"></div>
                  <div className="status-indicator-enhanced">
                    <div className="status-pulse-enhanced"></div>
                  </div>
                </div>
                <div className="code-overlay-enhanced">
                  &lt;/dev&gt;
                </div>
              </div>
            </div>

            <div className="typing-animation-enhanced">
              <h1>
                <span className="glitch-enhanced" data-text="Abhishek Krishna">
                  Abhishek Krishna
                </span>
              </h1>
              <div className="role-badge-enhanced">
                <div className="badge-glow"></div>
                <span className="badge-text">Full-Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Enhanced Typewriter */}
          <div className="typewriter-enhanced">
            <span className="typed-text">{displayText}</span>
            <span className={`typing-cursor-enhanced ${showCursor ? '' : 'hidden'}`}>|</span>
          </div>

          {/* Enhanced Hero Description */}
          <p className="hero-description-enhanced">
            Passionate <span className="highlight-enhanced">full-stack developer</span> specializing in 
            <span className="rust-highlight-enhanced"> Rust</span>, 
            <span className="react-highlight-enhanced"> React</span>, and 
            <span className="clean-code-enhanced"> modern web technologies</span>. 
            I build scalable, secure applications that solve real-world problems.
          </p>

          {/* Enhanced CTA Section */}
          <div className="cta-section-enhanced">
            <div className="cta-buttons-enhanced">
              <a href="#projects" className="btn-primary-enhanced" onClick={() => scrollToSection('projects')}>
                <span className="btn-sparkle-enhanced"></span>
                <span className="btn-ripple"></span>
                View My Work
              </a>
              <a href="#contact" className="btn-secondary-enhanced" onClick={() => scrollToSection('contact')}>
                <span className="btn-border-glow"></span>
                Let's Connect
              </a>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="quick-stats-enhanced">
              <div className="stat-mini-enhanced">
                <span className="stat-number-enhanced">1+</span>
                <span className="stat-label-enhanced">Years</span>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-mini-enhanced">
                <span className="stat-number-enhanced">4+</span>
                <span className="stat-label-enhanced">Projects</span>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-mini-enhanced">
                <span className="stat-number-enhanced">10K+</span>
                <span className="stat-label-enhanced">Lines of Code</span>
                <div className="stat-glow"></div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="social-links-enhanced">
              <a href="https://github.com/abhikrisb" className="social-link-enhanced" data-tooltip="GitHub">
                <span className="social-glow"></span>
                <span className="social-ripple-enhanced"></span>
                🐙
              </a>
              <a href="https://linkedin.com/in/abhishekkrishna1" className="social-link-enhanced" data-tooltip="LinkedIn">
                <span className="social-glow"></span>
                <span className="social-ripple-enhanced"></span>
                💼
              </a>
              {/* <a href="https://twitter.com/abhikrisb" className="social-link-enhanced" data-tooltip="Twitter">
                <span className="social-glow"></span>
                <span className="social-ripple-enhanced"></span>
                🐦
              </a> */}
              <a href="mailto:abhishekkrishna276@gmail.com" className="social-link-enhanced" data-tooltip="Email">
                <span className="social-glow"></span>
                <span className="social-ripple-enhanced"></span>
                📧
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="section-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <h2 className="section-title-enhanced">
              <span className="section-icon-enhanced">👨‍💻</span>
              <span className="title-text">About Me</span>
              <div className="title-underline-enhanced"></div>
            </h2>
            <p className="section-subtitle-enhanced">
              Building the future with code, one project at a time
            </p>
          </div>

          <div className="about-content-enhanced">
            <div className="about-text-enhanced">
              <div className="text-card-enhanced glass-card-enhanced">
                <div className="card-header-enhanced">
                  <span className="card-title-enhanced">developer_story.rs</span>
                  <div className="terminal-dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                </div>
                
                <div className="creative-text-enhanced">
                  <p>
                    Hi! I'm <span className="text-gradient-enhanced">Abhishek Krishna</span>, a passionate 
                    full-stack developer who loves building <span className="highlight-box-enhanced">scalable applications</span> 
                    and solving complex problems. My journey in tech began with curiosity and has evolved 
                    into a dedication to creating impactful software solutions.
                  </p>
                  
                  <p>
                    I specialize in <span className="rust-highlight-enhanced">Rust backend development</span> and 
                    <span className="react-highlight-enhanced"> modern React frontends</span>. My experience 
                    spans from enterprise property management systems to innovative billing solutions, 
                    always focusing on <span className="clean-code-enhanced">security, performance, and user experience</span>.
                  </p>
                  
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                    or mentoring aspiring developers in the community.
                  </p>
                </div>

                <div className="code-snippet-enhanced">
                  <div className="code-header">
                    <span className="file-name">passion.rs</span>
                    <span className="line-numbers">1-8</span>
                  </div>
                  <pre>
{`fn main() {
    let skills = vec!["Rust", "React", "TypeScript"];
    let mission = "Build amazing software solutions";
    
    println!("Powered by: {:?}", skills);
    println!("Mission: {}", mission);
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="stats-grid-enhanced">
              <div className="stat-card-enhanced">
                <div className="stat-icon-enhanced">🏆</div>
                <h3>4+</h3>
                <p>Major Projects</p>
                <div className="stat-bar-enhanced">
                  <div className="stat-fill-enhanced" style={{width: '90%'}}></div>
                </div>
                <span className="stat-detail-enhanced">Enterprise Grade</span>
                <div className="stat-glow-bg"></div>
              </div>
              
              <div className="stat-card-enhanced">
                <div className="stat-icon-enhanced">🚀</div>
                <h3>4+</h3>
                <p>Applications Built</p>
                <div className="stat-bar-enhanced">
                  <div className="stat-fill-enhanced" style={{width: '95%'}}></div>
                </div>
                <span className="stat-detail-enhanced">Production Ready</span>
                <div className="stat-glow-bg"></div>
              </div>
              
              <div className="stat-card-enhanced">
                <div className="stat-icon-enhanced">⚡</div>
                <h3>99.5%</h3>
                <p>Uptime Achieved</p>
                <div className="stat-bar-enhanced">
                  <div className="stat-fill-enhanced" style={{width: '99%'}}></div>
                </div>
                <span className="stat-detail-enhanced">Reliability</span>
                <div className="stat-glow-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="section-enhanced skills-section-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <h2 className="section-title-enhanced">
              <span className="section-icon-enhanced">🛠️</span>
              <span className="title-text">Skills & Expertise</span>
              <div className="title-underline-enhanced"></div>
            </h2>
            <p className="section-subtitle-enhanced">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className="skills-container-enhanced">
            <div className="skill-category-enhanced">
              <div className="skill-level-badge-enhanced">Expert</div>
              <div className="skill-glow-orb"></div>
              <div className="skill-header-enhanced">
                <div className="skill-category-icon-enhanced">⚛️</div>
                <h3>Frontend Development</h3>
              </div>
              
              <div className="skill-items-enhanced">
                <div className="skill-tag-enhanced skill-active-enhanced">
                  React
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  TypeScript
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Next.js
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Tailwind CSS
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Material-UI
                  <div className="skill-tag-glow"></div>
                </div>
              </div>
              
              <div className="skill-progress-enhanced"></div>
              <div className="skill-card-bg-glow"></div>
            </div>

            <div className="skill-category-enhanced">
              <div className="skill-level-badge-enhanced">Advanced</div>
              <div className="skill-glow-orb"></div>
              <div className="skill-header-enhanced">
                <div className="skill-category-icon-enhanced">🦀</div>
                <h3>Backend Development</h3>
              </div>
              
              <div className="skill-items-enhanced">
                <div className="skill-tag-enhanced skill-active-enhanced">
                  Rust
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Actix-web
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  PostgreSQL
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Redis
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Docker
                  <div className="skill-tag-glow"></div>
                </div>
              </div>
              
              <div className="skill-progress-enhanced"></div>
              <div className="skill-card-bg-glow"></div>
            </div>

            <div className="skill-category-enhanced">
              <div className="skill-level-badge-enhanced">Proficient</div>
              <div className="skill-glow-orb"></div>
              <div className="skill-header-enhanced">
                <div className="skill-category-icon-enhanced">🎨</div>
                <h3>Tools & APIs</h3>
              </div>
              
              <div className="skill-items-enhanced">
                <div className="skill-tag-enhanced">
                  Vonage SMS API
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Azure Face API
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Google Cloud Vision
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  Stripe API
                  <div className="skill-tag-glow"></div>
                </div>
                <div className="skill-tag-enhanced">
                  JWT Authentication
                  <div className="skill-tag-glow"></div>
                </div>
              </div>
              
              <div className="skill-progress-enhanced"></div>
              <div className="skill-card-bg-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="section-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <h2 className="section-title-enhanced">
              <span className="section-icon-enhanced">💼</span>
              <span className="title-text">Experience</span>
              <div className="title-underline-enhanced"></div>
            </h2>
            <p className="section-subtitle-enhanced">
              My journey building real-world applications
            </p>
          </div>

          <div className="timeline-enhanced">
            <div className="timeline-item-enhanced timeline-left">
              <div className="timeline-marker-enhanced">
                <div className="marker-pulse-enhanced"></div>
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content-enhanced">
                <div className="timeline-header-enhanced">
                  <div>
                    <h3>Backend Developer</h3>
                    <div className="company-badge-enhanced">Propella (Enterprise Property Platform)</div>
                  </div>
                </div>
                <div className="period-badge-enhanced">Mar 2025 - Present</div>
                <p className="experience-desc-enhanced">
                  Developed secure, scalable backend for property management platform using Rust and Actix-web. 
                  Implemented OTP-based two-factor authentication via Vonage SMS API, JWT token management, 
                  and comprehensive RESTful APIs for enterprise-level deployment.
                </p>
                <div className="achievement-tag-enhanced">
                  🏢 Security-first architecture with enterprise scalability
                </div>
                <div className="tech-stack-timeline">
                  <div className="tech-badge-timeline">Rust</div>
                  <div className="tech-badge-timeline">Actix-web</div>
                  <div className="tech-badge-timeline">PostgreSQL</div>
                  <div className="tech-badge-timeline">JWT</div>
                  <div className="tech-badge-timeline">Vonage SMS API</div>
                  <div className="tech-badge-timeline">RESTful APIs</div>
                </div>
                <div className="timeline-card-glow"></div>
              </div>
            </div>

            <div className="timeline-item-enhanced timeline-right">
              <div className="timeline-marker-enhanced">
                <div className="marker-pulse-enhanced"></div>
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content-enhanced">
                <div className="timeline-header-enhanced">
                  <div>
                    <h3>Full-Stack Developer</h3>
                    <div className="company-badge-enhanced">Billing System (Lakshmi Sarees)</div>
                  </div>
                </div>
                <div className="period-badge-enhanced">Apr 2025</div>
                <p className="experience-desc-enhanced">
                  Built comprehensive billing and inventory management system with modern tabbed dashboard interface. 
                  Integrated inventory management, billing, sales history, and reporting with JWT-based authentication 
                  for secure retail operations.
                </p>
                <div className="achievement-tag-enhanced">
                  💳 Complete retail management transformation
                </div>
                <div className="tech-stack-timeline">
                  <div className="tech-badge-timeline">Next.js</div>
                  <div className="tech-badge-timeline">React</div>
                  <div className="tech-badge-timeline">TypeScript</div>
                  <div className="tech-badge-timeline">Material-UI</div>
                  <div className="tech-badge-timeline">PostgreSQL</div>
                  <div className="tech-badge-timeline">JWT</div>
                </div>
                <div className="timeline-card-glow"></div>
              </div>
            </div>

            <div className="timeline-item-enhanced timeline-left">
              <div className="timeline-marker-enhanced">
                <div className="marker-pulse-enhanced"></div>
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content-enhanced">
                <div className="timeline-header-enhanced">
                  <div>
                    <h3>Full-Stack Developer</h3>
                    <div className="company-badge-enhanced">AcadAssist (Student Dashboard)</div>
                  </div>
                </div>
                <div className="period-badge-enhanced">Jan 2025 - Feb 2025</div>
                <p className="experience-desc-enhanced">
                  Developed advanced academic assistant dashboard centralizing campus life and productivity tools. 
                  Built modular interface with glassmorphism effects, real-time features, and personalized 
                  productivity tools for enhanced student experience.
                </p>
                <div className="achievement-tag-enhanced">
                  🎓 Unified student productivity platform
                </div>
                <div className="tech-stack-timeline">
                  <div className="tech-badge-timeline">Next.js</div>
                  <div className="tech-badge-timeline">React</div>
                  <div className="tech-badge-timeline">TypeScript</div>
                  <div className="tech-badge-timeline">Tailwind CSS</div>
                  <div className="tech-badge-timeline">PostgreSQL</div>
                  <div className="tech-badge-timeline">JWT</div>
                </div>
                <div className="timeline-card-glow"></div>
              </div>
            </div>

            <div className="timeline-item-enhanced timeline-right">
              <div className="timeline-marker-enhanced">
                <div className="marker-pulse-enhanced"></div>
                <div className="marker-glow"></div>
              </div>
              <div className="timeline-content-enhanced">
                <div className="timeline-header-enhanced">
                  <div>
                    <h3>Frontend Developer</h3>
                    <div className="company-badge-enhanced">Smart Campus Verification Portal</div>
                  </div>
                </div>
                <div className="period-badge-enhanced">Aug 2024 - Sep 2024</div>
                <p className="experience-desc-enhanced">
                  Built smart campus verification portal for SRM University with automated student identity 
                  and face verification. Integrated Azure Face API and Google Cloud Vision API for accurate 
                  face and text recognition with real-time camera support.
                </p>
                <div className="achievement-tag-enhanced">
                  📸 AI-powered campus verification system
                </div>
                <div className="tech-stack-timeline">
                  <div className="tech-badge-timeline">JavaScript</div>
                  <div className="tech-badge-timeline">HTML5</div>
                  <div className="tech-badge-timeline">CSS3</div>
                  <div className="tech-badge-timeline">Azure Face API</div>
                  <div className="tech-badge-timeline">Google Cloud Vision</div>
                  <div className="tech-badge-timeline">MediaDevices API</div>
                </div>
                <div className="timeline-card-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Projects Section */}
      <section id="projects" className="section-enhanced projects-section-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <h2 className="section-title-enhanced">
              <span className="section-icon-enhanced">🚀</span>
              <span className="title-text">Featured Projects</span>
              <div className="title-underline-enhanced"></div>
            </h2>
            <p className="section-subtitle-enhanced">
              Real-world applications that make a difference
            </p>
          </div>

          <div className="projects-grid-enhanced">
            {/* Propella Project */}
            <div className="project-card-enhanced">
              <div className="project-gradient-enhanced" style={{background: 'linear-gradient(45deg, #667eea, #764ba2)'}}></div>
              <div className="project-content-enhanced">
                <div className="project-header-enhanced">
                  <div className="project-icon-enhanced">🏢</div>
                  <h3>Propella</h3>
                  <div className="status-badge-enhanced production">Live</div>
                </div>
                
                <p className="project-description-enhanced">
                  Enterprise property management platform with microservices architecture, 
                  real-time notifications, and advanced security protocols built with Rust.
                </p>
                
                <div className="features-grid-enhanced">
                  <div className="feature-pill-enhanced">Multi-factor Auth</div>
                  <div className="feature-pill-enhanced">RESTful APIs</div>
                  <div className="feature-pill-enhanced">Real-time Notifications</div>
                  <div className="feature-pill-enhanced">Security First</div>
                </div>
                
                <div className="tech-stack-enhanced">
                  <div className="tech-badge-enhanced">Rust</div>
                  <div className="tech-badge-enhanced">Actix-web</div>
                  <div className="tech-badge-enhanced">PostgreSQL</div>
                  <div className="tech-badge-enhanced">JWT</div>
                  <div className="tech-badge-enhanced">Docker</div>
                </div>
                
                <div className="project-actions-enhanced">
                  <a href="https://github.com/abhikrisb/nft-api" className="action-btn-enhanced github-btn-enhanced" target="_blank" rel="noopener noreferrer">
                    <div className="btn-glow-effect"></div>
                    Backend
                  </a>
                  <a href="https://github.com/abhikrisb/NFT" className="action-btn-enhanced demo-btn-enhanced" target="_blank" rel="noopener noreferrer">
                    <div className="btn-glow-effect"></div>
                    Frontend
                  </a>
                </div>
              </div>
              <div className="project-hover-glow"></div>
            </div>

            {/* Billing System */}
           <div className="project-card-enhanced">
              <div className="project-gradient-enhanced" style={{background: 'linear-gradient(45deg, #4ade80, #3b82f6)'}}></div>
              <div className="project-content-enhanced">
                <div className="project-header-enhanced">
                  <div className="project-icon-enhanced">💳</div>
                  <h3>Billing System</h3>
                  <div className="status-badge-enhanced completed">Completed</div>
                </div>
                
                <p className="project-description-enhanced">
                  Full-stack billing solution with automated inventory tracking, 
                  payment processing, and comprehensive business intelligence dashboard.
                </p>
                
                <div className="features-grid-enhanced">
                  <div className="feature-pill-enhanced">Smart Inventory</div>
                  <div className="feature-pill-enhanced">Payment Integration</div>
                  <div className="feature-pill-enhanced">Analytics Dashboard</div>
                  <div className="feature-pill-enhanced">Mobile Responsive</div>
                </div>
                
                <div className="tech-stack-enhanced">
                  <div className="tech-badge-enhanced">Next.js</div>
                  <div className="tech-badge-enhanced">React</div>
                  <div className="tech-badge-enhanced">TypeScript</div>
                  <div className="tech-badge-enhanced">Material-UI</div>
                  <div className="tech-badge-enhanced">PostgreSQL</div>
                </div>
                
                <div className="project-actions-enhanced">
                  <a href="https://github.com/abhikrisb/billing-system" className="action-btn-enhanced github-btn-enhanced" target="_blank" rel="noopener noreferrer">
                    <div className="btn-glow-effect"></div>
                    GitHub
                  </a>
                  {/* <a href="#" className="action-btn-enhanced demo-btn-enhanced">
                    <div className="btn-glow-effect"></div>
                    Live Demo
                  </a> */}
                </div>
              </div>
              <div className="project-hover-glow"></div>
            </div>

            {/* AcadAssist */}
            <div className="project-card-enhanced">
              <div className="project-gradient-enhanced" style={{background: 'linear-gradient(45deg, #f093fb, #f5576c)'}}></div>
              <div className="project-content-enhanced">
                <div className="project-header-enhanced">
                  <div className="project-icon-enhanced">🎓</div>
                  <h3>AcadAssist</h3>
                  <div className="status-badge-enhanced portfolio">Portfolio</div>
                </div>
                
                <p className="project-description-enhanced">
                  AI-powered academic management system with smart scheduling, 
                  performance analytics, and collaborative tools for enhanced learning.
                </p>
                
                <div className="features-grid-enhanced">
                  <div className="feature-pill-enhanced">Smart Dashboard</div>
                  <div className="feature-pill-enhanced">Real-time Sync</div>
                  <div className="feature-pill-enhanced">AI Integration</div>
                  <div className="feature-pill-enhanced">Analytics</div>
                </div>
                
                <div className="tech-stack-enhanced">
                  <div className="tech-badge-enhanced">Next.js</div>
                  <div className="tech-badge-enhanced">TypeScript</div>
                  <div className="tech-badge-enhanced">Tailwind CSS</div>
                  <div className="tech-badge-enhanced">PostgreSQL</div>
                  <div className="tech-badge-enhanced">OpenAI API</div>
                </div>
                
                <div className="project-actions-enhanced">
                  <a href="https://github.com/abhikrisb/project25" className="action-btn-enhanced github-btn-enhanced" target="_blank" rel="noopener noreferrer">
                    <div className="btn-glow-effect"></div>
                    GitHub
                  </a>
                  {/* <a href="#" className="action-btn-enhanced demo-btn-enhanced">
                    <div className="btn-glow-effect"></div>
                    Live Demo
                  </a> */}
                </div>
              </div>
              <div className="project-hover-glow"></div>
            </div>

            {/* Smart Attendance */}
            <div className="project-card-enhanced">
              <div className="project-gradient-enhanced" style={{background: 'linear-gradient(45deg, #ff6b6b, #ffa726)'}}></div>
              <div className="project-content-enhanced">
                <div className="project-header-enhanced">
                  <div className="project-icon-enhanced">📸</div>
                  <h3>Smart Attendance</h3>
                  <div className="status-badge-enhanced demo">Demo</div>
                </div>
                
                <p className="project-description-enhanced">
                  Computer vision-powered attendance system with facial recognition, 
                  identity verification, and comprehensive reporting for institutions.
                </p>
                
                <div className="features-grid-enhanced">
                  <div className="feature-pill-enhanced">Face Recognition</div>
                  <div className="feature-pill-enhanced">Auto Verification</div>
                  <div className="feature-pill-enhanced">Real-time Processing</div>
                  <div className="feature-pill-enhanced">Analytics Dashboard</div>
                </div>
                
                <div className="tech-stack-enhanced">
                  <div className="tech-badge-enhanced">JavaScript</div>
                  <div className="tech-badge-enhanced">Azure Face API</div>
                  <div className="tech-badge-enhanced">Google Cloud Vision</div>
                  <div className="tech-badge-enhanced">Node.js</div>
                  <div className="tech-badge-enhanced">MongoDB</div>
                </div>
                
                <div className="project-actions-enhanced">
                  <a href="https://github.com/abhikrisb/SRM" className="action-btn-enhanced github-btn-enhanced" target="_blank" rel="noopener noreferrer">
                    <div className="btn-glow-effect"></div>
                    GitHub
                  </a>
                  {/* <a href="#" className="action-btn-enhanced demo-btn-enhanced">
                    <div className="btn-glow-effect"></div>
                    Live Demo
                  </a> */}
                </div>
              </div>
              <div className="project-hover-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="section-enhanced contact-section-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <h2 className="section-title-enhanced">
              <span className="section-icon-enhanced">📬</span>
              <span className="title-text">Get In Touch</span>
              <div className="title-underline-enhanced"></div>
            </h2>
            <p className="section-subtitle-enhanced">
              Let's collaborate on your next innovative project
            </p>
          </div>

          <div className="contact-content-enhanced">
            <div className="contact-info-grid-enhanced">
              <div className="contact-card-enhanced">
                <div className="contact-icon-enhanced">📧</div>
                <h4>Email Me</h4>
                <p>Ready to discuss your project? Drop me a message and I'll get back to you soon.</p>
                <a href="mailto:abhishekkrishna276@gmail.com" className="contact-btn-enhanced">
                  <div className="contact-btn-glow"></div>
                  Send Email
                </a>
                <div className="status-indicator-contact-enhanced">
                  <div className="status-dot-enhanced live"></div>
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="contact-hover-effect-enhanced"></div>
              </div>

              <div className="contact-card-enhanced">
                <div className="contact-icon-enhanced">💼</div>
                <h4>LinkedIn</h4>
                <p>Connect with me professionally and see my latest projects and career updates.</p>
                <a href="https://linkedin.com/in/abhishekkrishna1" className="contact-btn-enhanced" target="_blank" rel="noopener noreferrer">
                  <div className="contact-btn-glow"></div>
                  Connect
                </a>
                <div className="status-indicator-contact-enhanced">
                  <div className="status-dot-enhanced live"></div>
                  <span>Active daily</span>
                </div>
                <div className="contact-hover-effect-enhanced"></div>
              </div>

              <div className="contact-card-enhanced">
                <div className="contact-icon-enhanced">🐙</div>
                <h4>GitHub</h4>
                <p>Explore my code, contribute to projects, or collaborate on open-source initiatives.</p>
                <a href="https://github.com/abhikrisb" className="contact-btn-enhanced" target="_blank" rel="noopener noreferrer">
                  <div className="contact-btn-glow"></div>
                  View Profile
                </a>
                <div className="status-indicator-contact-enhanced">
                  <div className="status-dot-enhanced live"></div>
                  <span>Contributing regularly</span>
                </div>
                <div className="contact-hover-effect-enhanced"></div>
              </div>
            </div>

            <div className="contact-cta-enhanced">
              <h3>Ready to Build Something Innovative?</h3>
              <p>
                I'm always excited about new opportunities, challenging projects, 
                and collaborations that push the boundaries of technology.
              </p>
              <div className="contact-actions-enhanced">
                <a href="mailto:abhishekkrishna276@gmail.com" className="btn-primary-enhanced">
                  <span className="btn-sparkle-enhanced"></span>
                  Start a Project
                </a>
                <a href="/resume.pdf" className="btn-secondary-enhanced" download>
                  <span className="btn-border-glow"></span>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer-enhanced">
        <div className="footer-animation-enhanced">
          <div className="floating-element">🦀</div>
          <div className="floating-element">⚛️</div>
          <div className="floating-element">💻</div>
          <div className="floating-element">🚀</div>
          <div className="floating-element">⭐</div>
        </div>
        
        <div className="footer-content-enhanced">
          <div className="footer-text-enhanced">
            © 2024 Abhishek Krishna. Built with passion and lots of Rust 🦀
          </div>
          <div className="footer-links-enhanced">
            <a href="#home" className="footer-link-enhanced" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className="footer-link-enhanced" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" className="footer-link-enhanced" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" className="footer-link-enhanced" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;