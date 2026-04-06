import Link from "next/link";
import { FiCloud, FiSmartphone } from "react-icons/fi";
import { SquareCode, MoveRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description: "Our software development services bring your ideas to life with diverse technologies and methodologies. From concept to final product, we deliver custom solutions tailored to your unique business requirements.",
      icon: <SquareCode className="h-6 w-6" />,
      color: "bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white", 
      href: "/services/software-engineering",
    },
    {
      title: "Consultation",
      description: "Our consultation services turn complex business ideas into actionable roadmaps through deep industry insights and strategic foresight. From the initial assessment to sustainable execution, we provide high-impact guidance tailored to your unique vision and business objectives.",
      icon: <FiCloud className="h-6 w-6" />,
      color: "bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white",
      href: "/services/consultation",
    },
    {
      title: "Training and Tutoring",
      description: "Our training and tutoring services bridge the gap between curiosity and mastery through personalized learning paths and hands-on mentorship. From foundational concepts to advanced expertise, we provide tailored educational experiences designed to meet your unique goals and accelerate your growth.",
      icon: <FiSmartphone className="h-6 w-6" />,
      color: "bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white",
      href: "/services/training-and-tutoring",
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER AREA */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-[#7C3AED] py-2 px-3 bg-[#7C3AED]/10 rounded-lg">
            Our Services
          </h2>
          <h3 className="mt-4 font-syne text-3xl font-bold tracking-tight text-brand-indigo sm:text-4xl">
            What We Offer
          </h3>
          <p className="mt-4 font-inter text-lg text-gray-600">
          Comprehensive digital solutions tailored to meet your business needs and power your business growth .
          </p>
        </div>

        {/* BOTTOM GRID AREA */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service, index) => (
            <Link
              href={service.href} 
              key={index} 
              className="group relative block rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              {/* Icon Container with hover effects */}
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${service.color}`}>
                {service.icon}
              </div>

              <h4 className="mb-3 font-syne text-xl font-bold text-brand-indigo transition-colors group-hover:text-[#7C3AED]">
                {service.title}
              </h4>

              <p className="font-inter text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        <div className="hidden justify-center mt-12 w-full">
          <Link href="/services">
            <button className="flex gap-3 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700">
               View All Services
               <MoveRight />
            </button>
            </Link>
        </div>

      </div>
    </section>
  );
}