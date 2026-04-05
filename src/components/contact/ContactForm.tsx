"use client";

import Link from "next/link";
import { 
  FiChevronRight, 
  FiMail, 
  FiPhoneCall, 
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiSend
} from "react-icons/fi";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA */}
        <div className=" max-w-[95rem]  mb-16">
          {/* Breadcrumbs */}
          <nav className="mb-10 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <FiChevronRight className="h-4 w-4" />
            <span className="text-black">Contact</span>
          </nav>

          <h2 className="font-syne text-sm font-bold uppercase tracking-wider py-2 px-3 rounded-lg text-brand-purple bg-brand-purple/10 mb-4 w-fit">
            GET IN TOUCH
          </h2>
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Let's Start a <span className="text-brand-purple">Conversation</span>
          </h1>
          <p className="font-inter text-lg text-gray-600 leading-relaxed max-w-2xl">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Reach out and let's build something amazing together.
          </p>
        </div>

        {/* (Contact Info + Form) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Contact Cards & Socials */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                <FiMail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-syne text-lg font-bold text-gray-900">Email Us</h4>
                <p className="mt-1 font-inter text-sm font-medium text-gray-900">codewarriorstech@gmail.com</p>
                <p className="mt-1 font-inter text-xs text-gray-500">We reply within 24 hours</p>
              </div>
            </div>

            {/* Call Card */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <FiPhoneCall className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-syne text-lg font-bold text-gray-900">Call Us</h4>
                <p className="mt-1 font-inter text-sm font-medium text-gray-900">+234 805 657 1766</p>
                <p className="mt-1 font-inter text-xs text-gray-500">Mon - Fri, 9am - 6pm WAT</p>
              </div>
            </div>

            {/* Visit Card */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                <FiMapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-syne text-lg font-bold text-gray-900">Visit Us</h4>
                <p className="mt-1 font-inter text-sm font-medium text-gray-900">Kaduna, Nigeria</p>
                <p className="mt-1 font-inter text-xs text-gray-500">Our headquarters</p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4">
              <h4 className="font-syne text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4 flex-wrap">
                            <a href="https://www.facebook.com/codewariors02" className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FiFacebook className="h-4 w-4" />
                            </a>
                            <a href="https://x.com/codewarriors02?t=YsAvpmq0Uix4pQETxEKMTw&s=09 " className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FaXTwitter className="h-4 w-4" /> {/* Represents X */}
                            </a>
                            <a href="https://www.instagram.com/code_warriors_team_ " className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FiInstagram className="h-4 w-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/code-warriors-tech/" className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FiLinkedin className="h-4 w-4" />
                            </a>
                            <a href="https://www.tiktok.com/@code_warriors_team" className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FaTiktok className="h-4 w-4" />
                            </a>
                            <a href=" https://youtube.com/@codewarriorstech" className="rounded-md bg-brand-purple/10 p-2.5 text-brand-purple transition-colors hover:bg-brand-purple hover:text-white">
                              <FaYoutube className="h-4 w-4" />
                            </a>
                          </div>
            </div>
          </div>

          {/* The Form*/}
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 lg:col-span-8 lg:p-12">
            <h3 className="font-syne text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="font-inter text-sm text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-inter text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-inter text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400" required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block font-inter text-sm font-medium text-gray-700">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="tel" id="phone" placeholder="+234 XXX XXXX" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block font-inter text-sm font-medium text-gray-700">Company <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" id="company" placeholder="Your company name" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block font-inter text-sm font-medium text-gray-700">Service Interest</label>
                <select id="service" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400 appearance-none cursor-pointer">
                  <option>Select a service</option>
                  <option>Software Development</option>
                  <option>SaaS Solutions</option>
                  <option>Mobile Apps</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-inter text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                <textarea id="message" rows={5} placeholder="Tell us about your project" className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-inter text-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-1 focus:ring-purple-400" required></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-8 py-4 font-inter text-base font-bold text-white shadow-md transition-all hover:bg-purple-500 hover:shadow-lg">
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