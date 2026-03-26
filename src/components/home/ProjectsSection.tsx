import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
export default function ProjectsSection() {
  const projects = [
    {
      category: "Education Training",
      title: "Summer Coding Boot Camp",
      client: "Arcade British International Academy",
      image: "/project1.png",
      link: "https://example.com/project-1", 
    },
    {
      category: "Web Design",
      title: "School Website",
      client: "Educational institution",
      image: "/project2.png",
      link: "https://example.com/project-2",
    },
    {
      category: "Fitness E-commerce",
      title: "Gym & Fitness Website",
      client: "Jane Meldrun",
      image: "/project3.png",
      link: "https://example.com/project-3",
    },
    {
      category: "Mobile App React Native",
      title: "Food Ordering App",
      client: "Ree's Kitchen",
      image: "/project4.png",
      link: "https://example.com/project-4",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER AREA */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg">
            Our Work
          </h2>
          <h3 className="mt-4 font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Completed Projects
          </h3>
          <p className="mt-4 font-inter text-lg text-gray-600">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        {/* BOTTOM GRID AREA */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {projects.map((project, index) => (
            <Link 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" // Security best practice for external links
              className="group block rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-200">
                <Image 
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-blue-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 transform items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <FiExternalLink className="h-6 w-6" />
                  </div>
                </div>

                {/* Fallback placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-20 bg-gray-100">
                  [ Project Image ]
                </div>
              </div>

              {/* Text Content Container */}
              <div className="p-6 sm:p-8">
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 font-inter text-xs font-semibold tracking-wide text-blue-600 mb-4">
                  {project.category}
                </span>

                <h4 className="mb-2 font-syne text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {project.title}
                </h4>

                <p className="font-inter text-sm font-medium text-gray-500">
                  Client: <span className="text-gray-700">{project.client}</span>
                </p>
              </div>
            </Link>
          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-12 w-full">
            <Link 
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
            >
               View All Projects
               <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>

      </div>
    </section>
  );
}