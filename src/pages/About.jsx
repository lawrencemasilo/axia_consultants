import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, TrendingUp, Lightbulb, Shield, Heart, ChevronRight, Linkedin, Mail } from 'lucide-react';
import Neo from "../assets/neo.png";
import Obakeng from "../assets/obakeng.jpg";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every engagement, setting the standard for professional consulting services.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We operate with unwavering ethics and transparency, building trust through honest, principled advice.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge solutions and creative thinking to solve complex business challenges.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Partnership',
      description: 'We forge lasting relationships with our clients, treating their success as our own.'
    }
  ];

  const team = [
    {
      name: 'Obakeng Kgabi',
      image: Obakeng,
      role: 'Chief Executive Officer',
      credential: '',
      bio: 'Obakeng is a strategic and detail-oriented leader with strong expertise across financial management, auditing, and corporate advisory. He has supported organizations through high-stakes decisions, complex financial challenges, and growth transitions. His approach blends analytical rigour with sound judgement, enabling him to guide companies toward long-term stability, compliance, and sustainable expansion. Obakeng is trusted for his ability to navigate financial complexity while maintaining a clear strategic vision.',
      specialties: ['Financial Strategy', 'Corporate Governance', 'M&A Advisory', 'Risk Management'],
      email: 'obakeng@axiaconsultants.co.za',
      linkedin: '#'
    },
    {
      name: 'Neo Masilo',
      image: Neo,
      role: 'Managing Director',
      credential: '',
      bio: 'Neo is a decisive and forward-thinking leader known for turning ideas into actionable, measurable results. With a practical approach to strategy and a strong focus on execution, he excels in building structure, driving operational clarity, and ensuring teams deliver at a high standard. His leadership style balances discipline, adaptability, and a deep commitment to creating systems that scale. Neo is driven by impact, guided by strong principles, and trusted for his ability to bring stability, direction, and momentum to fast-growing organizations.',
      specialties: ['Operational Leadership', 'Strategic Execution', 'Organizational Development', 'Process Optimization'],
      email: 'neo@axiaconsultants.co.za',
      linkedin: '#'
    }
  ];

  const stats = [
    { number: '50+', label: 'Clients Served' },
    { number: '15+', label: 'Years Experience' },
    { number: '8', label: 'Industries' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-black to-emerald-950">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            About <span className="font-semibold text-emerald-400">Axia Consultants</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building financial clarity and operational excellence for businesses ready to reach their full potential.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 text-slate-900">
              Our <span className="font-semibold">Story</span>
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              Founded with a clear vision to transform how businesses approach finance and operations, Axia Consultants emerged from a recognition that many organizations struggle to bridge the gap between financial insight and operational execution.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our name, "Axia," derives from the Greek word meaning "value" or "worth", a principle that guides everything we do. We believe that true consulting value comes not from templates or generic advice, but from deep partnership, tailored solutions, and measurable results.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we serve ambitious organizations across South Africa and beyond, helping them navigate financial complexity, optimize operations, and build sustainable competitive advantages. Our approach combines rigorous financial discipline with innovative operational thinking, delivering solutions that work in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Motto Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-emerald-400 text-emerald-400 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-light mb-4">
                Our <span className="font-semibold text-emerald-400">Mission</span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To empower businesses with the financial clarity and operational excellence they need to make confident decisions, achieve sustainable growth, and create lasting value for all stakeholders.
              </p>
            </div>

            {/* Motto */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-emerald-400 text-emerald-400 mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-light mb-4">
                Our <span className="font-semibold text-emerald-400">Motto</span>
              </h3>
              <p className="text-3xl font-light text-emerald-400 italic mb-4">
                "Precision in Finance, Excellence in Operations"
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that exceptional business performance requires both financial precision and operational excellence working in harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-slate-900">
              Our <span className="font-semibold">Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our relationships with clients, partners, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-emerald-500 text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Leadership Team Section */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-slate-900">
              Our <span className="font-semibold">Leadership</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving Axia Consultants forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-slate-900 to-emerald-950 p-8 text-white text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-emerald-600 rounded-full flex items-center justify-center text-4xl font-bold">
                    <img src={member.image} alt="" className="rounded-full" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-emerald-400 font-medium mb-1">{member.role}</p>
                  <p className="text-emerald-200 text-sm">{member.credential}</p>
                </div>

                {/* Body */}
                <div className="p-8">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm border border-emerald-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  {/*<div className="flex gap-4 pt-6 border-t border-slate-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Ready to Work <span className="font-semibold text-emerald-400">With Us?</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's discuss how Axia Consultants can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg tracking-wide transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}