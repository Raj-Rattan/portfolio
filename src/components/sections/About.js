import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Skills data
  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"],
    "Frameworks": ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    "Tools": ["Git", "GitHub", "VS Code", "Figma"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "LSTM", "CNN"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="relative py-20 bg-primary/70">
      <div className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* About Me Text */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center">
              <h2 className="text-3xl font-bold text-light">About Me</h2>
              <div className="h-px bg-secondary/30 w-32 ml-4"></div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 text-tertiary">
              <p>
                Hello! I'm Raj, a passionate full-stack developer and AI enthusiast with a strong 
                foundation in computer science concepts and competitive programming.
              </p>
              <p>
                My journey in technology began with my education in Computer Science, where I developed 
                a strong foundation in algorithms and data structures. This background has been invaluable 
                in my work as both a developer and in competitive programming.
              </p>
              <p>
                I've worked on various projects ranging from e-commerce platforms to machine learning models for 
                fraud detection. My experience as a Tech and Robotics Associate Intern at Rancho Labs (IIT Delhi) 
                and as Head of Aerodynamics at Bullet Hawk Racing has given me a diverse skill set in both 
                software development and engineering design.
              </p>
              <p>
                When I'm not coding, you can find me participating in coding competitions, exploring new 
                technologies, or working on personal projects to expand my skills.
              </p>
            </motion.div>
          </div>
          
          {/* Skills */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center">
              <h2 className="text-3xl font-bold text-light">Skills & Technologies</h2>
              <div className="h-px bg-secondary/30 w-32 ml-4"></div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <div key={categoryIndex} className="space-y-2">
                  <h3 className="text-secondary font-mono font-medium">{category}</h3>
                  <ul className="space-y-1 text-tertiary">
                    {skillList.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="text-secondary mr-2">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
            
            {/* Education */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-bold text-light mb-3">Education</h3>
              <div className="space-y-2 text-tertiary">
                <p>
                  <span className="text-secondary">B.Tech in Computer Science</span>
                  <br />
                  <span className="font-medium">Your University</span> • 2020 - 2024
                </p>
                <p>
                  <span className="text-secondary">NPTEL Certifications</span>
                  <br />
                  Science & Technology, Business Model, E-Business
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 