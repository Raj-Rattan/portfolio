import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiChevronUp, FiHeart, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: 'https://github.com/Raj-Rattan', 
      name: 'GitHub',
      color: '#f34f29' 
    },
    { 
      icon: <FiLinkedin />, 
      url: 'https://www.linkedin.com/in/raj-ratan-b9423232b/', 
      name: 'LinkedIn',
      color: '#0077B5' 
    },
    { 
      icon: <FiTwitter />, 
      url: 'https://x.com/rajratt95392337', 
      name: 'X',
      color: '#1DA1F2' 
    },
    { 
      icon: <FiMail />, 
      url: 'mailto:singhaniaraj238@gmail.com', 
      name: 'Email',
      color: '#64ffda' 
    },
  ];

  const contactDetails = [
    { 
      icon: <FiMail />, 
      text: 'singhaniaraj238@gmail.com', 
      url: 'mailto:singhaniaraj238@gmail.com' 
    },
    { 
      icon: <FiPhone />, 
      text: '+91 7011964217', 
      url: 'tel:+917011964217' 
    },
    { 
      icon: <FiMapPin />, 
      text: 'New Delhi, India', 
      url: null 
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary relative">
      {/* Back to top button */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-5">
        <motion.button
          onClick={scrollToTop}
          className="bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary hover:bg-opacity-90 transition-colors duration-300"
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(100, 255, 218, 0.5)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FiChevronUp className="text-lg" />
        </motion.button>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-primary-opaque transform -skew-y-2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-tertiary border-opacity-10">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-light">Raj Rattan</h3>
            <p className="text-tertiary text-sm">
              Building innovative web experiences with a focus on performance, accessibility, and beautiful design.
            </p>
            
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-tertiary transition-all duration-300 text-xl relative group"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    color: link.color 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{link.icon}</span>
                  <motion.span 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {link.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#home" 
                  className="text-tertiary hover:text-secondary transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="text-tertiary hover:text-secondary transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#projects" 
                  className="text-tertiary hover:text-secondary transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#experience" 
                  className="text-tertiary hover:text-secondary transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  Experience
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="text-tertiary hover:text-secondary transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-light">Contact</h3>
            <ul className="space-y-3">
              {contactDetails.map((item, index) => (
                <li key={index} className="flex items-center text-tertiary group">
                  <motion.span 
                    className="text-secondary mr-2"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.url ? (
                    <a 
                      href={item.url} 
                      className="hover:text-secondary transition-colors group-hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 text-tertiary text-sm flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0">© {currentYear} Raj Rattan. All Rights Reserved.</p>
          <p className="flex items-center">
            <span>Designed & Built with</span>
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#64ffda', '#ff64a8', '#64ffda']
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="mx-1 text-secondary"
            >
              <FiHeart />
            </motion.span>
            <span>by Raj Rattan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 