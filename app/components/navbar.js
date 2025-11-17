"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname(); 
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full bg-white text-black p-6 border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Name/Title */}
        <div>
          <Link href="/" className="text-xl font-bold">Lidiann Spears</Link>
          <p className="text-sm text-gray-600">Student @ NU</p>
        </div>
        
        {/* Right Side: Nav and Socials */}
        <div className="flex items-center gap-8">
          
          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/about" className={`px-4 py-2 rounded-md font-medium ${isActive('/about') ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`px-3 py-2 rounded-md ${isActive('/projects') ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className={`px-3 py-2 rounded-md ${isActive('/experience') ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                  Experience
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <a href="https://linkedin.com/in/lidiannspearsguerra" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/lidiann" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaGithub size={20} />
            </a>
            <a href="mailto:lspearsguerra@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}