import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Target, BarChart3, ChevronRight, Menu, X } from 'lucide-react';
import heroVid from "../assets/hero/vid2.mp4";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('.fade-in-section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({...prev, [entry.target.id]: true}));
            }
          });
        },
        { threshold: 0.15 }
      );
      
      sections.forEach((section) => observer.observe(section));
      
      return () => observer.disconnect();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'Approach', 'Industries', 'Contact'];

  return (
    <div className="bg-black text-white font-sans">
      {/* Glassmorphism Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider">
            <span className="font-semibold">AXIA</span> CONSULTANTS
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide hover:text-emerald-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 text-sm tracking-wide transition-all duration-300">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wide hover:text-emerald-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 text-sm tracking-wide transition-all mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={heroVid}
            type="video/mp4"
          />
          {/* Fallback gradient background if video fails to load */}
          {/*<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-950" />*/}
        </video>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Optional: Subtle emerald gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            Finance & Operations Solutions
            <br />
            <span className="font-semibold text-emerald-400">for High-Performance Businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto">
            Strategic insight and operational precision for companies ready to scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2">
              Explore Our Services <ChevronRight size={20} />
            </button>
            <button className="border border-white/30 hover:bg-white/10 px-8 py-4 text-lg tracking-wide transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`fade-in-section text-center mb-16 transition-all duration-1000 ${
            visibleSections['services-intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} id="services-intro">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Comprehensive <span className="font-semibold">Business Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver integrated financial and operational support designed to drive growth, ensure compliance, and optimize performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <TrendingUp size={40} />,
                title: 'Financial Management',
                description: 'Comprehensive financial oversight including compliance, reporting, forecasting, and strategic financial planning. We provide the clarity and control you need to make confident decisions.',
                id: 'service-1'
              },
              {
                icon: <Target size={40} />,
                title: 'Business Advisory',
                description: 'Strategic guidance tailored to your growth objectives. From market entry to scaling operations, we partner with you to navigate complexity and seize opportunity.',
                id: 'service-2'
              },
              {
                icon: <Shield size={40} />,
                title: 'Compliance & Governance',
                description: 'Proactive risk management and regulatory alignment. We help you build robust governance frameworks that protect your business and support sustainable growth.',
                id: 'service-3'
              },
              {
                icon: <BarChart3 size={40} />,
                title: 'Operational Excellence',
                description: 'Process optimization, system integration, and workflow enhancement. Transform operations with data-driven insights, custom dashboards, and continuous improvement strategies.',
                id: 'service-4'
              }
            ].map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`fade-in-section group p-8 border border-gray-200 hover:border-emerald-600 transition-all duration-500 ${
                  visibleSections[service.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`fade-in-section text-center mb-16 transition-all duration-1000 ${
            visibleSections['approach-intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} id="approach-intro">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-black">
              Our <span className="font-semibold">Methodology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A disciplined, results-focused approach that adapts to your business context and accelerates measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Assess', description: 'Deep analysis of your financial position, operational workflows, and strategic objectives.', id: 'approach-1' },
              { number: '02', title: 'Design', description: 'Tailored strategies and systems aligned with your growth targets and risk tolerance.', id: 'approach-2' },
              { number: '03', title: 'Execute', description: 'Seamless implementation with ongoing support, monitoring, and continuous optimization.', id: 'approach-3' }
            ].map((step, index) => (
              <div
                key={index}
                id={step.id}
                className={`fade-in-section transition-all duration-1000 ${
                  visibleSections[step.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl font-light text-emerald-600/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3 text-black">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`fade-in-section text-center mb-16 transition-all duration-1000 ${
            visibleSections['industries-intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} id="industries-intro">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Trusted Across <span className="font-semibold text-emerald-400">Industries</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with ambitious organizations across sectors including technology, manufacturing, real estate, healthcare, and professional services.
            </p>
          </div>

          <div className={`fade-in-section grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            visibleSections['industries-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} id="industries-grid">
            {['Technology', 'Manufacturing', 'Real Estate', 'Healthcare', 'Finance', 'Retail', 'Energy', 'Professional Services'].map((industry, index) => (
              <div 
                key={index}
                className="p-6 border border-white/10 hover:border-emerald-600 hover:bg-white/5 transition-all duration-300 text-center"
              >
                <p className="text-lg tracking-wide">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <p className="text-xl mb-10 text-emerald-50">
            Connect with our team to discuss how we can support your strategic and operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-900 px-8 py-4 text-lg tracking-wide transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg tracking-wide transition-all duration-300">
              Download Capabilities Brief
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-light tracking-wider mb-4">
                <span className="font-semibold">APEX</span> CONSULTING
              </div>
              <p className="text-gray-400 text-sm">
                Strategic finance and operations consulting for high-performance businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Financial Management</li>
                <li>Business Advisory</li>
                <li>Compliance & Governance</li>
                <li>Operational Excellence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Case Studies</li>
                <li>Insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>contact@axiaconsultants.co.za</li>
                <li>+1 (555) 123-4567</li>
                <li>South Africa</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Apex Consulting. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}