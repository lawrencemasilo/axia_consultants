import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_name: "AXIA Consultants",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSending(false);
        setSubmitted(true); // show success
        setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" }); // clear immediately
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        setIsSending(false);
        console.error("EmailJS Error:", err);
        setFailed(true); // show failure
        setTimeout(() => setFailed(false), 3000);
      });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-black to-emerald-950">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Let's Start a <span className="font-semibold text-emerald-400">Conversation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with our team to explore how we can support your strategic and operational objectives.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", info: ["Sandton, Johannesburg", "Gauteng, South Africa"] },
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: ["+27 73 981 8176", "Mon-Fri: 8AM - 6PM"] },
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: ["contact@axiaconsultant.co.za"] },
              { icon: <Clock className="w-6 h-6" />, title: "Business Hours", info: ["Monday - Friday", "8:00 AM - 6:00 PM SAST"] },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                {item.info.map((line, i) => (
                  <p key={i} className="text-slate-600 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 tracking-tight">
              Send Us a <span className="font-semibold">Message</span>
            </h2>
            <p className="text-lg text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          {/* Success / Failure Messages */}
          {submitted && (
            <div className="bg-emerald-50 border-2 border-emerald-500 p-6 text-center animate-fade-in mb-6">
              <CheckCircle className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
              <p className="text-emerald-700 font-semibold">Message sent successfully!</p>
            </div>
          )}
          {failed && (
            <div className="bg-red-50 border-2 border-red-500 p-6 text-center animate-fade-in mb-6">
              <XCircle className="w-12 h-12 mx-auto text-red-600 mb-2" />
              <p className="text-red-700 font-semibold">Failed to send message. Try again.</p>
            </div>
          )}

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="Themba Nkosi"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="themba@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="+27 12 345 6789"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Service Interest *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900"
                required
              >
                <option value="">Select a service...</option>
                <option value="financial">Financial Management</option>
                <option value="advisory">Business Advisory</option>
                <option value="compliance">Compliance & Governance</option>
                <option value="operational">Operational Excellence</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-500 focus:outline-none transition-colors text-slate-900 resize-none"
                placeholder="Tell us about your needs and how we can help..."
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSending}
              className={`w-full bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Send className="w-5 h-5" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </section>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}
