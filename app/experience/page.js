import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <h1 className="text-5xl font-bold mb-16">Experiences</h1>

      {/* --- WORK EXPERIENCE SECTION --- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2">
        Technical Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* --- EXPERIENCE 1: Jane Street (JSIP) --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <Image src="/janestreet.png" alt="Jane Street Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Software Engineering Fellow</h3>
                <p className="text-md font-medium text-gray-800">Jane Street</p>
                <p className="text-sm text-gray-600">June 2025 - Aug 2025 | New York, NY</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
              Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.janestreet.com/join-jane-street/programs-and-events/jsip/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Learn More
            </Link>
          </div>
        </div>

        {/* --- EXPERIENCE 2: Northwestern (TA) --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/northwestern.jpg" alt="Northwestern Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Teaching Assistant</h3>
                <p className="text-md font-medium text-gray-800">Northwestern University Mathematics Department</p>
                <p className="text-sm text-gray-600">Sept 2025 - Present | Evanston, IL</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.math.northwestern.edu/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Math Department
            </Link>
          </div>
        </div>

        {/* --- EXPERIENCE 3: Mayfest --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/mayfest.png" alt="Mayfest Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-md font-medium text-gray-800">Mayfest Productions</p>
                <p className="text-sm text-gray-600">Oct 2025 - Present | Evanston, IL</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.dilloday.com/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Dillo Day
            </Link>
          </div>
        </div>
      </div>

      {/* --- LEADERSHIP SECTION --- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-20 border-b-2 border-gray-200 pb-2">
        Leadership & Community
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* --- LEADERSHIP 1: AWM --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/awm-logo.jpg" alt="AWM Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Co-Leader</h3>
                <p className="text-md font-medium text-gray-800">Association for Women in Mathematics</p>
                <p className="text-sm text-gray-600">Oct 2025 - Present | Evanston, IL</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://linktr.ee/nuawm" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Linktree
            </Link>
            <Link href="https://www.instagram.com/nu.awm/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaInstagram size={16} /> Instagram
            </Link>
          </div>
        </div>

        {/* --- LEADERSHIP 2: Student Council --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/uclacs.png" alt="Student Council Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Co-Leader, Co-Founder</h3>
                <p className="text-md font-medium text-gray-800">Class of 2024 Student Council</p>
                <p className="text-sm text-gray-600">Oct 2022 – June 2024</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
              Coming Soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.instagram.com/_uclacssc24_/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaInstagram size={16} /> Instagram
            </Link>
          </div>
        </div>

        {/* --- LEADERSHIP 3: Academic Decathlon --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/acadeca.png" alt="AcDec Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Honors A-Team Member and Honors B-Team Member</h3>
                <p className="text-md font-medium text-gray-800">Academic Decathlon</p>
                <p className="text-sm text-gray-600">Oct 2022 - June 2024</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.usad.org/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Learn More
            </Link>
          </div>
        </div>
      </div>


      {/* --- PROGRAMS & HONORS SECTION --- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-20 border-b-2 border-gray-200 pb-2">
        Programs & Honors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- EXPERIENCE 1: Jane Street (AMP) --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <Image src="/janestreet.png" alt="Jane Street Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Student, Academy of Math & Programming</h3>
                <p className="text-md font-medium text-gray-800">Jane Street</p>
                <p className="text-sm text-gray-600">June 2024 - Aug 2024 | New York, NY</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.janestreet.com/join-jane-street/programs-and-events/amp/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Learn More
            </Link>
          </div>
        </div>

        {/* --- PROGRAM 2: Thrive Scholars --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/thrive.png" alt="Thrive Scholars Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Scholar</h3>
                <p className="text-md font-medium text-gray-800">Thrive Scholars</p>
                <p className="text-sm text-gray-600">April 2020 - Present</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.thrivescholars.org/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Website
            </Link>
            <Link href="https://www.linkedin.com/company/thrive-scholars/posts/?feedView=all" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaLinkedin size={16} /> LinkedIn
            </Link>
          </div>
        </div>

        {/* --- PROGRAM 3: BEAM --- */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1">
                <Image src="/beam.png" alt="BEAM Logo" width={50} height={50} className="object-contain"/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Student</h3>
                <p className="text-md font-medium text-gray-800">Bridge to Enter Advanced Mathematics</p>
                <p className="text-sm text-gray-600">June 2018 - June 2024</p>
              </div>
            </div>
            <p className="text-gray-700 space-y-2 mb-6">
            Coming soon...
            </p>
          </div>
          {/* Links section */}
          <div className="flex gap-4 text-sm">
            <Link href="https://www.beammath.org/" className="flex items-center gap-2 text-black font-medium hover:underline">
              <FaExternalLinkAlt size={16} /> Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}