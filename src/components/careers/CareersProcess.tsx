import { 
  FiFileText, 
  FiPhoneCall, 
  FiCode, 
  FiUsers, 
  FiAward 
} from "react-icons/fi";

export default function CareersProcess() {
  // The exact 5 hiring steps from your UI design
  const steps = [
    {
      id: "STEP 01",
      title: "Application",
      description: "Submit your application through our contact form with your resume and portfolio.",
      icon: <FiFileText className="h-6 w-6" />,
    },
    {
      id: "STEP 02",
      title: "Initial Screening",
      description: "Our HR team reviews your application and schedules an initial call to discuss your background.",
      icon: <FiPhoneCall className="h-6 w-6" />,
    },
    {
      id: "STEP 03",
      title: "Technical Assessment",
      description: "Complete a take-home assignment or live coding session relevant to the role.",
      icon: <FiCode className="h-6 w-6" />,
    },
    {
      id: "STEP 04",
      title: "Team Interview",
      description: "Meet with team members and leadership to discuss culture fit and expectations.",
      icon: <FiUsers className="h-6 w-6" />,
    },
    {
      id: "STEP 05",
      title: "Offer & Onboarding",
      description: "Receive your offer and begin your journey with Code Warriors Tech!",
      icon: <FiAward className="h-6 w-6" />,
    }
  ];

  return (
    // Clean white background to contrast with the gray Open Positions section
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-brand-purple py-2 px-3 bg-brand-purple/10 rounded-lg mb-4">
            Our Process
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            How We Hire
          </h3>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            Our hiring process is designed to be transparent, fair, and efficient. Here's what to expect.
          </p>
        </div>

        {/* TIMELINE AREA */}
        <div className="relative">
          
          {/* THE CONNECTING LINE */}
          {/* Mobile: Vertical line. Desktop: Horizontal dashed line through the middle */}
          <div className="md:absolute w-0.5 border-l-2 border border-brand-purple lg:left-0 lg:right-0 lg:top-40 lg:h-0.5 lg:w-full lg:border-l-0 lg:border-t-2 lg:-translate-y-1/2"></div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col lg:items-center lg:text-center"
              >
                {/* Mobile Layout Wrapper to keep icon and text side-by-side on small screens */}
                <div className="flex lg:flex-col lg:items-center gap-6 lg:gap-0 w-full h-[21rem] py-5 px-3 border bg-white shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-brand-purple rounded-md">
                  
                  {/* ICON CONTAINER */}
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-brand-purple/10 text-brand-purple shadow-sm transition-transform duration-300  group-hover:bg-brand-purple group-hover:text-white lg:mb-8">
                    {step.icon}
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="flex-1 pt-2 lg:pt-0">
                    <p className="mb-2 font-inter text-xs font-bold tracking-widest text-brand-purple">
                      {step.id}
                    </p>
                    <h4 className="mb-3 font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-purple">
                      {step.title}
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}