import Link from "next/link";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-900 py-16 lg:py-24 text-center">
      
      {/* Decorative Blur: Enhances the gradient with a subtle top glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[80px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl py-6 bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-800 ">
        
        {/* Main Content */}
        <h2 className="font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Don't See the Right Role?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-inter text-lg leading-relaxed text-slate-300">
          We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="mailto:careers@codewarriors.tech"
            className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-blue-700"
          >
            Send Your Resume
          </a>
          
          <Link
            href="/about"
            className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-700"
          >
            Learn About Us
          </Link>
        </div>

        {/* Bottom Contact Links */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-slate-800/60 pt-8 sm:flex-row sm:gap-12">
          <a 
            href="mailto:careers@codewarriors.tech" 
            className="group flex items-center gap-2 font-inter text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
          >
            <FiMail className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            careers@codewarriors.tech
          </a>
          <a 
            href="https://linkedin.com/company/codewarriorstech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-inter text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
          >
            <FiLinkedin className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            Follow us on LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}