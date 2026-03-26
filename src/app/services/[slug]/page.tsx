import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiCheckCircle, FiChevronLeft } from "react-icons/fi";

// 1. The Data Dictionary
// This maps the URL slug to the correct heading and list of stacked cards
const expertiseData: Record<string, { heading: string; cards: string[] }> = {
  "software-engineering": {
    heading: "Software Engineering",
    cards: [
      "Web & Mobile Application Development",
      "Website design Development",
      "Website Redesign & Maintenance",
      "Website SEO Optimization",
      "Quality Assurance & Testing",
      "Product Design & Redesign",
      "Go-to-Market Strategy",
      "Blockchain solutions",
      "AI powered solutions",
    ],
  },
  "consultation": {
    heading: "Consultation",
    cards: [
      "Business Development & Growth Strategy",
      "Technical Consultation",
      "MVP Development for Startups",
    ],
  },
  "training-and-tutoring": {
    heading: "Training and Tutoring",
    cards: [
      "Foundational level Programming language",
      "Advance level Full Stack Web Development",
      "Mobile Development",
      "Cloud Architecture & DevOps Learning",
      "Foundation - Advance UI/UX design",
      "Agile Project Management",
      "Digital Marketing",
      "Accreditations on Training programs",
      "Tech Workshops",
      "Training Partnerships",
    ],
  },
};

// 2. The Page Component
export default async function ExpertisePage({ 
    params 
  }: { 
    params: Promise<{ slug: string }> 
  }) {
    
    // 3. Await the params before using them!
    const resolvedParams = await params;
    const expertise = expertiseData[resolvedParams.slug];
    
    if (!expertise) {
      notFound();
    }

  return (
    <div className="bg-gray-50 min-h-screen pb-24 pt-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Breadcrumb */}
        <Link 
          href="/#services" // Assuming your homepage services section has id="services"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <FiChevronLeft className="h-4 w-4" />
          Back to Services
        </Link>

        {/* Page Heading */}
        <div className="mb-20">
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {expertise.heading}
          </h1>
          <p className="mt-4 font-inter text-lg text-gray-600">
            Explore our specialized offerings under {expertise.heading}. We deliver tailored solutions designed to drive growth and efficiency.
          </p>
        </div>

        {/* STACKED CARDS LAYOUT */}
        {/* Using a flex column to create that sleek, vertically stacked UI */}
        <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expertise.cards.map((cardText, index) => (
            <div 
              key={index}
              className="group flex items-center justify-between rounded-2xl max-w-[30rem] border-gray-200 bg-white px-6 py-20 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container (Matches the checkmark style in modern UIs) */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FiCheckCircle className="h-5 w-5" />
                </div>
                
                {/* Card Title */}
                <h3 className="font-syne text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {cardText}
                </h3>
              </div>

            </div>
          ))}
        </div>
        </div>
       

        {/* Bottom CTA for the individual page */}
        <div className="mt-16 rounded-3xl bg-blue-600 p-8 sm:p-12 text-center shadow-xl">
          <h2 className="font-syne text-2xl font-bold text-white mb-4">
            Ready to get started with {expertise.heading}?
          </h2>
          <p className="font-inter text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your specific requirements and see how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-bold text-blue-600 transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}