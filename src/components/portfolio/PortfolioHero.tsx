import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function PortfolioHero() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "40+", label: "Happy Clients" },
    { value: "4+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-16  lg:pb-24 border-b border-gray-200">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        <div className=" max-w-3xl text-left">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <FiChevronRight className="h-4 w-4" />
            <span className="text-black">Portfolio</span>
          </nav>

          {/* Main Headers */}
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Our <span className="text-blue-500">Portfolio</span>
          </h1>
          <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
            Explore our collection of successful projects. Each project represents our commitment to delivering exceptional digital solutions that drive real business results.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-gray-200 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-syne text-4xl font-extrabold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 font-inter text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}