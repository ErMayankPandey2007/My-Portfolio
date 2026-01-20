import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import  pic from './assets/images/mayank.jpeg'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaCode, FaAward, FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiDjango, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiMysql } from 'react-icons/si';

// Robotic Grid Background
const RoboticGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

// Robotic Particles
const RoboticParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute border border-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Robotic Circuit Lines
const CircuitLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full">
        <motion.path
          d="M0,100 Q200,50 400,100 T800,100"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M100,0 Q150,200 200,400 T300,800"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.path
          d="M800,200 Q600,250 400,200 T0,200"
          stroke="rgba(236, 72, 153, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>
    </div>
  );
};

// Robotic Background
const RoboticBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'React.js', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-700' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
    { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-600' },
    { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-600' },
  ];

  const projects = [
    {
      title: 'NGO Pandey Foundation',
      description: 'Responsive NGO website with donation and contact dashboard',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://lively-truffle-e3ed0cpandeyfoundation.netlify.app',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Spotify Clone',
      description: 'Music player interface replicating Spotify UI',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://spotify-jun-447.netlify.app',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Assistant (Jarvis)',
      description: 'Voice-based AI assistant capable of executing commands',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://jarvis-ai-assistance-447.netlify.app',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Age Calculator & Digital Clock',
      description: 'Interactive JS-based applications for real-time use',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://calculat-you-rage.netlify.app',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const experience = [
    {
      title: 'MERN Stack Apprenticeship',
      company: 'DigiCoders Technologies Pvt. Ltd.',
      status: 'Ongoing',
      icon: <FaBriefcase />
    },
    {
      title: 'Python with Django Training',
      company: 'DigiCoders Technologies Pvt. Ltd., Lucknow',
      status: '45 Days',
      icon: <FaPython />
    },
    {
      title: 'Industrial Visit',
      company: 'Techpile Technologies Pvt. Ltd., Lucknow',
      status: 'Completed',
      icon: <FaBriefcase />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <RoboticBackground />
      <RoboticGrid />
      <RoboticParticles />
      <CircuitLines />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-cyan-500/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mayank Pandey
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-cyan-400' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }} 
              className="md:hidden p-2 hover:text-cyan-400 transition-colors relative z-10 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-cyan-500/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200 font-mono cursor-pointer ${
                    activeSection === item.id ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30' : 'text-white'
                  }`}
                >
                  &gt; {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{ y }}
        >
          <motion.div 
            className="mb-6 mt-10 sm:mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div 
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 p-1"
              animate={{ 
                rotateY: [0, 180, 360],
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.5)",
                  "0 0 40px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl sm:text-6xl font-bold font-mono overflow-hidden">
                <img src={pic} alt="Mayank Pandey" className='rounded-full w-full h-full object-cover'/>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent font-mono leading-tight px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Er.MAYANK PANDEY
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-2xl md:text-3xl text-cyan-300 mb-6 h-8 sm:h-10 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {typedText}<motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >|</motion.span>
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-mono px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="block">&gt; Initializing full-stack developer protocols...</span>
            <span className="block">&gt; MERN.stack && Django.framework = true</span>
            <span className="block">&gt; Status: Ready for deployment</span>
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: <FaGithub className="text-2xl sm:text-3xl" />, href: "https://github.com/ErMayankPandey2007" },
              { icon: <FaLinkedin className="text-2xl sm:text-3xl" />, href: "https://linkedin.com/in/mayank-pandey-2007-june" },
              { icon: <FaEnvelope className="text-2xl sm:text-3xl" />, href: "mailto:mp04042007@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 border border-cyan-500/30 p-2 sm:p-3 rounded-lg"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-12 sm:py-20 px-4 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &lt;ABOUT_ME/&gt;
          </motion.h2>
          <motion.div 
            className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-8 font-mono space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>&gt; Passionate Full Stack Developer with expertise in modern web technologies.</p>
            <p>&gt; Currently pursuing Diploma in Computer Science.</p>
            <p>&gt; Specialized in MERN Stack, Django, and Python development.</p>
            <p>&gt; Driven by curiosity and constant desire to learn and innovate.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-12 sm:py-20 px-4 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &lt;TECHNICAL_SKILLS/&gt;
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-lg rounded-lg p-3 sm:p-6 border border-cyan-500/30 hover:border-cyan-500 text-center"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)" 
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`text-3xl sm:text-5xl mb-2 sm:mb-4 ${skill.color}`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-sm sm:text-lg font-semibold font-mono">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="py-12 sm:py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            &lt;PROJECTS/&gt;
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="bg-cyan-500/20 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border border-cyan-500/30 font-mono"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm sm:text-base"
                    whileHover={{ x: 10 }}
                  >
                    &gt; View Project <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-12 sm:py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            &lt;CONNECT/&gt;
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 font-mono px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            &gt; Ready to collaborate on innovative projects
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:mp04042007@gmail.com"
              className="bg-gradient-to-r from-cyan-500 to-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold font-mono border border-cyan-500/50 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              &gt; INITIALIZE_CONTACT
            </motion.a>
            <motion.a
              href="https://github.com/ErMayankPandey2007"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border border-cyan-500/50 hover:bg-black/70 font-mono text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              &gt; ACCESS_GITHUB
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('home')}
              className="bg-black/50 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border border-cyan-500/50 hover:bg-black/70 font-mono text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              &gt; BACK_TO_TOP
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-6 sm:py-8 text-center border-t border-cyan-500/30 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 font-mono text-sm sm:text-base">
          &copy; 2024 Mayank.Pandey | Built with React.js && Framer-Motion
        </p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;