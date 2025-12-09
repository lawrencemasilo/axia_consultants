import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Lightbulb, Shield, Settings, ChevronRight, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Financial Management',
      subtitle: 'Comprehensive Financial Oversight',
      description: 'End-to-end financial management services that provide the clarity, control, and strategic insight you need to make confident business decisions.',
      features: [
        'Financial Planning & Analysis (FP&A)',
        'Budgeting & Forecasting',
        'Cash Flow Management',
        'Management Reporting & Dashboards',
        'Financial Compliance & Controls',
        'Month-end & Year-end Close',
        'KPI Development & Tracking',
        'Scenario Planning & Modeling'
      ],
      benefits: [
        'Real-time visibility into financial performance',
        'Improved decision-making with accurate data',
        'Enhanced cash flow predictability',
        'Regulatory compliance assurance'
      ],
      caseStudy: 'Helped a tech startup achieve 40% reduction in monthly close time while improving forecast accuracy to 95%.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Business Advisory',
      subtitle: 'Strategic Growth Partnership',
      description: 'Strategic guidance tailored to your unique growth objectives. We partner with you to navigate complexity, identify opportunities, and execute with precision.',
      features: [
        'Growth Strategy Development',
        'Market Entry & Expansion Planning',
        'Business Model Optimization',
        'M&A Support & Due Diligence',
        'Performance Improvement Initiatives',
        'Organizational Design',
        'Change Management',
        'Digital Transformation Strategy'
      ],
      benefits: [
        'Accelerated growth trajectory',
        'Data-driven strategic decisions',
        'Improved operational efficiency',
        'Sustainable competitive advantage'
      ],
      caseStudy: 'Supported a manufacturing company through a successful market expansion, achieving 150% revenue growth in 18 months.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Governance',
      subtitle: 'Proactive Risk Management',
      description: 'Build robust governance frameworks that protect your business, ensure regulatory compliance, and support sustainable growth across all jurisdictions.',
      features: [
        'Regulatory Compliance Assessment',
        'Corporate Governance Framework',
        'Internal Controls Development',
        'Risk Assessment & Mitigation',
        'Policy & Procedure Documentation',
        'Board Advisory Services',
        'Audit Readiness & Support',
        'Ethics & Compliance Programs'
      ],
      benefits: [
        'Reduced regulatory and operational risk',
        'Enhanced stakeholder confidence',
        'Streamlined audit processes',
        'Protected corporate reputation'
      ],
      caseStudy: 'Established comprehensive governance framework for a healthcare company, achieving 100% audit compliance with zero findings.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Operational Excellence',
      subtitle: 'Process & Performance Optimization',
      description: 'Transform your operations with data-driven insights, process optimization, and technology integration that drives efficiency and scalability.',
      features: [
        'Process Mapping & Optimization',
        'Workflow Automation',
        'System Integration & Implementation',
        'Custom Dashboard Development',
        'Performance Metrics & Analytics',
        'Supply Chain Optimization',
        'Quality Management Systems',
        'Continuous Improvement Programs'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced costs and waste',
        'Improved quality and consistency',
        'Scalable processes for growth'
      ],
      caseStudy: 'Redesigned operations for a retail company, resulting in 30% cost reduction and 25% improvement in customer satisfaction.'
    }
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-black to-emerald-950">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Our <span className="font-semibold text-emerald-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth, ensure compliance, and optimize performance across your entire organization.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white py-8 sticky top-[72px] z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  document.getElementById(`service-${index}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-6 py-3 whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          id={`service-${index}`}
          className={`py-20 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Overview */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-emerald-500 text-emerald-500 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-light mb-2 text-slate-900">
                  {service.title}
                </h2>
                <p className="text-xl text-emerald-600 font-semibold mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Highlight */}
                <div className="bg-slate-900 text-white p-6">
                  <h3 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
                    Success Story
                  </h3>
                  <p className="text-gray-300 italic">
                    {service.caseStudy}
                  </p>
                </div>
              </div>

              {/* Right Column - Features */}
              <div>
                <div className="bg-slate-900 text-white p-8">
                  <h3 className="text-2xl font-semibold mb-6">What We Offer</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0"
                      >
                        <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full mt-8 bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Ready to <span className="font-semibold">Get Started?</span>
          </h2>
          <p className="text-xl mb-10 text-emerald-50">
            Schedule a consultation to discuss which services are right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-black hover:bg-gray-900 px-8 py-4 text-lg tracking-wide transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg tracking-wide transition-all duration-300">
              Download Service Guide
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
                <span className="font-semibold">AXIA</span> CONSULTANTS
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
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="mailto:contact@axiaconsultants.co.za" className="hover:text-emerald-400 transition-colors">contact@axiaconsultants.co.za</a></li>
                <li><a href="tel:+27111234567" className="hover:text-emerald-400 transition-colors">+27 (11) 123-4567</a></li>
                <li>Sandton, South Africa</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Axia Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}