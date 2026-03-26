import { FiMessageSquare, FiCode, FiLayout } from "react-icons/fi";
import { Rocket } from 'lucide-react';

export default function ServicesWorkflow() {
  const steps = [
    {
      id: "01",
      title: "Consultancy First",
      description: "We start by understanding your business needs, goals, challenges, and requirements through in-depth consultations to define the project scope.",
      icon: <FiMessageSquare className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: "02",
      title: "Planning & Design",
      description: "Our team does immediate product research and creates detailed Project Documents, Development Milestones, Userflow, High-Fidelity Prototypes to visualize the solution before development begins. We communicate each step with our clients.",
      icon: <FiLayout className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: "03",
      title: "Development & Testing",
      description: "Using agile methodology, we build your solution iteratively with continuous internal testing to ensure quality at every development stage.",
      icon: <FiCode className="h-6 w-6" />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      id: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing maintenance, updates, and 24/7 support to ensure long-term success.",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="ont-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mx-auto mb-4">
            How We Work
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight mb-6">
            Our Development Process
          </h3>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
          We leverage on the latest and most reliable technologies to deliver projects on time using this process.
          </p>
        </div>

        {/* WORKFLOW CARDS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white px-8 py-2 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className=" text-center z-50 font-syne text-md mx-auto font-black text-white bg-blue-500 p-2 mb-10 rounded-full w-fit transition-colors duration-300 pointer-events-none">
                {step.id}
              </div>

              {/* CARD CONTENT (Foreground) */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Icon Container */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl mx-auto transition-colors duration-300 ${step.color} group-hover:bg-blue-600 group-hover:text-white`}>
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mb-4 font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="font-inter text-base text-gray-600 leading-relaxed flex-grow">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}