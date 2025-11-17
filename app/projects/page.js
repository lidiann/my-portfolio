// This must be a Client Component to use state
"use client"; 

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// 1. Define all your projects in one data array
const projectsData = [
  {
    id: 1,
    name: "Eden - AI Sustainability Tracker",
    date: "September 2025",
    whereMade: "HackMIT 2025",
    shortDescription: "A Chrome extension to track environmental metrics for AI models.",
    imageUrl: "/eden.png",
    details: [
      "Built a Chrome extension (React, TypeScript, Tailwind) to track environmental metrics for Claude.ai.",
      "Used a FastAPI backend for impact computation.",
      "Utilized real-time token counting, background scripts, and dynamic UI injection to monitor user activity and display live data."
    ],
    tools: ["React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "Claude API"],
    githubLink: "https://github.com/lidiann/HackMIT2025", // Add your link
    liveLink: "https://www.canva.com/design/DAGy7gCmidM/uAykTP6-pMAfoC0CreVSwg/view?utm_content=DAGy7gCmidM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0a1d6c5647"   // Add your link
  },
  {
    id: 2,
    name: "Qotes - Social Media Website",
    date: "June 2025 - August 2025",
    whereMade: "Jane Street Immersion Program",
    shortDescription: "A social media platform built in OCaml.",
    imageUrl: "/qotes.png", // Add a real image to /public/projects/
    details: [
      "Developed a social media platform in OCaml (Bonsai, Async) with a reactive UI synced via RPCs over WebSocket.",
      "Features include auth, posts, friend requests, and 3D hyperbolic graph visualization for spatial social network exploration, replacing a traditional feed."
    ],
    tools: ["OCaml", "Bonsai", "Async", "Figma"],
    githubLink: null,
    liveLink: null
  },
  {
    id: 3,
    name: "Real-Time Campus Transit Navigator",
    date: "April 2025",
    whereMade: "CS 211 Class Project at Northwestern",
    shortDescription: "A C++ app for tracking live CTA bus data.",
    imageUrl: "/cpp.png", // Add a real image to /public/projects/
    details: [
      "Developed a C++ application that integrates static OpenStreetMap data (parsing 15,000+ nodes) with live CTA bus tracking.",
      "Integrated the real-time CTA Bus Tracker API using the CURL library.",
      "Fetches and parses complex JSON responses to display live bus arrival predictions."
    ],
    tools: ["C++", "OOP", "REST API", "JSON", "CURL"],
    githubLink: null,
    liveLink: null
  }
  // Add more projects here
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const otherProjects = projectsData.filter((p) => p.id !== selectedProject.id);

  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      
      {/* 4. FEATURED PROJECT SECTION */}
      <section className="border border-gray-200 rounded-lg shadow-lg p-8 mb-20 hover:shadow-xl transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Image */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center">
            <Image 
              src={selectedProject.imageUrl} 
              alt={selectedProject.name}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Column 2: Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{selectedProject.name}</h1>
            
            {/* Combined Date and WhereMade into one line with a separator */}
            <p className="text-sm text-gray-600 mb-6">
              {selectedProject.whereMade}
              <span className="mx-2">|</span>
              {selectedProject.date}
            </p>
            
            <h3 className="text-lg font-semibold mb-2">About this Project</h3>
            <p className="text-gray-700 mb-6">{selectedProject.shortDescription}</p>

            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {selectedProject.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tools.map((tool, index) => (
                 <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {tool}
                 </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.githubLink && (
                <Link href={selectedProject.githubLink} className="flex items-center gap-2 text-black font-medium hover:underline">
                  <FaGithub size={20} /> GitHub
                </Link>
              )}
              {selectedProject.liveLink && (
                <Link href={selectedProject.liveLink} className="flex items-center gap-2 text-black font-medium hover:underline">
                  <FaExternalLinkAlt size={18} /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "OTHER PROJECTS" SECTION */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden 
                         cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.date}</p>
                <p className="text-sm text-gray-700 mt-2">{project.shortDescription}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}