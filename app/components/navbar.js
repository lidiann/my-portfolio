"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname(); 
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full bg-beige text-purple-dark p-6 border-b border-purple-light">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        <div>
          <Link href="/" className="text-xl font-bold">Lidiann Spears</Link>
          <p className="text-sm text-purple-text">Student @ NU</p>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 text-purple-text">
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

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/about" className={`px-4 py-2 rounded-md font-medium ${isActive('/about') ? 'bg-purple-dark text-white' : 'hover:bg-purple-light'}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`px-3 py-2 rounded-md ${isActive('/projects') ? 'bg-purple-dark text-white' : 'hover:bg-purple-light'}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/experience" className={`px-3 py-2 rounded-md ${isActive('/experience') ? 'bg-purple-dark text-white' : 'hover:bg-purple-light'}`}>
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}