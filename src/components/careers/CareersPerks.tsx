import { 
  FiDollarSign, 
  FiMapPin, 
  FiHeart, 
  FiBookOpen, 
  FiCalendar, 
  FiSmile 
} from "react-icons/fi";

export default function CareersPerks() {
  const perks = [
    {
      title: "Competitive Salary",
      description: "We offer market-competitive compensation packages with regular reviews and performance bonuses.",
      icon: <FiDollarSign className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    },
    {
      title: "Remote Flexibility",
      description: "Work from anywhere. We support fully remote, hybrid, or in-office arrangements based on your preference.",
      icon: <FiMapPin className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance coverage for you and your family, plus wellness programs.",
      icon: <FiHeart className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    },
    {
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, certifications, and mentorship programs.",
      icon: <FiBookOpen className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    },
    {
      title: "Flexible PTO",
      description: "Generous paid time off policy with flexible scheduling to maintain work-life balance.",
      icon: <FiCalendar className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    },
    {
      title: "Great Culture",
      description: "Collaborative environment with team events, hackathons, and a supportive community.",
      icon: <FiSmile className="h-6 w-6" />,
      color: "text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white",
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-brand-purple py-2 px-3 bg-brand-purple/10 rounded-lg mb-4">
            Why Join Us
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Benefits & Perks
          </h3>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            We believe in taking care of our team. Here's what you can expect when you join Code Warriors Tech.
          </p>
        </div>

        {/* PERKS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              {/* Icon */}
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${perk.color}`}>
                {perk.icon}
              </div>

              {/* Title */}
              <h4 className="mb-3 font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-purple">
                {perk.title}
              </h4>

              {/* Description */}
              <p className="font-inter text-base text-gray-600 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}