import Link from "next/link";
import Image from "next/image";
import { FiChevronRight, FiCheckCircle, FiUsers } from "react-icons/fi";

export default function AboutHero() {
  const bulletPoints = [
    "Custom digital products tailored for your business",
    "Agile methodology for faster product launch ",
    "Dedicated team of expert Developers, Designers and project manager",
    "Ongoing support, optimization, and system maintenance",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-2xl">
          <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mb-4">
            About
          </h2>
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Building Digital <br className="hidden sm:block" />
              <span className="text-blue-600">Excellence Since Day One</span>
            </h1>
            
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
            Combining our deep technical expertise with strategic thinking, we are Committed to understanding the unique needs of our clients to build the digital solutions that drive business outcomes.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 shrink-0 text-blue-500" />
                  <span className="font-inter text-base font-medium text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-500 shadow-sm"
              >
                Learn More
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Image and Badge */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-gray-200 shadow-2xl overflow-hidden border border-white">
               <Image 
                 src="/aboutHero.png"
                 alt="Code Warriors Team" 
                 layout="fill" 
                 objectFit="cover" 
               />
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-100">
                  [ Team Working Image ]
               </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 z-20 flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-gray-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <FiUsers className="h-6 w-6" />
              </div>
              <div>
                <p className="font-syne text-base font-bold text-gray-900 leading-tight">Expert Team</p>
                <p className="font-inter text-xs text-gray-500 mt-1">Passionate Developers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}