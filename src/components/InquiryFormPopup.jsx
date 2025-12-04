import React from "react";

export default function InquiryFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
      <div className="bg-black text-white w-full max-w-lg p-8 rounded-xl border border-emerald-400/30 shadow-xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-emerald-400 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-emerald-400 text-center">
          Inquiry Form
        </h2>

        <form className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input 
              type="text"
              className="w-full bg-black border border-gray-700 focus:border-emerald-400 rounded-md px-4 py-2 outline-none transition"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input 
              type="email"
              className="w-full bg-black border border-gray-700 focus:border-emerald-400 rounded-md px-4 py-2 outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm mb-1">What do you need help with?</label>
            <select
              className="w-full bg-black border border-gray-700 focus:border-emerald-400 rounded-md px-4 py-2 outline-none"
            >
              <option>Financial Management</option>
              <option>Business Advisory</option>
              <option>Compliance & Governance</option>
              <option>Operational Support</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full bg-black border border-gray-700 focus:border-emerald-400 rounded-md px-4 py-2 outline-none"
              rows="4"
              placeholder="Tell us briefly what you're looking for..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-400 text-black font-semibold py-3 rounded-md hover:bg-emerald-300 transition"
          >
            Submit Inquiry
          </button>

        </form>
      </div>
    </div>
  );
}
