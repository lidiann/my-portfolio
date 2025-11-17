import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-gray-100 py-24 md:py-32">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Lidiann Spears
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A Computer Science and Mathematics student at Northwestern University building efficient, scalable software.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/projects" className="bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
              View My Projects
            </Link>
            {/* Make sure to add your resume PDF to the /public folder */}
            <a 
              href="/Spears_Lidiann_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black border border-gray-300 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              View My Resume
            </a>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="max-w-7xl mx-auto py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">Eden - AI Sustainability Tracker</h3>
            <p className="text-gray-600 mb-4">
              A Chrome extension to track environmental metrics for AI models, built with React, TypeScript, and a FastAPI backend.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">React</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">TypeScript</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">FastAPI</span>
            </div>
            <Link href="/projects" className="font-medium text-black hover:underline inline-flex items-center">
              See details <FaArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">Qotes - Social Media Website</h3>
            <p className="text-gray-600 mb-4">
              A social media platform in OCaml, featuring a reactive UI and a 3D hyperbolic graph visualization for social network exploration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">OCaml</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Bonsai</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Async</span>
            </div>
            <Link href="/projects" className="font-medium text-black hover:underline inline-flex items-center">
              See details <FaArrowRight className="ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. About Me Blurb */}
      <section className="bg-gray-100 py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">A Little About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Coming Soon...
          </p>
          <Link href="/about" className="bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
            More About Me
          </Link>
        </div>
      </section>

      {/* 4. Let's Connect */}
      <section className="max-w-7xl mx-auto py-24 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm always looking for new challenges and opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:Ispearsguerra@gmail.com" className="text-lg font-medium text-black hover:underline">
            Email
          </a>
          <a href="https.linkedin.com/in/lidiannspearsguerra/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-black hover:underline">
            LinkedIn
          </a>
          <a href="https.github.com/lidiann" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-black hover:underline">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}