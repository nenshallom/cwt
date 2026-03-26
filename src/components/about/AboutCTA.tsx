import Link from "next/link";
import Image from "next/image";

export default function AboutCTA() {
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
        
        {/* Pre-Heading */}
        <h2 className="mb-4 font-inter text-sm font-bold uppercase tracking-widest text-[#0ea5e9]">
          Ready to Start?
        </h2>
        
        {/* Main Heading */}
        <h3 className="mb-6 font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
          Let's Build Something Amazing <br className="hidden sm:block" /> Together
        </h3>
        
        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl font-inter text-lg leading-relaxed text-slate-300">
          Whether you need a custom web application, mobile app, or enterprise software solution, our team is ready to bring your vision to life with precision and creativity.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-[#0ea5e9] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:-translate-y-1"
          >
            Get in Touch
          </Link>
          
          <Link
            href="/portfolio"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1"
          >
            View Our Work
          </Link>
        </div>

      </div>
    </section>
  );
}