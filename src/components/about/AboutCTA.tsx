import Link from "next/link";
import Image from "next/image";

export default function AboutCTA() {
  const industries = [
    "Education",
    "Healthcare",
    "E-Commerce",
    "Fitness",
    "Finance",
  ];
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32 text-center">

      <Image 
        src="/aboutCTA.jpg" 
        alt="Office Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0 opacity-90 grayscale" 
      /> 
    {/* overlay */}
      <div className="absolute inset-0 z-10 bg-slate-900/70"></div>

      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-inter text-lg leading-relaxed text-slate-400">
          Let's collaborate to bring your vision to life. Our team is ready to help you build something amazing.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-purple px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-brand-purple/80"
          >
            Start a Project
          </Link>
          
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Explore Services
          </Link>
        </div>

        {/* TRUST BANNER / INDUSTRIES ROW */}
        <div className="mt-20 border-t border-gray-500 pt-12">
          <p className="mb-8 font-inter text-sm font-semibold uppercase tracking-widest text-gray-200">
            Trusted by businesses across industries
          </p>
          
          {/* Industry Flex Container */}
          <div className="hidden flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-14">
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