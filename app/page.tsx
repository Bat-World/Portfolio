'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store with cart functionality and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      tags: ['TypeScript', 'Firebase', 'Tailwind'],
      image: '/project2.jpg'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio site showcasing creative work and skills.',
      tags: ['Next.js', 'Framer Motion', 'CSS'],
      image: '/project3.jpg'
    }
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Tailwind CSS', level: 85 }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`px-3 py-2 rounded-md ${activeSection === 'home' ? (darkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`px-3 py-2 rounded-md ${activeSection === 'about' ? (darkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`px-3 py-2 rounded-md ${activeSection === 'projects' ? (darkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`px-3 py-2 rounded-md ${activeSection === 'contact' ? (darkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
            >
              Contact
            </button>
            <button 
              onClick={toggleDarkMode} 
              className="px-3 py-2 rounded-md"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-500">John Doe</span></h1>
            <h2 className="text-2xl md:text-3xl mb-6">Frontend Developer</h2>
            <p className="text-lg mb-8">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`px-6 py-3 rounded-lg border ${darkMode ? 'border-white hover:bg-gray-800' : 'border-gray-900 hover:bg-gray-100'}`}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center overflow-hidden`}>
              {/* Replace with your image */}
              <div className="text-4xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4">
                I'm a passionate frontend developer with 5 years of experience building web applications. 
                I specialize in React and Next.js, and I love creating intuitive user interfaces.
              </p>
              <p className="mb-4">
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting 
                with new cooking recipes.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest web technologies 
                to deliver the best solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                      <div 
                        className={`h-full rounded-full bg-blue-500`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                  {/* Project image placeholder */}
                  <div className="text-4xl">📂</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white w-full`}
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className={`text-2xl ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>GitHub</a>
            <a href="#" className={`text-2xl ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>LinkedIn</a>
            <a href="#" className={`text-2xl ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}