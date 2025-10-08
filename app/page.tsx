"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Github, Twitter, Moon, Sun, Mail, Linkedin, ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "BetterLetter AI",
      year: "2025",
      description: "AI-powered leave letter generator with Sonar Pro (Perplexity API) for smart generation, solving the handwriting problem for students.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "PDFKit"],
      website: "#",
      source: "https://github.com/Vinodbiradar09/betterletter-ai"
    },
    {
      title: "Contra AI",
      year: "2025",
      description: "Full-stack AI text transformation platform with four modes: Humanize, Refine, Concise, and Academics.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Sonar Pro"],
      website: "#",
      source: "https://github.com/Vinodbiradar09/contra-ai"
    },
    {
      title: "SOEN Chat App",
      year: "2024",
      description: "Real-time chat platform with AI agents (Gemini/GPT) for chat and code assistance using Socket.IO.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"],
      website: "#",
      source: "https://github.com/Vinodbiradar09/soen"
    }
  ];

  const skills = [
    "React", "Next.js", "JavaScript" , "TypeScript", "Node.js", "Express.js", "C++", 
    "Solidity", "Rust", "PostgreSQL", "MongoDB", "Docker", "AWS" 
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} transition-colors duration-500 relative overflow-hidden`}>
      {/* Grid Background - Applied to entire page */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(80,80,80,0.15)' : 'rgba(200,200,200,0.3)'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? 'rgba(80,80,80,0.15)' : 'rgba(200,200,200,0.3)'} 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`flex items-center gap-1 px-4 py-3 rounded-full backdrop-blur-xl ${
          theme === 'dark' 
            ? 'bg-zinc-900/90 border border-zinc-800 shadow-2xl shadow-gray-900/50' 
            : 'bg-white/90 border border-gray-200 shadow-2xl shadow-gray-400/30'
        }`}>
          <NavButton 
            icon={<Home size={20} />} 
            onClick={() => scrollToSection('home')}
            active={activeSection === 'home'}
            theme={theme}
            label="Home"
          />
          <NavButton 
            icon={<BookOpen size={20} />} 
            onClick={() => window.location.href = '/blog'}
            theme={theme}
            label="Blog"
          />
          <div className={`w-px h-8 mx-1 ${theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-300'}`} />
          <NavButton 
            icon={<Twitter size={20} />} 
            onClick={() => window.open('https://x.com/toovinod09', '_blank')}
            theme={theme}
            label="X"
          />
          <NavButton 
            icon={<Github size={20} />} 
            onClick={() => window.open('https://github.com/Vinodbiradar09', '_blank')}
            theme={theme}
            label="GitHub"
          />
          <div className={`w-px h-8 mx-1 ${theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-300'}`} />
          <NavButton 
            icon={theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            theme={theme}
            label={theme === 'dark' ? 'Light' : 'Dark'}
          />
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block mb-6"
                >
                  <span className="text-7xl">👋</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-8xl font-black mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    Hi, I&#39;m Vin
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-2xl md:text-4xl mb-8 font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                >
                 A FullStack Dev , Currently Exploring Rust
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-lg md:text-xl leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}
                >
                 I Am 20 ,
                  I learn fast, build faster, and make things happen. I love making products, 
                  currently building, learning, and sharing on X.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="flex-shrink-0"
              >
                <div className="relative group">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                      scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -inset-6 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div className={`w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 ${
                      theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
                    } shadow-2xl transform rotate-3 transition-all duration-300 group-hover:rotate-0`}>
                     <Image
                          src="/rawal.jpeg"
                          alt="Vin Biradar"
                          width={384} // md:w-96 (96 * 4 = 384px)
                          height={384} // md:h-96 (96 * 4 = 384px)
                          className="w-full h-full object-cover"
                          priority
                        />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-16 text-center"
            >
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Skills
              </span>
            </motion.h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300
                  }}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-gray-500 text-gray-200'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 hover:border-gray-500 text-gray-800'
                  } transition-all cursor-pointer shadow-lg hover:shadow-2xl`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8 text-center"
            >
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-center text-xl mb-16 max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Check out my latest work. I&#39;ve worked on a variety of projects, here are my fav ones 
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} theme={theme} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 mb-32">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Want to chat? Just DM me on X{' '}
              <a href="https://x.com/toovinod09" className="text-blue-500 hover:underline font-semibold">
              </a>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              <SocialLink icon={<Mail size={28} />} href="mailto:vinodjb77@gmail.com" theme={theme} />
              <SocialLink icon={<Github size={28} />} href="https://github.com/Vinodbiradar09" theme={theme} />
              <SocialLink icon={<Twitter size={28} />} href="https://x.com/toovinod09" theme={theme} />
              <SocialLink icon={<Linkedin size={28} />} href="https://www.linkedin.com/in/yourprofile" theme={theme} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  theme: string;
  label: string;
}

const NavButton = ({ icon, onClick, active, theme, label }: NavButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`p-3 rounded-xl transition-all relative group ${
      active 
        ? theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-black'
        : theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-zinc-800/50' : 'text-gray-600 hover:text-black hover:bg-gray-100'
    }`}
    title={label}
  >
    {icon}
  </motion.button>
);

interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  website: string;
  source: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: string;
}

const ProjectCard = ({ project, index, theme }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -12, scale: 1.02 }}
    viewport={{ once: true }}
    transition={{ 
      delay: index * 0.1,
      type: "spring",
      stiffness: 200
    }}
    className={`p-8 rounded-3xl ${
      theme === 'dark'
        ? 'bg-zinc-900/50 border border-zinc-800 hover:border-gray-500'
        : 'bg-gray-50/80 border border-gray-200 hover:border-gray-400'
    } backdrop-blur-sm transition-all group cursor-pointer shadow-xl hover:shadow-2xl`}
  >
    <div className="flex items-start justify-between mb-6">
      <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
        theme === 'dark' ? 'bg-zinc-800 text-gray-400' : 'bg-gray-200 text-gray-600'
      }`}>
        {project.year}
      </span>
      <Code className={`${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-400 transition-colors`} size={24} />
    </div>
    
    <h3 className="text-3xl font-bold mb-4 group-hover:text-gray-400 transition-colors">
      {project.title}
    </h3>
    
    <p className={`mb-6 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-8">
      {project.technologies.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className={`text-xs font-medium px-4 py-2 rounded-full ${
            theme === 'dark'
              ? 'bg-zinc-800 text-gray-300 border border-zinc-700'
              : 'bg-gray-100 text-gray-700 border border-gray-300'
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
    
    <div className="flex gap-4">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={project.website}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ${
          theme === 'dark'
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-black text-white hover:bg-gray-800'
        } transition-colors flex-1 justify-center shadow-lg`}
      >
        <ExternalLink size={18} />
        <span>Visit</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={project.source}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold ${
          theme === 'dark'
            ? 'border-gray-700 hover:border-gray-500 text-gray-300 hover:bg-zinc-800/50'
            : 'border-gray-300 hover:border-gray-500 text-gray-700 hover:bg-gray-50'
        } transition-all flex-1 justify-center`}
      >
        <Github size={18} />
        <span>Code</span>
      </motion.a>
    </div>
  </motion.div>
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  theme: string;
}

const SocialLink = ({ icon, href, theme }: SocialLinkProps) => (
  <motion.a
    whileHover={{ scale: 1.15, y: -8 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-5 rounded-2xl ${
      theme === 'dark'
        ? 'bg-zinc-900 border-2 border-zinc-800 text-gray-400 hover:text-white hover:border-gray-600'
        : 'bg-gray-100 border-2 border-gray-200 text-gray-600 hover:text-black hover:border-gray-400'
    } transition-all shadow-lg hover:shadow-2xl`}
  >
    {icon}
  </motion.a>
);

export default Portfolio;