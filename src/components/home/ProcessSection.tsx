import { FiZap, FiTrendingUp } from "react-icons/fi";
import { Lightbulb, Rocket } from 'lucide-react';


export default function ProcessSection() {
  const processes = [
    {
      num: "1",
      title: "We think Big",
      description: "We understand your vision through strategic analysis and craft comprehensive solutions aligned with your business long-term objectives.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      num: "2",
      title: "We Start Small",
      description: "We break down complex projects into manageable phases for clarity and tangible deliveries at every milestone.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      num: "3",
      title: "We Create Fast",
      description: "We prioritize delivery speed without compromising quality. Our agile methodology enables quick adaptation to any product requirements.",
      icon: <FiZap className="h-6 w-6" />,
    },
    {
      num: "4",
      title: "We Scale Big",
      description: "We build for scalability and ensure our solutions are future-proof for your business growth.",
      icon: <FiTrendingUp className="h-6 w-6" />,
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER AREA */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-[#7C3AED] py-2 px-3 bg-[#7C3AED]/10 rounded-lg">
            How We Work
          </h2>
          <h3 className="mt-4 font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             Our Work Culture
          </h3>
          <p className="mt-4 font-inter text-lg text-gray-600">
          The proven methodology that ensures all project delivery successfully from conception to completion.
          </p>
        </div>

        {/* BOTTOM GRID AREA */}
        <div className="relative mt-16">
          
          {/* Faint connecting line for Desktop only */}
          <div className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gray-200 lg:block"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processes.map((step, index) => (
              <div 
                key={index} 
  
                className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 z-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* The Floating Number Badge */}
                <div className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED]/10 text-sm font-bold text-[#7C3AED] shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white">
                  {step.num}
                </div>

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] transition-colors duration-300 group-hover:bg-[#7C3AED] group-hover:text-white">
                  {step.icon}
                </div>

                {/* Step Title with hover effect */}
                <h4 className="mb-3 font-syne text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#7C3AED]">
                  {step.title}
                </h4>

                <p className="font-inter text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}