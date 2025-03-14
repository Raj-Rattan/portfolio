import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCode, FiAward, FiBookmark } from 'react-icons/fi';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Work experience data
  const experiences = [
    {
      company: "Rancho Labs (IIT Delhi)",
      position: "Tech and Robotics Associate Intern",
      duration: "Summer 2022",
      url: "https://rancholabs.com",
      responsibilities: [
        "Developed interactive web applications for educational technology platforms, improving student engagement by 40%",
        "Implemented responsive UI components using React.js and Tailwind CSS for optimal user experience across devices",
        "Collaborated with cross-functional teams to design and build learning modules for STEM education",
        "Conducted code reviews and provided technical mentorship to junior team members"
      ]
    },
    {
      company: "Bullet Hawk Racing (NSUT)",
      position: "Head of Aerodynamics",
      duration: "2023",
      url: "https://bullethawkracing.com",
      responsibilities: [
        "Led the aerodynamics division for Formula Bharat 2023, overseeing a team of 5 engineers",
        "Designed and implemented computational fluid dynamics (CFD) models for race car components",
        "Optimized front and rear wing designs resulting in 15% improved downforce",
        "Collaborated with chassis and powertrain teams to ensure integrated vehicle performance",
        "Presented technical reports and design justifications to competition judges"
      ]
    },
    {
      company: "Freelance Web Developer",
      position: "Full Stack Developer",
      duration: "2021 - Present",
      url: "#",
      responsibilities: [
        "Built and deployed custom websites and web applications for small businesses and startups",
        "Implemented responsive designs and interactive UIs using modern JavaScript frameworks",
        "Developed back-end systems with Node.js, Express, and various databases",
        "Optimized website performance and SEO, achieving significant improvements in page load times",
        "Collaborated directly with clients to translate business requirements into technical solutions"
      ]
    }
  ];

  // Competitive programming data
  const competitiveProgramming = {
    platforms: [
      {
        name: "CodeChef",
        rating: "4★ (1846)",
        achievements: ["Ranked in top 5% of CodeChef users", "Solved 300+ problems"],
        url: "https://www.codechef.com/users/yourusername"
      },
      {
        name: "LeetCode",
        rating: "2089",
        achievements: ["Solved 500+ problems", "Top 2% in weekly contests"],
        url: "https://leetcode.com/yourusername/"
      },
      {
        name: "Codeforces",
        rating: "Specialist (1467)",
        achievements: ["Participated in 40+ contests", "Solved 350+ problems"],
        url: "https://codeforces.com/profile/yourusername"
      },
      {
        name: "HackerRank",
        rating: "5★ in Problem Solving",
        achievements: ["Gold badge in Problem Solving", "Silver badge in Algorithms"],
        url: "https://www.hackerrank.com/yourusername"
      }
    ],
    competitions: [
      "Qualified for ACM ICPC Regionals 2022",
      "Top 100 in Google Kickstart Round B 2023",
      "Finalist in ABC Coding Championship 2022",
      "3rd place in University Coding Marathon 2023"
    ]
  };

  // Certifications
  const certifications = [
    {
      name: "NPTEL: Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      date: "2022",
      url: "#"
    },
    {
      name: "NPTEL: Business Models and Planning",
      issuer: "NPTEL",
      date: "2022",
      url: "#"
    },
    {
      name: "NPTEL: E-Business",
      issuer: "NPTEL",
      date: "2023",
      url: "#"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2022",
      url: "#"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="experience" className="py-20 bg-primary/80">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light">Experience</h2>
          <div className="h-px bg-secondary/30 w-32 ml-4"></div>
        </motion.div>

        {/* Tabs for different experience categories */}
        <div className="mb-10">
          <div className="flex border-b border-tertiary/20 mb-8 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab(0)}
              className={`py-2 px-4 font-mono text-sm transition-colors ${
                activeTab === 0 ? 'text-secondary border-b-2 border-secondary' : 'text-tertiary'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`py-2 px-4 font-mono text-sm transition-colors ${
                activeTab === 1 ? 'text-secondary border-b-2 border-secondary' : 'text-tertiary'
              }`}
            >
              Competitive Programming
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`py-2 px-4 font-mono text-sm transition-colors ${
                activeTab === 2 ? 'text-secondary border-b-2 border-secondary' : 'text-tertiary'
              }`}
            >
              Certifications
            </button>
          </div>

          {/* Work Experience Tab */}
          <div className={activeTab === 0 ? 'block' : 'hidden'}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-12"
            >
              {experiences.map((experience, index) => (
                <motion.div key={index} variants={itemVariants} className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-light">{experience.position}</h3>
                      <div className="flex items-center text-secondary font-mono">
                        <a href={experience.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {experience.company}
                        </a>
                        <FiExternalLink className="ml-1 text-sm" />
                      </div>
                      <p className="text-tertiary text-sm font-mono">{experience.duration}</p>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="space-y-2 text-tertiary">
                      {experience.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex">
                          <span className="text-secondary mr-2 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Competitive Programming Tab */}
          <div className={activeTab === 1 ? 'block' : 'hidden'}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Platforms */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-xl font-bold text-light flex items-center">
                    <FiCode className="mr-2 text-secondary" /> Platforms
                  </h3>
                  <div className="space-y-6">
                    {competitiveProgramming.platforms.map((platform, index) => (
                      <div key={index} className="space-y-2 p-4 border border-tertiary/20 rounded-lg hover:border-secondary/50 transition-colors">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-light">{platform.name}</h4>
                          <a 
                            href={platform.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline flex items-center"
                          >
                            <span className="text-sm">Profile</span>
                            <FiExternalLink className="ml-1 text-xs" />
                          </a>
                        </div>
                        <p className="text-secondary font-mono text-sm">{platform.rating}</p>
                        <ul className="text-tertiary text-sm">
                          {platform.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex">
                              <span className="text-secondary mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Competitions */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-light flex items-center mb-6">
                    <FiAward className="mr-2 text-secondary" /> Competitions
                  </h3>
                  <div className="space-y-4 text-tertiary">
                    {competitiveProgramming.competitions.map((competition, index) => (
                      <div key={index} className="flex items-center p-4 border border-tertiary/20 rounded-lg">
                        <span className="text-secondary mr-3 text-xl">🏆</span>
                        <span>{competition}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Tab */}
          <div className={activeTab === 2 ? 'block' : 'hidden'}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="p-4 border border-tertiary/20 rounded-lg flex items-start hover:border-secondary/50 transition-colors"
                >
                  <FiBookmark className="text-secondary text-xl mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-light font-medium">{cert.name}</h4>
                    <p className="text-tertiary text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary text-sm hover:underline inline-flex items-center mt-1"
                      >
                        <span>View Certificate</span>
                        <FiExternalLink className="ml-1 text-xs" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 