"use client";

import Link from "next/link";
import { 
  FiFacebook,  
  FiInstagram, 
  FiLinkedin, 
  FiMapPin, 
  FiMail, 
  FiPhone
} from "react-icons/fi";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#a6a6a6] text-slate-300">
      
      {/* 2. MAIN FOOTER CONTENT  */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1*/}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span>
                <img src="/navLogo2.png" alt="Code Warriors Logo" className="h-12 w-12 rounded-lg" />
              </span>
              <span className="font-syne text-xl font-bold text-white">Code Warriors Tech</span>
            </Link>
            <p className="font-inter text-sm text-white leading-relaxed max-w-xs">
              Building innovative software solutions that empower businesses to thrive in the digital age.
            </p>
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

          {/* Column 2*/}
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-inter text-sm text-white">
              <li><Link href="/" className="transition-colors hover:text-brand-purple">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-brand-purple">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-brand-purple">Services</Link></li>
              <li><Link href="/portfolio" className="transition-colors hover:text-brand-purple">Portfolio</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-brand-purple">Careers</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-brand-purple">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white mb-6">Services</h4>
            <ul className="space-y-4 font-inter text-sm text-white">
              <li><Link href="/services/software-engineering" className="transition-colors hover:text-brand-purple">Software Development</Link></li>
              <li><Link href="/services/consultation" className="transition-colors hover:text-brand-purple">Consultation</Link></li>
              <li><Link href="/services/training-and-tutoring" className="transition-colors hover:text-brand-purple">Training and Tutoring</Link></li>
             
            </ul>
          </div>

          {/* Column 4*/}
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 font-inter text-sm text-white">
              <li className="flex items-start gap-3">
                <FiMapPin className="h-5 w-5 shrink-0 text-brand-purple" />
                <span>Kaduna, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="h-5 w-5 shrink-0 text-brand-purple" />
                <a href="mailto:info@codewarriors.tech" className="transition-colors hover:text-purple-400">codewarriorstech@gmail.com </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 shrink-0 text-brand-purple" />
                <a href="tel:+2340000000000" className="transition-colors hover:text-purple-400">+234 805 657 1766</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT BAR */}
      <div className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-white">
            &copy; {currentYear} Code Warriors Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
}