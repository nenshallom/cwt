import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle, FiLayers } from "react-icons/fi";

export default function ServicesHero() {
  const stats = [
    { value: "8+", label: "Service Areas" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "50+", label: "Projects Delivered" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* LEFT COLUMN: Text, Stats, and Buttons */}
          <div className="max-w-2xl">
            {/* Label */}
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mb-4">
              What We Do
            </h2>
            
            {/* Main Headline */}
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Comprehensive <br className="hidden sm:block" />
              <span className="text-blue-600">Digital Services</span>
            </h1>
            
            {/* Description */}
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
              From custom software development to AI-powered solutions, we deliver end-to-end technology services that help businesses innovate, scale, and stay ahead of the competition.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 border-y border-gray-200 py-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-syne text-3xl font-extrabold text-gray-900">{stat.value}</p>
                  <p className="font-inter text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 shadow-sm"
              >
                Get a Free Quote
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Image and Floating Badges */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Main Image Container */}
            <div className="relative w-full rounded-3xl bg-gray-200 pb-[100%] shadow-2xl overflow-hidden border border-white">
               <Image 
                 src="/serviceHero.jpg" 
                 alt="Digital Services" 
                 layout="fill" 
                 objectFit="cover" 
                 className="rounded-3xl" 
               />
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-100">
                  [ Services Hero Image ]
               </div>
            </div>

            {/* Floating Badge 1: Top Left */}
            <div className="absolute -left-6  sm:-left-10 bottom-5 z-20 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-xl border border-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FiLayers className="h-5 w-5" />
              </div>
              <div>
                <p className="font-syne text-sm font-bold text-gray-900 leading-tight">Full-Stack<br/>Services</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}