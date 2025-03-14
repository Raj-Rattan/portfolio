import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiChevronRight, FiChevronLeft, FiCode } from 'react-icons/fi';

const Projects = () => {
  // Add state for projects filter
  const [filter, setFilter] = useState('all');
  const [currentHover, setCurrentHover] = useState(null);
  const featuredProjectsRef = useRef(null);
  const otherProjectsRef = useRef(null);
  const isFeaturedInView = useInView(featuredProjectsRef, { once: true, amount: 0.2 });
  const isOtherInView = useInView(otherProjectsRef, { once: true, amount: 0.2 });

  // Featured projects data
  const featuredProjects = [
    {
      title: "On4All – E-commerce Website",
      description: "A full-featured e-commerce platform with product catalog, user authentication, shopping cart, payment integration, and order management.",
      image: "https://via.placeholder.com/600x340?text=E-commerce+Website", // Placeholder until actual image is added
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      github: "https://github.com/yourusername/on4all",
      demo: "https://on4all-demo.netlify.app",
      category: "web",
      features: [
        "User authentication with JWT",
        "Product search and filtering",
        "Shopping cart functionality",
        "Secure payment processing",
        "Responsive design for all devices"
      ]
    },
    {
      title: "Apple Website Clone",
      description: "A pixel-perfect clone of Apple's website with modern animations, interactive UI components, and responsive design mimicking Apple's design language.",
      image: "https://via.placeholder.com/600x340?text=Apple+Website+Clone", // Placeholder until actual image is added
      tags: ["React.js", "GSAP", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/apple-clone",
      demo: "https://apple-clone-demo.netlify.app",
      category: "web",
      features: [
        "Smooth page transitions and animations",
        "3D product showcases with Three.js",
        "Responsive navigation system",
        "Performant image loading strategies",
        "Custom CSS effects mimicking Apple's site"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "An LSTM neural network model for detecting fraudulent credit card transactions, achieving high accuracy while maintaining low false positives.",
      image: "https://via.placeholder.com/600x340?text=Fraud+Detection", // Placeholder until actual image is added
      tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "LSTM", "Data Visualization"],
      github: "https://github.com/yourusername/fraud-detection",
      demo: "https://colab.research.google.com/github/yourusername/fraud-detection/blob/main/demo.ipynb",
      category: "ai",
      features: [
        "AUC-ROC score of 0.97",
        "Feature engineering for imbalanced dataset",
        "Real-time transaction analysis",
        "Interactive visualizations of model performance",
        "Comprehensive data preprocessing pipeline"
      ]
    }
  ];

  // Other notable projects
  const otherProjects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.netlify.app",
      category: "web"
    },
    {
      title: "URL Shortener",
      description: "A full stack application that allows users to shorten long URLs with analytics for click tracking.",
      tags: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      github: "https://github.com/yourusername/url-shortener",
      demo: "https://shrtnr.herokuapp.com",
      category: "web"
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with 7-day forecast, using OpenWeatherMap API and geolocation.",
      tags: ["React", "OpenWeatherMap API", "Geolocation", "PWA"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-app-demo.netlify.app",
      category: "web"
    },
    {
      title: "Task Manager CLI",
      description: "A command-line task manager application with CRUD operations and data persistence using Node.js.",
      tags: ["Node.js", "Commander.js", "Inquirer", "File System"],
      github: "https://github.com/yourusername/task-cli",
      demo: "https://www.npmjs.com/package/task-cli-manager",
      category: "tools"
    },
    {
      title: "Image Classification Model",
      description: "A convolutional neural network for classifying images of common objects with high accuracy.",
      tags: ["Python", "TensorFlow", "CNN", "Image Processing"],
      github: "https://github.com/yourusername/image-classifier",
      demo: "https://huggingface.co/spaces/yourusername/image-classifier",
      category: "ai"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private and group messaging, using Socket.io and React.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yourusername/chat-app",
      demo: "https://chat-app-demo.herokuapp.com",
      category: "web"
    }
  ];

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'tools', label: 'Tools & Utilities' }
  ];

  // Filtered other projects
  const filteredOtherProjects = otherProjects.filter(
    project => filter === 'all' || project.category === filter
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background effect with gradient mesh */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-primary to-transparent"></div>
      
      {/* Animated accent shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-tertiary/5 blur-3xl"></div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            A curated collection of projects that showcase my skills and passion for building 
            functional, beautiful, and user-friendly applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div ref={featuredProjectsRef} className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={isFeaturedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-light mb-12 flex items-center"
          >
            <span className="text-secondary mr-2">&lt;</span>
            Featured Projects
            <span className="text-secondary ml-2">/&gt;</span>
          </motion.h3>
          
          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isFeaturedInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 relative"
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div 
                    className="relative overflow-hidden rounded-lg shadow-xl group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={project.image || "https://via.placeholder.com/600x340"}
                      alt={project.title}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-opaque/70 backdrop-blur-sm group-hover:bg-transparent transition-all duration-500"></div>
                    
                    {/* Overlay links that appear on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-6">
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary-opaque/90 text-secondary p-4 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
                          aria-label={`GitHub repository for ${project.title}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="text-xl" />
                        </motion.a>
                        <motion.a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary-opaque/90 text-secondary p-4 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
                          aria-label={`Live demo for ${project.title}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="text-xl" />
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Technology badge */}
                    <div className="absolute top-4 right-4 bg-primary-opaque/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-mono">
                      {project.category === 'web' ? 'Web Development' : 
                       project.category === 'ai' ? 'AI & ML' : 'Tools & Utilities'}
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'} flex flex-col justify-center`}>
                  <div className="space-y-4">
                    <p className="font-mono text-secondary text-sm tracking-wider">Featured Project</p>
                    <h3 className="text-xl sm:text-3xl font-bold text-light hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <motion.div 
                      className="glass-effect p-5 sm:p-6 rounded-lg shadow-xl border border-tertiary/10"
                      whileHover={{ boxShadow: "0 15px 30px -10px rgba(100, 255, 218, 0.1)" }}
                    >
                      <p className="text-tertiary">{project.description}</p>
                    </motion.div>
                    
                    <ul className={`flex flex-col gap-2 mt-2 ${index % 2 === 1 ? 'md:items-end' : 'md:items-start'}`}>
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-tertiary text-sm flex items-center gap-2"
                          whileHover={{ x: index % 2 === 1 ? -5 : 5, color: "#64ffda" }}
                        >
                          <span className="text-secondary">▹</span> {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex} 
                          className="text-xs font-mono bg-secondary-opaque/10 text-secondary px-3 py-1 rounded-full"
                          whileHover={{ y: -3, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project Number */}
                <div className="absolute -left-10 top-0 text-8xl font-bold text-secondary opacity-10 hidden lg:block">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Noteworthy Projects */}
        <div ref={otherProjectsRef}>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isOtherInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-light mb-4 sm:mb-0 flex items-center"
            >
              <span className="text-secondary mr-2">&lt;</span>
              Other Noteworthy Projects
              <span className="text-secondary ml-2">/&gt;</span>
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isOtherInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 text-sm rounded-full font-mono transition-all duration-300 ${
                    filter === option.value
                      ? 'bg-secondary text-primary shadow-lg shadow-secondary/20'
                      : 'bg-primary-opaque/30 text-tertiary hover:text-secondary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate={isOtherInView ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredOtherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card h-full"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px -10px rgba(136, 146, 176, 0.2)" }}
                  onHoverStart={() => setCurrentHover(index)}
                  onHoverEnd={() => setCurrentHover(null)}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-secondary/10 text-secondary"
                        animate={{ 
                          rotate: currentHover === index ? [0, 15, 0] : 0,
                          scale: currentHover === index ? [1, 1.2, 1] : 1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <FiCode className="text-xl" />
                      </motion.div>
                      <div className="flex gap-4 text-tertiary">
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-secondary transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub />
                        </motion.a>
                        <motion.a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-secondary transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink />
                        </motion.a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-light mb-3 hover:text-secondary transition-colors">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        {project.title}
                      </a>
                    </h3>
                    
                    <p className="text-tertiary mb-5 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex} 
                          className="text-xs font-mono text-tertiary bg-tertiary bg-opacity-5 px-2 py-1 rounded"
                          whileHover={{ 
                            y: -2, 
                            color: "#64ffda", 
                            backgroundColor: "rgba(100, 255, 218, 0.1)" 
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects; 