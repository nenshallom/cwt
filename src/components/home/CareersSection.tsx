import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function CareersSection() {
  // Array of company perks
  const perks = [
    "Competitive Salary",
    "Remote Flexibility",
    "Health & Wellness",
    "Learning Budget",
  ];

  // Array of open job positions
  const jobs = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "DevOps",
      department: "Engineering",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "Mobile Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "Product Manager",
      department: "Management",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "Project Manager",
      department: "Management",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "Social Media Manager",
      department: "Management",
      type: "Full-time",
      location: "Remote ",
    },
    {
      title: "Human Resources Manager",
      department: "Management",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "internships",
      department: "Internship",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
    },
     
  ];

  return (

    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: The Pitch & Perks */}
          <div className=" ">
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-brand-purple py-2 px-3 bg-brand-purple/10 rounded-lg mb-4">
              We're Hiring
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Join Our Team of <span className="text-brand-purple">Innovators</span>
            </h3>
            <p className="mt-6 font-inter text-lg text-gray-600 leading-relaxed max-w-lg">
              We're looking for passionate individuals who want to make an impact. Work on exciting projects, grow your skills, and be part of a collaborative team.
            </p>

            {/* Perks Grid: 1 col on mobile, 2 cols on slightly larger screens */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="h-5 w-5 text-brand-purple shrink-0" />
                  <span className="font-inter text-base font-medium text-gray-700">{perk}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-gray-100 p-5 bg-brand-purple/10 rounded-lg">
              <p className="font-inter text-md text-gray-500">
                Don't see a matching role?{" "}
                <Link href="/" className="font-semibold text-brand-purple hover:underline">
                  Send us your resume
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Job Postings */}
          <div className="flex flex-col gap-4">
            {jobs.map((job, index) => (
              <Link 
                key={index}
                href="/"
                className="group flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:ring-1 hover:ring-blue-100 gap-4"
              >
                <div>
                  {/* Job Title */}
                  <h4 className="font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-purple">
                    {job.title}
                  </h4>
                  
                  {/* Job Meta Info (Department, Type, Location) */}
                  <div className="mt-3 flex flex-wrap items-center gap-3 font-inter text-sm font-medium text-gray-500">
                    <span className="rounded-md bg-brand-purple/10 px-2.5 py-1 text-brand-purple">{job.department}</span>
                    <span className="flex items-center gap-1.5">
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Arrow Icon that slides right on hover */}
                <div className="flex gap-3 items-center">
                  <div className="flex flex-col items-start gap-2">
                    <span className="py-1 px-2 text-brand-purple bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white rounded-lg text-sm">{job.type}</span>
                    <p className="text-xs text-brand-purple/60">send your resume</p>
                  </div>
                  
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-purple-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-brand-purple group-hover:text-white">
                    
                    <FiArrowRight className="h-5 w-5" />
                  </div>
                </div>



              </Link>
            ))}

            {/* View All Positions Link */}
            <div className=" hidden mt-4 text-center sm:text-right">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 font-inter text-base font-semibold text-white transition-colors group px-3 py-4 bg-blue-500 rounded-lg"
              >
                View All Positions
                <span className="text-xl leading-none transition-transform group-hover:translate-x-1">+</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}