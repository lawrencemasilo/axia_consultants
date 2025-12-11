import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <>
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
            <div className="text-xl font-light tracking-wider mb-4">
                <span className="font-semibold">AXIA</span>CONSULTANTS
            </div>
            <p className="text-gray-400 text-sm">
                Strategic finance and operations consulting for high-performance businesses.
            </p>
            </div>
            <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="text-gray-400 text-sm space-y-2">
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Financial Management</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Business Advisory</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Compliance & Governance</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Operational Excellence</Link></li>
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
                <li><a href="mailto:contact@axiaconsultant.co.za" className="hover:text-emerald-400 transition-colors">contact@axiaconsultants.co.za</a></li>
                <li><a href="tel:+27739818176" className="hover:text-emerald-400 transition-colors">+27 73 981-8176</a></li>
                <li>South Africa</li>
            </ul>
            </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Axia Consultants. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
        </div>
        </div>
    </footer>
    </>
  );
}