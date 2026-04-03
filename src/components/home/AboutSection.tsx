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
        
        <div className=" ">
          


          {/* RIGHT COLUMN: Text Content */}
          <div className="flex flex-col">
            
            {/* Section Label */}
            <div className="flex">
              <h2 className="font-syne text-sm font-bold uppercase tracking-wider text-[#7C3AED] mb-4 py-2 px-3 bg-[#7C3AED]/10 rounded-lg">
                About Us
              </h2>
            </div>
            

            {/* Main Headline */}
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Delivering Tailored Solutions for 
              <span className="text-[#7C3AED]"> Unique Business Needs</span>
            </h3>

            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
              We are committed to understanding the unique needs and objectives of each client and driving tangible business outcomes. Our mission is to empower businesses with innovative and cutting-edge digital solutions.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 mt-0.5">
                    <FiCheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="ml-3 font-inter text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-inter text-base font-semibold text-white transition-colors hover:bg-purple-500 py-2 px-3 bg-purple-700 rounded-lg"
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