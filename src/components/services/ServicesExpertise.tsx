"use client"; // Required because we are adding click interactivity and state!

import { useState } from "react";
import { 
  FiMonitor, 
  FiCloud, 
  FiSmartphone, 
  FiCheckSquare, 
  FiCpu, 
  FiShield,
  FiChevronDown // Added the down arrow icon
} from "react-icons/fi";

export default function ServicesExpertise() {
  // State to track which card is currently open. 
  // It holds the index (number) of the open card, or null if all are closed.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Function to handle the click
  const toggleCard = (index: number) => {
    // If the clicked card is already open, close it (set to null). Otherwise, open it.
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // We added a new 'details' property to each item for the expanded view!
  const expertise = [
    {
      title: "Software Development",
      description: "Our software development services bring your ideas to life with diverse technologies and methodologies. From concept to final product, we deliver custom solutions tailored to your unique business requirements.",
      details: "We utilize Agile methodologies, automated testing, and CI/CD pipelines to ensure rapid, reliable delivery. Our expertise covers React, Next.js, Node.js, Python, and enterprise-grade architecture.",
      icon: <FiMonitor className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    },
    {
      title: "SaaS Solutions",
      description: "Elevate your business with our SaaS solutions. We specialize in developing scalable and user-friendly software delivered as a service, enabling you to reach customers globally with minimal infrastructure.",
      details: "Our SaaS platforms feature multi-tenant architectures, secure payment gateways (Stripe/PayPal integration), role-based access control, and comprehensive analytics dashboards.",
      icon: <FiCloud className="h-6 w-6" />,
      color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    },
    {
      title: "Android & iOS Apps",
      description: "We specialize in developing user-friendly and innovative mobile apps for Android and iOS. Whether you need a native app or a cross-platform solution, we deliver seamless mobile experiences.",
      details: "We build natively using Swift and Kotlin, or cross-platform using React Native and Flutter, ensuring high performance, offline capabilities, and seamless API integrations.",
      icon: <FiSmartphone className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    },
    {
      title: "QA and Testing",
      description: "Quality assurance is at the heart of our services. Our dedicated QA and testing team meticulously assesses every aspect of your software to ensure it is bug-free, secure, and performs flawlessly.",
      details: "Our QA process includes rigorous unit testing, integration testing, end-to-end (E2E) automation using Cypress/Selenium, and performance load testing to guarantee stability.",
      icon: <FiCheckSquare className="h-6 w-6" />,
      color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of Artificial Intelligence to automate complex processes, gain actionable insights from your data, and create smarter, more predictive applications.",
      details: "We integrate state-of-the-art NLP models (like OpenAI), computer vision, and predictive data modeling to transform your raw data into automated, intelligent business workflows.",
      icon: <FiCpu className="h-6 w-6" />,
      color: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement robust security protocols to safeguard your data, applications, and infrastructure from emerging threats.",
      details: "Our security services include vulnerability assessments, penetration testing, zero-trust architecture implementation, and compliance auditing (GDPR, HIPAA, SOC2).",
      icon: <FiShield className="h-6 w-6" />,
      color: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mx-auto mb-4">
            Our Expertise
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight mb-6">
            Services We Provide
          </h3>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            We offer a full spectrum of technology services designed to help your business grow, innovate, and lead in the digital landscape.
          </p>
        </div>

        {/* GRID AREA */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {expertise.map((service, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div 
                key={index}
                onClick={() => toggleCard(index)}
                className={`group relative cursor-pointer rounded-2xl bg-white p-8 shadow-sm border transition-all duration-300 hover:shadow-xl ${
                  isOpen ? "border-blue-200 ring-1 ring-blue-50" : "border-gray-100 hover:-translate-y-1"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${service.color}`}>
                    {service.icon}
                  </div>
                  
                  {/* The Down Arrow Icon */}
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "group-hover:bg-blue-50 group-hover:text-blue-600"}`}>
                    <FiChevronDown className="h-5 w-5" />
                  </div>
                </div>

                {/* Title */}
                <h4 className={`mb-4 font-syne text-xl font-bold transition-colors ${isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}`}>
                  {service.title}
                </h4>

                {/* Description */}
                <p className="font-inter text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="font-inter text-sm text-gray-700 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                      <span className="font-semibold text-blue-800 block mb-1">Deeper Dive:</span>
                      {service.details}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}