import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';

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

    // For SPAs that use pushState/replaceState
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

  // ...inside Navbar component
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      {/* Desktop and Mobile Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
            {/* Logo/Brand */}
            <div className="flex items-center flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center group"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/');
                }}
                >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-200 group-hover:scale-105">
                  <span className="text-black font-bold text-lg">AK</span>
                </div>
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationLinks.map((link, index) => (
                link.isButton ? (
                  <button 
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                    isActivePage(link.href)
                    ? 'bg-gray-300 text-black shadow-lg'
                    : 'bg-white text-black hover:bg-gray-100 hover:shadow-md'
                  }`}
                  onClick={() => handleNavigation(link.href)}
                  >
                  {link.label}
                  </button>
                ) : (
                  <Link 
                  key={index}
                  to={link.href}
                  className={`px-4 py-2 transition-all duration-200 font-medium relative rounded-lg ${
                    isActivePage(link.href)
                    ? 'text-white bg-gray-800'
                    : 'hover:text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  >
                  {link.label}
                  {isActivePage(link.href) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                  </Link>
                )
                ))}
              </div>

              {/* Mobile/Tablet Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 touch-manipulation"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 text-white absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 text-white absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 transform transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navigationLinks.map((link, index) => (
              link.isButton ? (
                <button 
                  key={index}
                  className={`w-full text-left px-6 py-3 rounded-xl font-medium transition-all duration-200 touch-manipulation ${
                    isActivePage(link.href)
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600'
                  }`}
                  onClick={() => handleNavigation(link.href)}
                >
                  {link.label}
                </button>
              ) : (
                <a 
                  key={index}
                  href={link.href} 
                  className={`block px-4 py-3 transition-all duration-200 font-medium rounded-xl touch-manipulation ${
                    isActivePage(link.href)
                      ? 'text-white bg-gray-800 border-l-4 border-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {isActivePage(link.href) && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}