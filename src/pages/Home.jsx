import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Lightbulb, Shield, Settings, ChevronRight } from 'lucide-react';
import heroVid from "../assets/hero/vid4.mp4";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
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
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Financial Management',
      description: 'Comprehensive financial oversight including compliance, reporting, forecasting, and strategic financial planning. We provide the clarity and control you need to make confident decisions.',
      id: 'service-1'
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Business Advisory',
      description: 'Strategic guidance tailored to your growth objectives. From market entry to scaling operations, we partner with you to navigate complexity and seize opportunity.',
      id: 'service-2'
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Compliance & Governance',
      description: 'Proactive risk management and regulatory alignment. We help you build robust governance frameworks that protect your business and support sustainable growth.',
      id: 'service-3'
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: 'Operational Excellence',
      description: 'Process optimization, system integration, and workflow enhancement. Transform operations with data-driven insights, custom dashboards, and continuous improvement strategies.',
      id: 'service-4'
    }
  ];

  return (
    <div className="bg-black text-white font-sans">
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
            <Link to="/services" className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2">
              Explore Our Services <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="border border-white/30 hover:bg-white/10 px-8 py-4 text-lg tracking-wide transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We deliver integrated financial and operational support designed to drive growth, 
              ensure compliance, and optimize performance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 border-[2px] border-emerald-500 text-emerald-500 mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-2xl" />
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Services Link */}
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-semibold text-lg transition-colors"
            >
              View All Services <ChevronRight className="w-5 h-5" />
            </Link>
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
            <Link to="/contact" className="bg-black hover:bg-gray-900 px-8 py-4 text-lg tracking-wide transition-all duration-300">
              Schedule Consultation
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg tracking-wide transition-all duration-300">
              Download Capabilities Brief
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}