import Link from "next/link";
import { FiCloud, FiSmartphone, FiLink, FiWifi } from "react-icons/fi";
import { SquareCode, Brain, MoveRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description: "Custom solutions from concept to final product using diverse technologies and methodologies.",
      icon: <SquareCode className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white", 
    },
    {
      title: "Consultation",
      description: "Scalable and user-friendly software delivered as a service to elevate your business.",
      icon: <FiCloud className="h-6 w-6" />,
      color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    },
    {
      title: "Training and Tutoring",
      description: "User-friendly and innovative mobile apps for Android and iOS platforms.",
      icon: <FiSmartphone className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    }
    // {
    //   title: "Artificial Intelligence",
    //   description: "Advanced AI integration to automate processes and provide intelligent insights for growth.",
    //   icon: <Brain className="h-6 w-6" />,
    //   color: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    // },
    // {
    //   title: "Blockchain",
    //   description: "Secure and transparent decentralized solutions to revolutionize your digital transactions.",
    //   icon: <FiLink className="h-6 w-6" />,
    //   color: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white", 
    // },
    // {
    //   title: "Internet of Things",
    //   description: "Connecting devices and systems for smarter, automated, and data-driven operations.",
    //   icon: <FiWifi className="h-6 w-6" />,
    //   color: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
    // }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER AREA */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg">
            Our Services
          </h2>
          <h3 className="mt-4 font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </h3>
          <p className="mt-4 font-inter text-lg text-gray-600">
          Comprehensive digital solutions tailored to meet your business needs and power your business growth .
          </p>
        </div>

        {/* BOTTOM GRID AREA */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              {/* Icon Container with hover effects */}
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${service.color}`}>
                {service.icon}
              </div>

              <h4 className="mb-3 font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                {service.title}
              </h4>

              <p className="font-inter text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

        {/* VIEW ALL BUTTON (Polished to match UI) */}
        <div className="flex justify-center mt-12 w-full">
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