import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiDownload } from 'react-icons/fi';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    // GSAP animation for the background
    gsap.to('.animated-bg', {
      duration: 15,
      backgroundPosition: '100% 100%',
      ease: 'none',
      repeat: -1,
      yoyo: true
    });
    
    // Animate the hero particles
    gsap.to('.hero-particle', {
      y: '-=30',
      opacity: 0.2,
      duration: 3,
      ease: 'power1.inOut',
      stagger: 0.4,
      repeat: -1,
      yoyo: true
    });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Create an array of particles for the background
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 10 + 2;
    return {
      id: i,
      size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2
    };
  });

  // Social links with enhanced animations
  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: 'https://github.com/Raj-Rattan', 
      label: 'GitHub',
      hoverColor: '#f34f29'
    },
    { 
      icon: <FiLinkedin />, 
      url: 'https://www.linkedin.com/in/raj-ratan-b9423232b/', 
      label: 'LinkedIn',
      hoverColor: '#0077B5'
    },
    { 
      icon: <FiTwitter />, 
      url: 'https://x.com/rajratt95392337', 
      label: 'X',
      hoverColor: '#1DA1F2'
    },
    { 
      icon: <FiMail />, 
      url: 'mailto:singhaniaraj238@gmail.com', 
      label: 'Email',
      hoverColor: '#64ffda'
    },
    { 
      icon: <FiDownload />, 
      url: '/resume.pdf', 
      label: 'Resume',
      hoverColor: '#ff6b6b'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="animated-bg absolute inset-0 opacity-20 bg-gradient-to-br from-secondary/10 to-tertiary/10 bg-[length:200%_200%] bg-[0%_0%]"></div>
      
      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="hero-particle absolute rounded-full bg-secondary opacity-10"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-6"
          >
            <motion.div variants={itemVariants} className="font-mono text-secondary">
              Hi, my name is
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light">
              Raj Rattan.
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tertiary">
              I build things for the web & beyond.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="max-w-2xl text-tertiary text-base sm:text-lg mt-5">
              I'm a Full-Stack Developer & AI Enthusiast based in New Delhi. With expertise in web development, 
              machine learning, and competitive programming, I create accessible, human-centered digital experiences 
              that solve real-world problems.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-5 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary px-5 py-3 text-center">
                <span className="flex items-center justify-center">
                  View My Work
                </span>
              </a>
              <a href="#contact" className="btn-secondary text-center">
                <span className="flex items-center justify-center">
                  Contact Me
                </span>
              </a>
            </motion.div>
            
            {/* Social Links - Enhanced */}
            <motion.div variants={itemVariants} className="flex space-x-6 pt-6">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-tertiary transition-all duration-300 text-xl relative group"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    color: link.hoverColor 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <motion.span 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          
          <motion.div 
            className="hidden lg:flex lg:col-span-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary bg-opacity-10 rounded-full blur-3xl"></div>
              <div className="glass-effect p-8 rounded-2xl relative z-10 border border-secondary border-opacity-20">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-secondary border-opacity-20 shadow-xl">
                  {/* Replace with your profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-tertiary to-secondary opacity-60 flex items-center justify-center">
                    <span className="text-light text-6xl font-bold">RR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator with improved animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-tertiary font-mono text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-0.5 h-6 bg-secondary bg-opacity-50"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 