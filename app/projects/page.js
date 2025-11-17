import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <h1 className="text-5xl font-bold mb-16">My Projects</h1>

      {/* Container for all projects */}
      <div className="flex flex-col gap-20">

        {/* --- PROJECT 1: Eden --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Eden - AI Sustainability Tracker</h2>
            <p className="text-sm text-gray-600 mb-4">September 2025</p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Built a Chrome extension (React, TypeScript, Tailwind) to track environmental metrics for Claude.ai.</li>
              <li>Used a FastAPI backend for impact computation.</li>
              <li>Utilized real-time token counting, background scripts, and dynamic UI injection to monitor user activity and display live data.</li>
            </ul>
            
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Tailwind</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">FastAPI</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">PostgreSQL</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Claude API</span>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <Link href="#" className="flex items-center gap-2 text-black font-medium hover:underline">
                <FaGithub size={20} /> GitHub
              </Link>
              <Link href="#" className="flex items-center gap-2 text-black font-medium hover:underline">
                <FaExternalLinkAlt size={18} /> Live Demo
              </Link>
            </div>
          </div>
          
          {/* Column 2: Image/Video */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-500">
            {/* REPLACE THIS DIV with your <Image> component 
              e.g. <Image src="/projects/eden.jpg" width={600} height={400} alt="Eden Project" />
            */}
            [Image/Video of Eden Project]
          </div>
        </div>

        {/* --- PROJECT 2: Qotes --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Qotes - Social Media Website</h2>
            <p className="text-sm text-gray-600 mb-4">June 2025 - August 2025</p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Developed a social media platform in OCaml (Bonsai, Async) with a reactive UI synced via RPCs over WebSocket.</li>
              <li>Features include auth, posts, and friend requests.</li>
              <li>Implemented a 3D hyperbolic graph visualization for spatial social network exploration, replacing a traditional feed.</li>
            </ul>
            
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">OCaml</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Bonsai</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Async</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Figma</span>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <Link href="#" className="flex items-center gap-2 text-black font-medium hover:underline">
                <FaGithub size={20} /> GitHub
              </Link>
            </div>
          </div>
          
          {/* Column 2: Image/Video */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-500">
            [Image/Video of Qotes Project]
          </div>
        </div>

        {/* --- PROJECT 3: Campus Transit Navigator --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Real-Time Campus Transit Navigator</h2>
            <p className="text-sm text-gray-600 mb-4">April 2025</p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Developed a C++ application that integrates static OpenStreetMap data (parsing 15,000+ nodes) with live CTA bus tracking.</li>
              <li>Integrated the real-time CTA Bus Tracker API using the CURL library.</li>
              <li>Fetches and parses complex JSON responses to display live bus arrival predictions.</li>
            </ul>
            
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">C++</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">OOP</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">REST API</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">JSON</span>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <Link href="#" className="flex items-center gap-2 text-black font-medium hover:underline">
                <FaGithub size={20} /> GitHub
              </Link>
            </div>
          </div>
          
          {/* Column 2: Image/Video */}
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-500">
            [Image/Video of Transit Navigator]
          </div>
        </div>

      </div>
    </div>
  );
}
