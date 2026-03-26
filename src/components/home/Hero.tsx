import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCode } from "react-icons/fi"; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-28 mx-auto">
     <div className="absolute top-80 left-[100px] w-72 h-72 bg-green-500/20 border rounded-full blur-3xl pointer-events-none"></div>
      {/* Max width wrapper to keep content centered and constrained */}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
      
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-4">
          
          {/* LEFT COLUMN: Text and Buttons */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-3 text-md font-semibold text-blue-600 mb-6 font-inter">
              Welcome to Code Warriors Tech
            </div>

            {/* Main Headline */}
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building Secure & Innovative <br className="hidden sm:block" />
              <span className="text-blue-600">Software Solutions</span>
            </h1>

            {/* Subheadline description */}
            <p className="mt-6 font-inter text-lg text-gray-600 sm:text-xl">
            We empower businesses with secure and scalable digital products. From custom software development to AI-powered systems, We build your ideas into reality.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/codewarriorstech/new-meeting"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 shadow-sm"
              >
                Book a free Consultation
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                See past Projects
              </Link>
            </div>

            {/* hidden statistcs for now */}
            <div className="flex gap-6 mt-5 items-center text-center">
              
              <div>
                <p className="font-syne text-xl md:text-3xl font-bold text-black">50+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Projects Completed</p>
              </div>
              
              <div>
                <p className="font-syne text-xl md:text-3xl font-bold text-black">30+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Satisfied Clients</p>
              </div>
              
              <div className="hidden">
                <p className="font-syne text-xl md:text-2xl font-bold text-black">4+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Experience</p>
              </div>

              <div className="hidden">
                <p className="font-syne text-xl md:text-2xl font-bold text-black">100%</p>
                <p className="font-inter text-sm font-medium text-gray-600">Remote</p>
              </div>

              <div className="hidden">
                <p className="font-syne text-xl md:text-2xl font-bold text-black">24/7</p>
                <p className="font-inter text-sm font-medium text-gray-600">Support</p>
              </div>

              <div className="hidden">
                <p className="font-syne text-xl md:text-2xl font-bold text-black">15+</p>
                <p className="font-inter text-sm font-medium text-gray-600">Team & Interns</p>
              </div>
              
            </div>
          </div>

          {/* RIGHT COLUMN: Image and Statistics */}
          <div className="relative mx-auto w-[90%] sm:w-[90%] lg:w-full max-w-lg lg:max-w-none">
            <div className="relative w-full rounded-2xl bg-gray-100 pb-[75%] shadow-lg overflow-hidden border border-gray-200">
               <Image src={"/hero.jpg"} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl border border-gray-100 sm:-bottom-8 sm:-left-8">
              <div className="flex items-center gap-4">
                <div className="hidden flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FiCode className="h-6 w-6" />
                </div>
                <div className="flex gap-6 sm:gap-8">
                <div>
                  <p className="font-syne text-3xl sm:text-2xl font-extrabold text-blue-600">24/7</p>
                  <p className="font-inter text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Support</p>
                </div>

                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-syne text-3xl sm:text-2xl font-extrabold text-blue-600">100%</p>
                  <p className="font-inter text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Remote</p>
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