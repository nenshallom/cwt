import Link from "next/link";
import { Bell } from 'lucide-react';

export default function PortfolioCTA() {
  const industries = [
    "Education",
    "Healthcare",
    "E-Commerce",
    "Fitness",
    "Finance",
  ];

  return (
    <section className="bg-slate-800 py-16 lg:py-24 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Icon Area */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-blue-500 shadow-inner border border-slate-700">
          <Bell  className="h-8 w-8" /> 
        </div>

        {/* Text Content */}
        <h2 className="font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-inter text-lg leading-relaxed text-slate-400">
          Let's collaborate to bring your vision to life. Our team is ready to help you build something amazing.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-purple-500"
          >
            Start a Project
          </Link>
          
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-700 hover:border-slate-600"
          >
            Explore Services
          </Link>
        </div>

        {/* TRUST BANNER / INDUSTRIES ROW */}
        <div className="mt-20 border-t border-slate-800 pt-12">
          <p className="mb-8 font-inter text-sm font-semibold uppercase tracking-widest text-slate-500">
            Trusted by businesses across industries
          </p>
          
          {/* Industry Flex Container */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-14">
            {industries.map((industry, index) => (
              <span 
                key={index} 
                className="font-syne text-lg font-bold text-slate-300 transition-colors duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}