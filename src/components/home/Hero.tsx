import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-28 mx-auto">
     <div className="absolute top-80 left-[100px] w-72 h-72 bg-brand-purple/20 border rounded-full blur-3xl pointer-events-none"></div>
      {/* Max width wrapper to keep content centered and constrained */}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
      
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-4">
          
          {/* LEFT COLUMN: Text and Buttons */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-brand-purple/10 px-4 py-3 text-md font-semibold text-brand-purple mb-6 font-inter">
              Welcome to Code Warriors Tech
            </div>

            {/* Main Headline */}
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-brand-indigo sm:text-5xl lg:text-6xl">
            Building Secure & Innovative <br className="hidden sm:block" />
              <span className="text-brand-purple">Software Solutions</span>
            </h1>

            {/* Subheadline description */}
            <p className="mt-6 font-inter text-lg text-gray-600 sm:text-xl">
            We empower businesses with secure and scalable digital products. From custom software development to AI-powered systems, We build your ideas into reality.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/codewarriorstech/new-meeting"
                className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-500 shadow-sm"
              >
                Book a free Consultation
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-black transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                See past Projects
              </Link>
            </div>

            {/* hidden statistcs for now */}
            <div className="flex gap-6 mt-5 items-center text-center">
              
              <div>
                <p className="font-syne text-xl md:text-3xl font-bold text-brand-indigo">50+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Projects Completed</p>
              </div>
              
              <div>
                <p className="font-syne text-xl md:text-3xl font-bold text-brand-indigo">30+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Satisfied Clients</p>
              </div>
              
            </div>
          </div>

          {/* RIGHT COLUMN: Image and Statistics */}
          <div className="relative mx-auto w-[90%] sm:w-[90%] lg:w-full max-w-lg lg:max-w-none">
            <div className="relative w-full rounded-2xl bg-gray-100 pb-[75%] shadow-lg overflow-hidden border border-gray-200">
               <Image src={"/abthero.jpeg"} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-3 md:p-6 shadow-xl border border-gray-100 sm:-bottom-8 sm:-left-8">
              <div className="flex items-center gap-1">
                <div className="flex gap-2 md:gap-5">
                <div>
                  <p className="font-syne text-[13px] sm:text-2xl lg:text-3xl font-extrabold text-[#7C3AED]">24/7</p>
                  <p className="font-inter text-[10px] sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Support</p>
                </div>

                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-syne text-[13px] sm:text-2xl lg:text-3xl font-extrabold text-[#7C3AED]">100%</p>
                  <p className="font-inter text-[10px] sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Remote</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-syne text-[13px] sm:text-2xl lg:text-3xl font-extrabold text-[#7C3AED]">15+</p>
                  <p className="font-inter text-[10px] sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Team & Interns</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-syne text-[13px] sm:text-2xl lg:text-3xl font-extrabold text-[#7C3AED]">4+</p>
                  <p className="font-inter text-[10px] sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Years Experience</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}