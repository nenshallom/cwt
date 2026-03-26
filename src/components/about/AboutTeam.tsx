import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

export default function AboutTeam() {
  const team = [
    {
      name: "ABDULRAHMAN SADIQ",
      role: "CEO",
      image: "/ceo.jpg", 
      linkedin: "https://linkedin.com/in/a",
      twitter: "https://twitter.com/adebayo",
    },
    {
      name: "Mucctar Ogala",
      role: "CTO",
      image: "/team-2.jpg",
      linkedin: "https://linkedin.com/in/chioma",
      twitter: "https://twitter.com/chioma",
    },
    {
      name: "Dorcas Ayoko",
      role: "Project Manager",
      image: "/team-3.jpg",
      linkedin: "https://linkedin.com/in/fatima",
      twitter: "https://twitter.com/fatima",
    },
    {
      name: "Tunde Bakare",
      role: "Backend Engineer",
      image: "/team-4.jpg",
      linkedin: "https://linkedin.com/in/tunde",
      twitter: "https://twitter.com/tunde",
    },
    {
      name: "Thelma Stephen",
      role: "UI/UX Designer",
      image: "/team-5.jpg",
      linkedin: "https://linkedin.com/in/emeka",
      twitter: "https://twitter.com/emeka",
    },
    {
      name: "Ngozi Eze",
      role: "Mobile Developer",
      image: "/team-6.jpg",
      linkedin: "https://linkedin.com/in/ngozi",
      twitter: "https://twitter.com/ngozi",
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-syne text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            Our People
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Meet the Team
          </h3>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            A passionate group of developers, designers, and strategists dedicated to building exceptional software solutions.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {team.map((person, index) => (
            <div key={index} className="group mx-auto w-full max-w-[320px] sm:max-w-none">
              
              {/* IMAGE & CONTENT CONTAINER */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-2xl border border-gray-100">
                
                {/* 1. The Image (Base Layer) */}
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105 z-0"
                /> 
                
                {/* 2. Dark Gradient Overlay */}
                {/* Hidden by default, fades in on hover to make white text readable */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* 3. Social Icons */}
                <div className="absolute top-5 right-5 z-30 flex flex-col gap-3 opacity-0 transition-all duration-300 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-blue-600 hover:scale-110">
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                  <a href={person.twitter} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-black hover:scale-110">
                    <FiTwitter className="h-5 w-5" /> 
                  </a>
                </div>

                {/* 4. Name & Role */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left  transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <h4 className="font-syne text-2xl font-bold text-white leading-tight">
                    {person.name}
                  </h4>
                  <p className="mt-1 font-inter text-sm font-medium text-blue-300 uppercase tracking-widest">
                    {person.role}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-50">
                  [ {person.name} ]
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}