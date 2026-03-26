"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend } from "react-icons/fi";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  // Contact Information
  const contactInfo = [
    {
      icon: <FiMail className="h-6 w-6" />,
      label: "Email",
      value: "codewarriorstech@gmail.com ",
      href: "codewarriorstech@gmail.com ",
    },
    {
      icon: <FiPhone className="h-6 w-6" />,
      label: "Phone",
      value: "+234 805 657 1766",
      href: "tel:+234805 657 1766",
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
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mb-4">
            Contact Us
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
            lets Build For <span className="text-blue-600">Your</span> Business Together
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-purple-500 transition-colors group-hover:bg-purple-700 group-hover:text-white">
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
            href="/"
            className="flex gap-3 items-center font-bold text-black hover:text-purple-700 mt-4"
            >Visit full contact page
            <FiArrowRight />
            </Link>
          </div>

          {/* RIGHT COLUMN: The Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 sm:p-10">
            <h4 className="font-syne text-2xl font-bold text-gray-900">Quick Message</h4>
            <p className="font-inter text-sm text-gray-500 mt-2 mb-8">We'll get back to you within 24 hours.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-inter text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-inter text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                ></textarea>
                
                {/* Character Counter */}
                <div className="mt-2 flex justify-end">
                  <span className={`text-xs font-inter font-medium ${message.length >= maxChars ? 'text-red-500' : 'text-gray-400'}`}>
                    {message.length}/{maxChars}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-purple-500"
              >
                Send Message
                <FiSend className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}