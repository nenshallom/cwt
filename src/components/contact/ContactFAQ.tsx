"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ContactFAQ() {
  // We initialize state with '0' so the very first question is open by default, matching your UI design!
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data based on the questions in your UI design
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models tailored to your needs. This includes fixed-price contracts for well-defined projects and time-and-materials (hourly) billing for ongoing agile development.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, absolutely! We offer comprehensive maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally long after the initial launch.",
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern, enterprise-grade tech stacks including React, Next.js, Node.js, Python, PostgreSQL, and various cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      question: "Can you work with our existing team?",
      answer: "Definitely. Our developers and designers are highly adaptable and can integrate seamlessly with your in-house team to augment your capabilities and accelerate project delivery.",
    }
  ];

  return (
    // Light gray background to separate it from the white Map section above it
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="text-center mb-12">
          <h2 className="font-syne text-sm font-bold uppercase tracking-wider text-[#0ea5e9] mb-4">
            FAQ
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h3>
          <p className="font-inter text-lg text-gray-600">
            Find quick answers to common questions about our services and process.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                {/* QUESTION (Clickable Header) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-8"
                >
                  <span className={`font-syne text-lg font-bold transition-colors ${isOpen ? "text-purple-700" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  
                  {/* The Rotating Icon Box */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${isOpen ? "bg-black text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                    <FiChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* ANSWER (Expandable Content) */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-0 font-inter text-base text-gray-600 leading-relaxed sm:px-8 sm:pb-8">
                      {faq.answer}
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