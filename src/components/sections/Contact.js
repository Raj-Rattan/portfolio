import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiSend, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiTwitter, FiAlertCircle, FiPhone, FiMap } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    
    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'singhaniaraj238@gmail.com',
      href: 'mailto:singhaniaraj238@gmail.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+91 7011964217',
      href: 'tel:+917011964217'
    },
    {
      icon: <FiMap />,
      label: 'Location',
      value: 'New Delhi, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/Raj-Rattan',
      label: 'GitHub',
      color: '#f34f29'
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/raj-ratan-b9423232b/',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: <FiTwitter />,
      href: 'https://x.com/rajratt95392337',
      label: 'X',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary to-transparent"></div>
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hello,
            feel free to reach out! I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-bold text-light"
            >
              Contact Information
            </motion.h3>
            
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 rounded-full bg-secondary-opaque/10 text-secondary mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-tertiary text-sm font-mono mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-light hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-light">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Social Media */}
            <motion.div variants={itemVariants} className="mt-10">
              <h4 className="text-xl font-bold text-light mb-4">Find me on</h4>
              <div className="flex space-x-6 pt-2">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 rounded-full bg-primary-opaque/50 text-tertiary relative group"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(10, 25, 47, 0.8)", 
                      color: link.color,
                      boxShadow: `0 0 16px rgba(${link.color}, 0.3)` 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <motion.span 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {link.label}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Availability Notice */}
            <motion.div 
              variants={itemVariants} 
              className="glass-effect p-6 rounded-lg border border-secondary border-opacity-20 mt-8"
            >
              <h4 className="text-secondary font-bold mb-2">Available for Opportunities</h4>
              <p className="text-tertiary">
                I'm currently available for freelance projects, full-time positions, 
                and collaborative opportunities. Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div ref={formRef}>
            <motion.div 
              className="glass-effect p-6 sm:p-8 rounded-xl shadow-xl border border-tertiary border-opacity-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-light mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center text-tertiary mb-2 text-sm">
                    <FiUser className="mr-2" /> 
                    <span>Your Name</span>
                    {errors.name && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 ml-2 flex items-center"
                      >
                        <FiAlertCircle className="mr-1" /> {errors.name}
                      </motion.span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-primary-opaque/30 border ${
                        errors.name ? 'border-red-500' : 'border-tertiary border-opacity-30 focus:border-secondary'
                      } rounded-lg p-3 text-light outline-none transition-colors`}
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex items-center text-tertiary mb-2 text-sm">
                    <FiMail className="mr-2" /> 
                    <span>Your Email</span>
                    {errors.email && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 ml-2 flex items-center"
                      >
                        <FiAlertCircle className="mr-1" /> {errors.email}
                      </motion.span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className={`w-full bg-primary-opaque/30 border ${
                        errors.email ? 'border-red-500' : 'border-tertiary border-opacity-30 focus:border-secondary'
                      } rounded-lg p-3 text-light outline-none transition-colors`}
                    />
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="flex items-center text-tertiary mb-2 text-sm">
                    <FiMessageSquare className="mr-2" /> 
                    <span>Subject</span>
                    {errors.subject && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 ml-2 flex items-center"
                      >
                        <FiAlertCircle className="mr-1" /> {errors.subject}
                      </motion.span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className={`w-full bg-primary-opaque/30 border ${
                        errors.subject ? 'border-red-500' : 'border-tertiary border-opacity-30 focus:border-secondary'
                      } rounded-lg p-3 text-light outline-none transition-colors`}
                    />
                  </div>
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex items-center text-tertiary mb-2 text-sm">
                    <FiMessageSquare className="mr-2" /> 
                    <span>Your Message</span>
                    {errors.message && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 ml-2 flex items-center"
                      >
                        <FiAlertCircle className="mr-1" /> {errors.message}
                      </motion.span>
                    )}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      rows="5"
                      className={`w-full bg-primary-opaque/30 border ${
                        errors.message ? 'border-red-500' : 'border-tertiary border-opacity-30 focus:border-secondary'
                      } rounded-lg p-3 text-light outline-none transition-colors`}
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-6 py-3 w-full sm:w-auto flex items-center justify-center mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </button>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500 border-opacity-30 text-green-400 p-4 rounded-lg flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 