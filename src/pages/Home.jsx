import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Smartphone, Database } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: isMobile ? '10%' : mousePosition.x * 0.02,
            top: isMobile ? '5%' : mousePosition.y * 0.02,
          }}
        ></div>
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-l from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0 backdrop-blur-sm">
          {/* Logo/Brand */}
          <div className={`mb-8 lg:mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-900 to-black rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 touch-manipulation">
              <span className="text-white font-bold text-lg sm:text-xl">AK</span>
            </div>
          </div>

          {/* Main Text */}
          <div className={`mb-8 lg:mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-4 font-medium">Hi, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-black to-gray-700 mb-4 lg:mb-6 leading-tight">
              Akila Kumanjana
            </h1>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light">Full Stack Developer</p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-light">Mobile App Developer</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">IT Undergraduate @ University of Moratuwa</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`mb-6 lg:mb-8 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1YnQutbw8yYEMcWjwfekkxptKCjy7WLap/view?usp=sharing', '_blank');
                }}
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105 touch-manipulation"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">Download CV</span>
              </button>
              <button 
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-xl hover:scale-105 touch-manipulation"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">View Work</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className={`flex space-x-3 sm:space-x-4 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="mailto:akilakumanjanag@gmail.com" 
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/Kumanjanadga" 
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akila-kumanjana" 
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Side - Image (Mobile: Below content, Desktop: Side by side) */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden min-h-[50vh] lg:min-h-screen">
          {/* Geometric Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 border border-white/10 rounded-3xl rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/5 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl rotate-45"></div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-center h-full relative z-10 py-8 lg:py-0">
            <div className="relative group">
              <div className="w-64 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500">
                {/* Enhanced Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Dynamic animated elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 sm:bottom-16 right-3 sm:right-6 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-white/5 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/3 left-3 sm:left-6 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-blue-300/20 rounded-full animate-ping"></div>
                  <div className="absolute top-2/3 right-4 sm:right-8 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 bg-purple-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-6 sm:right-12 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-yellow-300/20 rounded-full animate-ping delay-1000"></div>
                </div>
                
                {/* Profile image */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="./Me1.png" 
                    alt="Akila Kumanjana" 
                    className="w-full h-full object-cover filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 opacity-5">
            <div className="w-full h-full bg-gradient-to-tl from-white to-transparent transform rotate-45 translate-x-16 sm:translate-x-24 lg:translate-x-32 translate-y-16 sm:translate-y-24 lg:translate-y-32"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section - About My Journey */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start relative z-10 space-y-8 lg:space-y-0">
          <div className="max-w-full lg:max-w-3xl">
            <div className="mb-6 lg:mb-8">
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">My Journey</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Passionate Developer & Problem Solver
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 text-base sm:text-lg">
              Currently pursuing my Bachelor's degree in Information Technology at the University of Moratuwa, 
              I'm a motivated third-year student with a strong passion for creating innovative mobile and web applications. 
              My journey includes developing automated systems, building user-friendly mobile apps, and working on 
              cutting-edge hardware projects like automated robotics systems.
            </p>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 touch-manipulation">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Full Stack Development</h3>
                <p className="text-xs sm:text-sm text-gray-400">React, .NET, SQL expertise</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 touch-manipulation">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Mobile Development</h3>
                <p className="text-xs sm:text-sm text-gray-400">Flutter & Firebase specialist</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 touch-manipulation sm:col-span-2 lg:col-span-1">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Hardware Projects</h3>
                <p className="text-xs sm:text-sm text-gray-400">Arduino & Raspberry Pi</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {
                 window.location.href = "/projects";
                }}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105 touch-manipulation"
              >
                <span className="font-medium text-sm sm:text-base">Explore My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm touch-manipulation"
              >
                <span className="font-medium text-sm sm:text-base">Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Enhanced Stats/Info Card */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 mx-auto lg:mx-0 max-w-sm lg:max-w-none">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Current Status</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">3rd Year</div>
                <div className="text-xs sm:text-sm text-gray-300">IT Undergraduate</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-300">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">2+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Currently Available For</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs">Internships</span>
                    <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs">Freelance</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-xs">Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}