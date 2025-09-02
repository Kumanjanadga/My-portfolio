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
      //image: "./AskHire.png",
      image: "bg-[url('./AskHire.png')] bg-cover bg-center",
      type: "Academic Project",
      demoUrl: "" // Add demo URL if available
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
      image: "./Strikemate.jpeg",
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
      image: "./Expense.png",
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
      image: "./RealTaste.png",
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
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23334155\" width=\"1200\" height=\"600\"/><polygon fill=\"%23475569\" points=\"0,600 400,300 800,450 1200,200 1200,600\"/></svg>')"
        }}
      >
        <div className="text-center">
          <div className="border-2 border-white inline-block px-8 py-3">
            <h1 className="text-3xl font-bold tracking-wider">PORTFOLIO</h1>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Project Image/Background */}
              {project.image.startsWith("/") ? (
                <div className="h-80 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-white/20 text-xs px-2 py-1 rounded mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`h-80 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-white/20 text-xs px-2 py-1 rounded mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <User className="w-4 h-4 mr-2" />
                  {project.role}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center space-x-6">
                  {project.repositories.length > 0 && (
                    <div className="flex items-center space-x-4">
                      {project.repositories.map((repo, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <Github 
                            className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" 
                            onClick={() => handleGitHubClick(repo.url)}
                            title={`View ${repo.name}`}
                          />
                          <span className="text-xs text-gray-500">{repo.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <ExternalLink 
                      className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                      onClick={() => handleDemoClick(project.demoUrl, project.title)}
                      title="View Demo"
                    />
                    <span className="text-xs text-gray-500">Demonstration</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-gray-400 mb-8">Let's discuss your project and create something amazing</p>
          <button 
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
}