import React from 'react';

export default function Skills() {
  const currentSkills = [
    //{ name: 'HTML5', color: 'text-orange-500', icon: '📄' },
    //{ name: 'CSS3', color: 'text-blue-500', icon: '🎨' },
    //{ name: 'SASS', color: 'text-pink-500', icon: '💎' },
    { name: 'DART', color: 'text-yellow-500', icon: '⚡' },
    { name: 'REACT', color: 'text-cyan-500', icon: '⚛️' },
    { name: 'FLUTTER', color: 'text-blue-400', icon: '🚀' },
    { name: '.NET', color: 'text-purple-600', icon: '🔧' },
    { name: 'FIGMA', color: 'text-purple-500', icon: '🎯' },
    { name: 'MS SQL', color: 'text-blue-600', icon: '🗃️' },
    { name: 'Tailwind CSS', color: 'text-cyan-500', icon: '🍃' },
    { name: 'FIREBASE', color: 'text-blue-700', icon: '📘' }
  ];

  const learningSkills = [
    { name: 'NODE.JS', color: 'text-green-600', icon: '🟢' },
    { name: 'MYSQL', color: 'text-blue-600', icon: '🗃️' },
    { name: 'MONGODB', color: 'text-green-500', icon: '🍃' },
    { name: 'TYPESCRIPT', color: 'text-blue-700', icon: '📘' }
  ];

  const otherSkills = [
    { name: 'ENGLISH', flag: '🇬🇧', level: 'C1/C2' },
    { name: 'SINHALA', flag: '🇱🇰', level: 'Native' },
    { name: 'C++', color: 'text-blue-600', icon: '⚙️' },
    { name: 'C', color: 'text-gray-600', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-8 py-16">
      {/* Skills Header */}
      <div className="border-2 border-black inline-block px-8 py-3 mb-16">
        <h1 className="text-2xl font-bold tracking-wider">SKILLS</h1>
      </div>

      {/* Using Now Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-center mb-8 tracking-wide">USING NOW:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <span className={`text-sm font-medium ${skill.color}`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Section */}
      {/* <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-center mb-8 tracking-wide">LEARNING:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {learningSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <span className={`text-sm font-medium ${skill.color}`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Other Skills Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8 tracking-wide">OTHER SKILLS:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {otherSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <span className="text-2xl">{skill.flag || skill.icon}</span>
              </div>
              <span className={`text-sm font-medium ${skill.color || 'text-gray-700'}`}>
                {skill.name}
              </span>
              {skill.level && (
                <span className="text-xs text-gray-500 mt-1">{skill.level}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Summary */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-lg font-bold mb-4">TECHNICAL EXPERTISE</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Programming Languages:</h4>
              <p className="text-sm text-gray-600">C, Java, JavaScript, Dart, SQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Front-End:</h4>
              <p className="text-sm text-gray-600">React JS, Flutter, HTML, CSS, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Back-End:</h4>
              <p className="text-sm text-gray-600">.NET (C#), ADO.NET, PHP, Firebase</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Databases:</h4>
              <p className="text-sm text-gray-600">MS SQL Server, MySQL, Firebase Realtime DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}