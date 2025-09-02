import React from 'react';
import { Github, ExternalLink, Calendar, User, Code } from 'lucide-react';

export default function Projects() {
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
      image: "/AskHire.png",
      type: "Academic Project",
      demoUrl: ""
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
      image: "/Strikemate.jpeg",
      type: "Microcontroller Project",
      demoUrl: ""
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
      image: "/Expense.png",
      type: "Self-Learning Project",
      demoUrl: ""
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
      image: "/RealTaste.png",
      type: "Self-Learning Project",
      demoUrl: ""
    }
  ];

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
          <div className="border-2 border-white inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider">PORTFOLIO</h1>
          </div>
        </div>
      </div>

      {/* Projects Grid - Fully Responsive */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              {/* Project Image */}
              <div className="h-48 sm:h-56 lg:h-64 xl:h-80 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                {/* Fallback gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 hidden"
                  style={{ display: 'none' }}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Code className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm sm:text-base opacity-75">{project.category}</p>
                    </div>
                  </div>
                </div>

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
                      <span key={index} className="bg-gray-700 hover:bg-gray-600 text-xs px-2 py-1 rounded transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  {/* Repository Links */}
                  {project.repositories.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      {project.repositories.map((repo, index) => (
                        <button
                          key={index}
                          onClick={() => handleGitHubClick(repo.url)}
                          className="flex items-center space-x-1 sm:space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation text-xs sm:text-sm"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{repo.name}</span>
                        </button>
                      ))}
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
      </div>

      {/* Call to Action - Mobile Responsive */}
      <div className="bg-black py-12 sm:py-16">
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Interested in Working Together?</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base max-w-md mx-auto">
            Let's discuss your project and create something amazing
          </p>
          <button 
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="border border-white px-6 sm:px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base font-medium rounded-lg hover:scale-105 touch-manipulation"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
}