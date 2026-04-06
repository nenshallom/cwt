"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioGrid() {
  const categories = ["All", "Software Development", "Training", "Consultation"];

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Summer Coding Club 2024",
      category: "Training",
      description: "A Summer Coding class held in collaboration with Arcade British International Academy to educate over 50+ students on the basics of  Frontend programming & Scratch.",
      image: "/CodingClub24.png",
      link: "#",
    },
    {
      title: "Summer Coding Club 2025",
      category: "Training",
      description: "A 1 month Summer Coding class held virtually for kids and young adults to learn the introduction to programming languages like HTML and CSS.",
      image: "/CodingClub25.jpeg",
      link: "#",
    },
    {
      title: "IBUAM UNIVERSITY PORTAL",
      category: "Software Development",
      description: "A comprehensive school management system for an aeronautic university with Applicant, Student and Admins portals",
      image: "/ibuam.png",
      link: "https://www.ibuam.edu.ng/",
    },
    {
      title: "Love4you Dating app ",
      category: "Software Development",
      description: "A dating, friendship and meeting web app with unique features",
      image: "/love4you.png",
      link: "https://www.love4you.net/",
    },
    {
      title: "Ree's Kitchen Ordering App",
      category: "Software Development",
      description: "A food ordering and delivery mobile app for Ree's kitchen restaurant with real time ordering & tracking.",
      image: "/project4.png",
      link: "https://example.com/project-4",
    }
  ];

  //  The Filtering Logic
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
                  ? "bg-brand-purple text-white shadow-md" // Active state
                  : "bg-brand-purple/10 text-gray-600  hover:text-brand-purple" // Inactive state
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
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 font-inter text-xs font-bold text-brand-indigo shadow-sm backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Fallback Image Text */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter -z-10 bg-gray-100">
                  [ {project.title} Image ]
                </div>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="mb-3 font-syne text-xl font-bold text-brand-indigo transition-colors group-hover:text-brand-purple">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 font-inter text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

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