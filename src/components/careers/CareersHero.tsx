import Link from "next/link";
import Image from "next/image";
import { FiChevronRight, FiBriefcase } from "react-icons/fi";

export default function CareersHero() {
  const stats = [
    { value: "15+", label: "Team Members" },
    { value: "6", label: "Open Positions" },
    { value: "100%", label: "Remote Friendly" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-24 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-100">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* LEFT COLUMN: Text Content & Stats */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="mb-10 flex items-center gap-2 text-sm font-medium text-gray-500">
              <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
              <FiChevronRight className="h-4 w-4" />
              <span className="text-black">Careers</span>
            </nav>

            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Join Our Team of <br className="hidden sm:block" />
              <span className="text-brand-purple">Innovators & Builders</span>
            </h1>
            
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
              We're looking for passionate individuals who want to make an impact. At Code Warriors Tech, you'll work on exciting projects, grow your skills, and be part of a collaborative team that values creativity and innovation.
            </p>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200 py-6 sm:py-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-syne text-2xl sm:text-3xl font-extrabold text-brand-purple">{stat.value}</p>
                  <p className="font-inter uppercase text-xs sm:text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-500 shadow-sm"
              >
                View Open Positions
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Image and Badge */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-gray-200 shadow-2xl overflow-hidden border border-white">
               <Image 
                 src="/career-hero.png" 
                 alt="Team collaborating" 
                 layout="fill" 
                 objectFit="cover" 
               />
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-100">
                  [ Careers Hero Image ]
               </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-gray-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                <FiBriefcase className="h-6 w-6" />
              </div>
              <div>
                <p className="font-syne text-base font-bold text-gray-900 leading-tight">We're Hiring!</p>
                <p className="font-inter text-xs text-gray-500 mt-1">Multiple Positions</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}