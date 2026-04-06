import Link from "next/link";
import { FiChevronRight, FiCheckCircle } from "react-icons/fi";

export default function AboutHero() {
  const bulletPoints = [
    "Custom software development tailored to your business",
    "Agile methodology for rapid delivery",
    "Dedicated team of expert developers",
    "24/7 support and maintenance",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-20 lg:pt-20  border-b border-gray-100">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <FiChevronRight className="h-4 w-4" />
            <span className="text-black">About</span>
          </nav>
          
          {/* LEFT COLUMN: Text Content */}
          <div className="">
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-brand-indigo sm:text-5xl lg:text-6xl leading-tight">
            Delivering Tailored Solutions for 
              <span className="text-brand-purple"> Unique Business Needs</span>
            </h1>
            
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed">
            We are committed to understanding the unique needs and objectives of each client and driving tangible business outcomes. Our mission is to empower businesses with innovative and cutting-edge digital solutions.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 shrink-0 text-brand-purple" />
                  <span className="font-inter text-base font-medium text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-brand-purple px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-gray-300 hover:bg-brand-purple/80"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}