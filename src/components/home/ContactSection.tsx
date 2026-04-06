"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function ContactSection() {
  // 1. Setup state to hold the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // 2. Setup state to track submission status
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const maxChars = 500;

  // 3. Handle typing in the inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // 4. Handle hitting the submit button
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Reusing the exact same API route!
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Clear the form fields
        setFormData({ name: "", email: "", message: "" });
        // Hide the success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // Contact Information
  const contactInfo = [
    {
      icon: <FiMail className="h-6 w-6" />,
      label: "Email",
      value: "codewarriorstech@gmail.com ",
      href: "mailto:codewarriorstech@gmail.com", // Updated to act as a real mailto link
    },
    {
      icon: <FiPhone className="h-6 w-6" />,
      label: "Phone",
      value: "+234 805 657 1766",
      href: "tel:+2348056571766",
    },
    {
      icon: <FiMapPin className="h-6 w-6" />,
      label: "Location",
      value: "Kaduna, Nigeria",
      href: "#", 
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Text & Contact Info */}
          <div>
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-brand-purple py-2 px-3 bg-brand-purple/10 rounded-lg mb-4">
              Contact Us
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Let's Build For <span className="text-brand-purple">Your</span> Business Together
            </h3>
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed max-w-lg mb-10">
              Ready to start your project? Contact us and let's discuss how we can grow your business ideas with innovative technology.
            </p>

            {/* Contact Info Blocks */}
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-purple-500 transition-colors group-hover:bg-brand-purple group-hover:text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-gray-500">{info.label}</p>
                    <p className="font-syne text-lg font-bold text-gray-900 mt-1">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <Link 
              href="/contact"
              className="flex gap-3 items-center font-bold text-black hover:text-purple-700 mt-4"
            >
              Visit full contact page
              <FiArrowRight className="transition-transform hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT COLUMN: The Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 sm:p-10">
            <h4 className="font-syne text-2xl font-bold text-gray-900">Quick Message</h4>
            <p className="font-inter text-sm text-gray-500 mt-2 mb-8">We'll get back to you within 24 hours.</p>
            
            {/* Form wired to handleSubmit */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-inter text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-brand-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-inter text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-brand-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/10 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block font-inter text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={maxChars}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-brand-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/10 transition-all resize-none"
                ></textarea>
                
                {/* Character Counter */}
                <div className="mt-2 flex justify-end">
                  <span className={`text-xs font-inter font-medium ${formData.message.length >= maxChars ? 'text-brand-magenta' : 'text-gray-400'}`}>
                    {formData.message.length}/{maxChars}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-brand-purple px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-brand-purple/80 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <FiSend className={`h-5 w-5 transition-transform ${status === "loading" ? "animate-pulse" : "group-hover:-translate-y-1 group-hover:translate-x-1"}`} />
              </button>

              {/* Feedback Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 mt-4 text-green-700 bg-green-50 rounded-lg border border-green-200">
                  <FiCheckCircle className="h-5 w-5" />
                  <span className="font-inter text-sm font-medium">Message sent! We'll be in touch soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 mt-4 text-red-700 bg-red-50 rounded-lg border border-red-200">
                  <FiAlertCircle className="h-5 w-5" />
                  <span className="font-inter text-sm font-medium">Error sending message. Please try again.</span>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}