import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesCTA() {
  return (
    <section className="bg-blue-500 py-16 lg:py-24 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform">
        <div className="h-64 w-64 rounded-full bg-blue-500/50 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 transform">
        <div className="h-64 w-64 rounded-full bg-blue-700/50 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Headline */}
        <h2 className="font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
          Ready to Build Something Amazing?
        </h2>
        
        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl font-inter text-lg text-blue-100 leading-relaxed">
          Let's discuss your project and find the perfect solution for your business. Our team is ready to turn your vision into reality.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-purple-500 hover:shadow-lg"
          >
            Start Your Project
            <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-400 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:border-white hover:bg-blue-500/20"
          >
            View Portfolio
          </Link>
        </div>
        
      </div>
    </section>
  );
}