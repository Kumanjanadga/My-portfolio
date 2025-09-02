import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, User, Code, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      id: 1,
      title: "AskHire - Smart Hiring Assistant",
      year: "2024-2025",
      category: "Full Stack Development",
      description: "Developed an automated candidate screening system that groups qualified applicants for interviews. Built with .NET backend and React frontend using clean architecture principles.",
      role: "Full Stack Developer",
      skills: [".NET", "MS SQL", "React JS", "Figma", "Git", "Tailwind CSS"],
      repositories: [
        {
          name: "Backend",
          url: "https://github.com/AskHire/AskHire-Backend.git"
        },
        {
          name: "Frontend", 
          url: "https://github.com/AskHire/AskHire-Frontend.git"
        }
      ],
      images: [
        "/AskHire.png",
        "./AskHire.png",
        "AskHire.png",
        "/public/AskHire.png"
      ],
      type: "Academic Project",
      demoUrl: "",
      fallbackGradient: "from-blue-600 via-indigo-600 to-purple-700"
    },
    {
      id: 2,
      title: "STRICKMATE - Carrom Robot",
      year: "2023",
      category: "Hardware Development",
      description: "Designed and built an automated carrom-playing system using Raspberry Pi and Arduino Uno. Features precise arm movement with NEMA 17 stepper motor and advanced algorithms for shot selection.",
      role: "Hardware Developer",
      skills: ["Arduino Programming", "Stepper Motor Control", "Embedded Systems", "Mechanical Design"],
      repositories: [],
      images: [
        "/Strikemate.jpeg",
        "./Strikemate.jpeg",
        "Strikemate.jpeg",
        "/public/Strikemate.jpeg"
      ],
      type: "Microcontroller Project",
      demoUrl: "",
      fallbackGradient: "from-green-600 via-teal-600 to-cyan-700"
    },
    {
      id: 3,
      title: "Expense Master",
      year: "2025",
      category: "Mobile Development",
      description: "A Flutter-powered mobile app designed to track, categorize, and manage daily expenses with offline support using Hive database. Clean and intuitive UI for seamless user experience.",
      role: "Flutter Developer",
      skills: ["Flutter", "Dart", "Hive Database"],
      repositories: [
        {
          name: "Repository",
          url: "https://github.com/Kumanjanadga/Expense-Master-Mobile-App.git"
        }
      ],
      images: [
        "/Expense.png",
        "./Expense.png",
        "Expense.png",
        "/public/Expense.png"
      ],
      type: "Self-Learning Project",
      demoUrl: "",
      fallbackGradient: "from-orange-600 via-red-600 to-pink-700"
    },
    {
      id: 4,
      title: "Real Taste - Food App",
      year: "2025",
      category: "Mobile Development",
      description: "Flutter-based mobile application for seamless food discovery and ordering. Features Firebase authentication, Cloud Firestore for real-time data, and smooth navigation across core pages.",
      role: "Flutter Developer",
      skills: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
      repositories: [
        {
          name: "Repository",
          url: "https://github.com/Kumanjanadga/Real-Taste-MobileApp.git"
        }
      ],
      images: [
        "/RealTaste.png",
        "./RealTaste.png",
        "RealTaste.png",
        "/public/RealTaste.png"
      ],
      type: "Self-Learning Project",
      demoUrl: "",
      fallbackGradient: "from-emerald-600 via-green-600 to-teal-700"
    }
  ];

  const handleImageError = (projectId, currentImageIndex) => {
    const project = projects.find(p => p.id === projectId);
    if (project && currentImageIndex < project.images.length - 1) {
      // Try next image path
      setImageErrors(prev => ({
        ...prev,
        [projectId]: (prev[projectId] || 0) + 1
      }));
    } else {
      // All image paths failed, show fallback
      setImageErrors(prev => ({
        ...prev,
        [projectId]: -1
      }));
    }
  };

  const getCurrentImageSrc = (project) => {
    const errorCount = imageErrors[project.id] || 0;
    if (errorCount === -1 || errorCount >= project.images.length) {
      return null; // Show fallback
    }
    return project.images[errorCount];
  };

  const shouldShowFallback = (projectId) => {
    return imageErrors[projectId] === -1 || (imageErrors[projectId] || 0) >= projects.find(p => p.id === projectId).images.length;
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank');
  };

  const handleDemoClick = (demoUrl, projectTitle) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    } else {
      alert(`Demo for ${projectTitle} is coming soon!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - Responsive */}
      <div 
        className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23334155\" width=\"1200\" height=\"600\"/><polygon fill=\"%23475569\" points=\"0,600 400,300 800,450 1200,200 1200,600\"/></svg>')"
        }}
      >
        <div className="text-center px-4">
          <div className="border-2 border-white inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 hover:bg-white hover:text-gray-900 transition-all duration-300">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider">PORTFOLIO</h1>
          </div>
        </div>
      </div>

      {/* Projects Grid - Fully Responsive */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my recent work in full-stack development, mobile applications, and hardware projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-gray-600">
              {/* Project Image with Multiple Fallbacks */}
              <div className="h-48 sm:h-56 lg:h-64 xl:h-80 relative overflow-hidden">
                {!shouldShowFallback(project.id) ? (
                  <img
                    src={getCurrentImageSrc(project)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(project.id, imageErrors[project.id] || 0)}
                    loading="lazy"
                  />
                ) : (
                  /* Enhanced Fallback Design */
                  <div className={`w-full h-full bg-gradient-to-br ${project.fallbackGradient} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="flex items-center justify-center h-full relative z-10">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm sm:text-base opacity-90">{project.category}</p>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="inline-block bg-white/20 text-xs px-2 py-1 rounded mb-2 backdrop-blur-sm">
                      {project.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                    <div className="flex items-center text-xs sm:text-sm text-gray-300">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-3">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {project.role}
                </div>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-2">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-700 hover:bg-gray-600 text-xs px-2 py-1 rounded transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Repository Links */}
                  {project.repositories.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.repositories.map((repo, index) => (
                        <button
                          key={index}
                          onClick={() => handleGitHubClick(repo.url)}
                          className="flex items-center space-x-1 sm:space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation text-xs sm:text-sm border border-gray-600 hover:border-gray-500"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{repo.name}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span>Private Repository</span>
                    </div>
                  )}
                  
                  {/* Demo Link */}
                  <button
                    onClick={() => handleDemoClick(project.demoUrl, project.title)}
                    className="flex items-center space-x-1 sm:space-x-2 border border-gray-600 hover:border-gray-500 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation text-xs sm:text-sm self-start sm:self-auto"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Notice */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back regularly or follow my GitHub for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => window.open('https://github.com/Kumanjanadga', '_blank')}
                className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base touch-manipulation"
              >
                <Github className="w-4 h-4" />
                <span>Follow on GitHub</span>
              </button>
              <button 
                onClick={() => window.location.href = "/contact"}
                className="flex items-center justify-center space-x-2 border border-gray-600 hover:border-gray-500 hover:bg-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base touch-manipulation"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Mobile Responsive */}
      <div className="bg-black py-12 sm:py-16 border-t border-gray-800">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always excited to work on new challenges and help bring innovative ideas to life. 
            Let's collaborate and build something incredible together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.location.href = "/contact"}
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base font-medium rounded-lg hover:scale-105 touch-manipulation shadow-lg hover:shadow-xl"
            >
              START A PROJECT
            </button>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1YnQutbw8yYEMcWjwfekkxptKCjy7WLap/view?usp=sharing', '_blank')}
              className="border border-white px-6 sm:px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base font-medium rounded-lg hover:scale-105 touch-manipulation"
            >
              VIEW RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}