import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  const features = [
    "Custom software development tailored to your business",
    "Agile methodology for rapid delivery",
    "Dedicated team of expert developers",
    "24/7 support and maintenance",
  ];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* LEFT COLUMN: Image Box */}
          <div className="relative mx-auto w-[90%] sm:w-full max-w-lg lg:max-w-none">
            {/* Soft decorative blur */}
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full rounded-3xl bg-gray-100 shadow-xl overflow-hidden pb-[100%] sm:pb-[80%] border border-gray-100">
              <Image 
                src="/aboutImg.jpg" 
                alt="About Code Warriors Tech" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-3xl" 
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-50">
                [ About Us Image ]
              </div>
            </div>


            <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 rounded-2xl bg-white p-3 sm:p-6 shadow-xl border border-gray-100">
              <div className="flex gap-6 sm:gap-8">
                <div>
                  <p className="font-syne text-3xl sm:text-2xl font-extrabold text-blue-600">15+</p>
                  <p className="font-inter text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Team & Interns</p>
                </div>

                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-syne text-3xl sm:text-2xl font-extrabold text-blue-600">4+</p>
                  <p className="font-inter text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">Experience</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="flex flex-col">
            
            {/* Section Label */}
            <div className="flex">
              <h2 className="font-syne text-sm font-bold uppercase tracking-wider text-blue-600 mb-4 py-2 px-3 bg-blue-500/20 rounded-lg">
                About Us
              </h2>
            </div>
            

            {/* Main Headline */}
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Delivering Tailored Solutions for <br className="hidden xl:block" />
              <span className="text-blue-600">Unique Business Needs</span>
            </h3>

            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
              We are committed to understanding the unique needs and objectives of each client and driving tangible business outcomes. Our mission is to empower businesses with innovative and cutting-edge digital solutions.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 mt-0.5">
                    <FiCheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 font-inter text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-inter text-base font-semibold text-white transition-colors hover:text-blue-700 py-2 px-3 bg-blue-500 rounded-lg"
              >
                Learn More About Us
                <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}