import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);

    // Listen for navigation changes (for SPAs)
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);

    // For SPAs that use pushState/replaceState, you might need additional logic
    // This is a simple solution that works for most cases
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handleLocationChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "My Projects" },
    { href: "/contact", label: "Contact", isButton: true }
  ];

  const isActivePage = (href) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-black text-white px-8 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-black font-bold text-lg">AK</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              link.isButton ? (
                <button 
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActivePage(link.href)
                      ? 'bg-gray-300 text-black'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => window.location.href = link.href}
                >
                  {link.label}
                </button>
              ) : (
                <a 
                  key={index}
                  href={link.href} 
                  className={`transition-colors duration-200 font-medium relative ${
                    isActivePage(link.href)
                      ? 'text-white'
                      : 'hover:text-gray-300'
                  }`}
                >
                  {link.label}
                  {isActivePage(link.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                  )}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationLinks.map((link, index) => (
                link.isButton ? (
                  <button 
                    key={index}
                    className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 self-start ${
                      isActivePage(link.href)
                        ? 'bg-gray-300 text-black'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = link.href;
                    }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a 
                    key={index}
                    href={link.href} 
                    className={`transition-colors duration-200 py-2 font-medium relative ${
                      isActivePage(link.href)
                        ? 'text-white border-l-2 border-white pl-4'
                        : 'hover:text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}