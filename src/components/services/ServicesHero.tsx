import Link from "next/link";
import Image from "next/image";
import { FiChevronRight, FiArrowRight, FiLayers } from "react-icons/fi";

export default function ServicesHero() {
  const stats = [
    { value: "100%", label: "Remote" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "50+", label: "Projects Delivered" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-100">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <FiChevronRight className="h-4 w-4" />
            <span className="text-black">Services</span>
          </nav>
        <div className="">
          
          {/* LEFT COLUMN: Text, Stats, and Buttons */}
          <div className="">
            {/* Label */}
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-brand-purple py-2 px-3 bg-brand-purple/10 rounded-lg mb-4">
              What We Do
            </h2>
            
            {/* Main Headline */}
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-brand-indigo sm:text-5xl lg:text-6xl leading-tight">
              Comprehensive 
              <span className="text-brand-purple"> Digital Services</span>
            </h1>
            
            {/* Description */}
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
            From consultation to developing any software solutions, we deliver end-to-end technology services that help your businesses innovate, scale and stay ahead of others.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 border-y border-gray-200 py-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-syne text-3xl font-extrabold text-brand-indigo">{stat.value}</p>
                  <p className="font-inter text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
              // link to the celendly
                href="https://calendly.com/codewarriorstech/new-meeting"
                className="inline-flex items-center justify-center rounded-lg bg-brand-purple px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-purple/80 shadow-sm"
              >
                Book a Free Consultation
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
        </div>
      </div>
    </section>
  );
}