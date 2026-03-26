"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FiMapPin, 
  FiClock, 
  FiBriefcase, 
  FiDollarSign,
  FiChevronDown,
  FiCheck,
  FiArrowRight
} from "react-icons/fi";

export default function CareersPositions() {
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    if (expandedJobIndex === index) {
      setExpandedJobIndex(null); // Close if already open
    } else {
      setExpandedJobIndex(index); // Open the clicked job
    }
  };

  // The Job Data
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Lagos",
      experience: "4+ years",
      salary: "₦800K - ₦1.2M/month",
      posted: "2 days ago",
      description: "We are looking for an experienced Frontend Developer to lead the development of user-facing features and mentor junior developers.",
      requirements: [
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with state management (Redux, Zustand)",
        "Strong understanding of web performance optimization",
        "Experience with testing frameworks (Jest, Cypress)",
        "Excellent communication and collaboration skills"
      ]
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Lagos",
      experience: "3+ years",
      salary: "₦700K - ₦1M/month",
      posted: "5 days ago",
      description: "Join our core engineering team to build robust, scalable backend services and APIs that power our entire ecosystem.",
      requirements: [
        "Proficiency in Node.js, Python, or Go",
        "Experience with microservices architecture",
        "Deep understanding of relational databases (PostgreSQL)",
        "Familiarity with cloud platforms (AWS/GCP)",
        "Understanding of microservices architecture",
        "Knowledge of CI/CD pipelines"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote / Lagos",
      experience: "3+ years",
      salary: "₦600K - ₦900K/month",
      posted: "1 week ago",
      description: "We need a visionary designer to craft intuitive, beautiful user experiences across our web and mobile applications.",
      requirements: [
        "Proficiency in Figma and design systems",
        "Strong portfolio demonstrating user-centered design",
        "Experience building and maintaining design systems",
        "Understanding of responsive design principles",
        "Ability to conduct user research and usability testing"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "₦750K - ₦1.1M/month",
      posted: "2 days ago",
      description: "Help us build, automate, and maintain a highly available and scalable infrastructure for our growing suite of products.",
      requirements: [
        "Strong background in Linux administration",
        "Experience with Docker and Kubernetes",
        "Proficiency in CI/CD pipelines (GitHub Actions, GitLab CI)",
        "Experience with Infrastructure as Code (Terraform)",
        "Strong understanding of cloud security practices"
      ]
    },
    {
      title: "Mobile Developer (React Native)",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Lagos",
      experience: "2+ years",
      salary: "₦600K - ₦900K/month",
      posted: "3 days ago",
      description: "Bring our cross-platform mobile strategy to life by building high-performance iOS and Android applications.",
      requirements: [
        "Strong experience with React Native and Redux",
        "Experience deploying apps to Apple App Store and Google Play",
        "Understanding of mobile UI/UX best practices",
        "Ability to integrate native modules when necessary",
        "Familiarity with mobile push notifications and offline storage"
      ]
    },
    {
      title: "Technical Project Manager",
      department: "Operations",
      type: "Full-time",
      location: "Lagos / Hybrid",
      experience: "4+ years",
      salary: "₦700K - ₦1M/month",
      posted: "1 week ago",
      description: "Lead agile development sprints, coordinate between cross-functional teams, and ensure technical projects are delivered on time.",
      requirements: [
        "Proven experience managing software development lifecycles",
        "Deep understanding of Agile/Scrum methodologies",
        "Experience using Jira, Asana, or Linear",
        "Ability to translate business requirements into technical tickets",
        "Excellent stakeholder management and communication"
      ]
    }
  ];

  const departments = ["All", "Engineering", "Design", "Operations"];
  
  const getJobCount = (dept: string) => {
    if (dept === "All") return jobs.length;
    return jobs.filter(job => job.department === dept).length;
  };

  const [activeTab, setActiveTab] = useState("All");

  const filteredJobs = jobs.filter(
    (job) => activeTab === "All" || job.department === activeTab
  );

  return (
    <section id="open-positions" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="text-center mb-12">
          <h2 className="font-syne text-sm font-bold uppercase w-fit mx-auto tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mb-4">
            Open Positions
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Find Your Perfect Role
          </h3>
          <p className="font-inter text-lg text-gray-600">
            Explore our current openings and find a position that matches your skills and aspirations.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-inter text-sm font-semibold transition-all duration-300 ${
                activeTab === dept
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600"
              }`}
            >
              {dept}
              <span className={`flex h-5 items-center justify-center rounded-full px-2 text-xs ${
                activeTab === dept ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {getJobCount(dept)}
              </span>
            </button>
          ))}
        </div>

        {/* JOB LISTINGS */}
        <div className="flex flex-col gap-4">
          {filteredJobs.map((job, index) => {
            const isOpen = expandedJobIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleJob(index)}
                className={`group cursor-pointer flex flex-col rounded-2xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                  isOpen ? "border-blue-200 ring-1 ring-blue-100 shadow-md" : "border-gray-200 hover:border-blue-200"
                }`}
              >

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start  gap-4 mb-2">
                      <h4 className={`font-syne text-2xl font-bold transition-colors ${isOpen ? "text-purple-700" : "text-gray-900 group-hover:text-purple-700"}`}>
                        {job.title}
                      </h4>
                      <span className="shrink-0 rounded-full bg-purple-100 px-3 py-1 font-inter text-xs font-semibold tracking-wide text-purple-700">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-inter text-sm font-medium text-gray-500">
                      <div className="flex items-center gap-2">
                        <FiBriefcase className="h-4 w-4 text-purple-400" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="h-4 w-4 text-purple-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="h-4 w-4 text-purple-400" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="h-4 w-4 text-purple-400" />
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center gap-4 border-t border-gray-100 pt-4 sm:border-t-0 sm:pt-0 sm:pl-6 sm:border-l">
                    <span className="font-inter text-xs text-gray-400">
                      Posted {job.posted}
                    </span>
                    {/* Rotating Chevron */}
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-all duration-300 group-hover:bg-purple-50 group-hover:text-purple-600 ${isOpen ? "rotate-180 bg-blue-50 text-purple-600" : ""}`}>
                      <FiChevronDown className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE CONTENT AREA */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="font-inter text-base text-gray-600 leading-relaxed mb-6">
                      {job.description}
                    </p>
                    
                    <h5 className="font-syne text-lg font-bold text-gray-900 mb-4">
                      Requirements:
                    </h5>
                    
                    <ul className="space-y-3 mb-8">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <FiCheck className="h-3 w-3 font-bold" />
                          </div>
                          <span className="font-inter text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Apply Now Button */}
                    <div className="flex justify-start">
                      <Link 
                        href="mailto:codewarriorstech@gmail.com"
        
                        onClick={(e) => e.stopPropagation()}
                        className="group inline-flex items-center gap-2 font-inter text-base font-bold px-4 py-3 bg-blue-600 text-white hover:text-blue-700 transition-colors rounded-xl"
                      >
                        Apply Now
                        <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </div>
                
              </div>
            );
          })}

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <h3 className="font-syne text-xl font-bold text-gray-900">No open positions</h3>
              <p className="mt-2 font-inter text-gray-500">There are currently no openings in this department. Check back later!</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}