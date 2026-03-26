"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioGrid() {
  const categories = ["All", "Education", "E-Commerce", "Health & Fitness", "Healthcare"];

  const [activeCategory, setActiveCategory] = useState("All");

  // 3. The exact project data from your UI design
  const projects = [
    {
      title: "Summer Coding Boot Camp",
      category: "Education",
      description: "A comprehensive online platform for coding bootcamp registration, course management...",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/portproj1.png",
      link: "#",
    },
    {
      title: "School Management Website",
      category: "Education",
      description: "Full-featured school management system with student portals, grade tracking...",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "AWS"],
      image: "/portproj2.jpg",
      link: "#",
    },
    {
      title: "Gym & Fitness Website",
      category: "Health & Fitness",
      description: "Dynamic fitness center website with class scheduling, membership management...",
      tech: ["React", "Firebase", "Stripe", "Tailwind CSS"],
      image: "/portproj3.jpg",
      link: "#",
    },
    {
      title: "Food Ordering App",
      category: "E-Commerce",
      description: "Feature-rich food delivery application with real-time order tracking, restaurant...",
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      image: "/portproj4.jpg",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description: "Scalable online marketplace with inventory management, secure payments, analytics...",
      tech: ["Next.js", "Shopify API", "Stripe", "PostgreSQL"],
      image: "/portproj5.jpg",
      link: "#",
    },
    {
      title: "Healthcare Portal",
      category: "Healthcare",
      description: "Patient management system with appointment scheduling, medical records...",
      tech: ["React", "Python", "PostgreSQL", "HIPAA Compliant"],
      image: "/portproj6.jpg",
      link: "#",
    }
  ];

  // 4. The Filtering Logic
  // If "All" is selected, show everything. Otherwise, only show projects matching the category.
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="bg-white py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* FILTER TABS */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 font-inter text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-700 text-white shadow-md" // Active state
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-purple-700" // Inactive state
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link 
              href={project.link}
              key={index} 
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Category Badge (Top Left) */}
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 font-inter text-xs font-bold text-gray-900 shadow-sm backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Fallback Image Text */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-100">
                  [ {project.title} Image ]
                </div>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="mb-3 font-syne text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-700">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 font-inter text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags (Bottom of card) */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="rounded-md bg-gray-50 px-2 py-1 font-inter text-xs font-medium text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State (Just in case a category has no projects yet) */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="font-syne text-2xl font-bold text-gray-900">No projects found.</h3>
            <p className="mt-2 font-inter text-gray-500">Check back later for new updates to this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}