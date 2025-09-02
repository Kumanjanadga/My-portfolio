import React from 'react';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100">
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-8 py-16">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="border-2 border-black inline-block px-8 py-3 mb-12">
          <h1 className="text-2xl font-bold tracking-wider">ABOUT ME</h1>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Motivated and skilled third-year IT undergraduate with a strong passion for mobile application development. 
          I enjoy building practical, user-friendly apps and continuously learning new technologies to enhance my skills. 
          With experience in both software and hardware projects, I bring a hands-on, problem-solving mindset to every challenge.
        </p>
        
        <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
          EXPLORE
        </button>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center mb-16">
        <div className="w-16 h-px bg-black"></div>
        <div className="mx-4 text-black">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor">
            <path d="M0 5L5 0L10 5L15 0L20 5L15 10L10 5L5 10L0 5Z"/>
          </svg>
        </div>
        <div className="w-16 h-px bg-black"></div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wide">DESIGN</h3>
          <p className="text-gray-600 leading-relaxed">
            Creating intuitive and visually appealing UI/UX designs using Figma and Canva. 
            I focus on user-centered design principles to deliver engaging digital experiences.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wide">DEVELOPMENT</h3>
          <p className="text-gray-600 leading-relaxed">
            Full-stack development expertise in React, Flutter, .NET, and mobile applications. 
            Building scalable solutions with clean, maintainable code architecture.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wide">MAINTENANCE</h3>
          <p className="text-gray-600 leading-relaxed">
            Ensuring optimal performance through testing, debugging, and continuous improvement. 
            Providing ongoing support and updates for deployed applications.
          </p>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="flex items-center mt-16">
        <div className="w-16 h-px bg-black"></div>
        <div className="mx-4 text-black">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor">
            <path d="M0 5L5 0L10 5L15 0L20 5L15 10L10 5L5 10L0 5Z"/>
          </svg>
        </div>
        <div className="w-16 h-px bg-black"></div>
      </div>
      
    </div>

    {/* Education & Experience Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-center mb-12">BACKGROUND</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">Bachelor of Science (Hons) in Information Technology</h4>
                  <p className="text-gray-300 text-sm">University of Moratuwa | 2023 - Present</p>
                </div>
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">G.C.E. Advanced Level</h4>
                  <p className="text-gray-300 text-sm">Mahinda College, Galle | 2019 - 2021</p>
                  <p className="text-gray-400 text-xs">Z-Score: 1.7462 (Maths-A, Chemistry-B, Physics-B)</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-6">Experience & Activities</h3>
              <div className="space-y-4">
                {/* <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">Software Engineer Intern</h4>
                  <p className="text-gray-300 text-sm">Current Role</p>
                </div> */}
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">Active Rotaractor</h4>
                  <p className="text-gray-300 text-sm">Rotaract Club of University of Moratuwa | 2024 - Present</p>
                </div>
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">School Prefect</h4>
                  <p className="text-gray-300 text-sm">Christ Church Boys' College | 2016 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    
  );
}