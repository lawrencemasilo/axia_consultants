import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import InquiryFormModal from "./InquiryFormPopup";
import logo from "../assets/favicon2.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Services', path: '/services' },
    //{ name: 'About', path: '/#approach' },
    //{ name: 'Industries', path: '/#industries' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActiveLink = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      // If we're already on home page, just scroll
      if (location.pathname === '/') {
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex text-2xl font-light tracking-wider text-white">
            <img src={logo} alt="" className="h-8 mr-[-4px]" />
            <span className="font-semibold">XIA</span> CONSULTANTS
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    isActiveLink(item.path)
                      ? 'text-emerald-400'
                      : 'text-white hover:text-emerald-400'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    isActiveLink(item.path)
                      ? 'text-emerald-400'
                      : 'text-white hover:text-emerald-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <button 
              
              className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 text-sm tracking-wide transition-all duration-300 text-white"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                item.path.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`text-sm tracking-wide transition-colors ${
                      isActiveLink(item.path)
                        ? 'text-emerald-400'
                        : 'text-white hover:text-emerald-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className={`text-sm tracking-wide transition-colors ${
                      isActiveLink(item.path)
                        ? 'text-emerald-400'
                        : 'text-white hover:text-emerald-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button 
                onClick={() => {
                  setInquiryOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 text-sm tracking-wide transition-all duration-300 text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <InquiryFormModal 
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
}