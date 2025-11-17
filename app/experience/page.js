import Image from 'next/image';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <h1 className="text-5xl font-bold mb-16">Work & Leadership</h1>

      {/* --- WORK EXPERIENCE SECTION --- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2">
        Work Experience
      </h2>

      {/* Container for experience cards */}
      <div className="flex flex-col gap-12">

        {/* --- EXPERIENCE 1: Jane Street (SIP) --- */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1: Company Logo */}
          <div className="flex-shrink-0 w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
            {/* Add logo to /public/logos/jane-street.png 
            */}
            <Image 
              src="/logos/jane-street.png" 
              alt="Jane Street Logo" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
          {/* Column 2: Job Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold">Software Engineering Fellow</h3>
            <p className="text-lg font-medium text-gray-800">Jane Street</p>
            <p className="text-sm text-gray-600 mb-4">June 2025 - August 2025 | New York, NY</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>1 of 12 nationally selected for an 8-week intensive fellowship.</li>
              <li>Applied industry-standard SWE practices including code review, modular design, and design documentation.</li>
              <li>Built a trading bot that tracked exchange state and executed real-time trades using market making and arbitrage strategies.</li>
            </ul>
          </div>
        </div>

        {/* --- EXPERIENCE 2: Northwestern (TA) --- */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1: Company Logo */}
          <div className="flex-shrink-0 w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-2">
            {/* Add logo to /public/logos/northwestern.png 
            */}
            <Image 
              src="/logos/northwestern.png" 
              alt="Northwestern University Logo" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
          {/* Column 2: Job Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold">Teaching Assistant, Mathematics</h3>
            <p className="text-lg font-medium text-gray-800">Northwestern University</p>
            <p className="text-sm text-gray-600 mb-4">September 2025 - Present | Evanston, IL</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Led weekly discussion sections, held office hours, and graded quizzes/exams for 300+ students in Multivariable Differential Calculus.</li>
              <li>Coordinated with faculty to support course delivery and student understanding.</li>
            </ul>
          </div>
        </div>
        
        {/* --- EXPERIENCE 3: Jane Street (AMP) --- */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1: Company Logo */}
          <div className="flex-shrink-0 w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
            {/* Add logo to /public/logos/jane-street.png 
            */}
            <Image 
              src="/logos/jane-street.png" 
              alt="Jane Street Logo" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
          {/* Column 2: Job Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold">Student, Academy of Mathematics and Programming</h3>
            <p className="text-lg font-medium text-gray-800">Jane Street</p>
            <p className="text-sm text-gray-600 mb-4">June 2024 - August 2024 | New York, NY</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Completed intensive courses in CS, combinatorics, and number theory.</li>
              <li>Applied these skills to design efficient algorithms, including a probabilistic, optimal-move-suggestion bot for Camel Up.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- LEADERSHIP SECTION --- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-20 border-b-2 border-gray-200 pb-2">
        Leadership & Community
      </h2>

      <div className="flex flex-col gap-12">
        {/* --- LEADERSHIP 1: AWM --- */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Column 1: Logo */}
          <div className="flex-shrink-0 w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-2">
            {/* Add logo to /public/logos/awm.png (or use NU logo)
            */}
            <Image 
              src="/logos/northwestern.png" // Placeholder, replace with AWM logo if you have one
              alt="Association for Women in Mathematics Logo" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
          {/* Column 2: Role Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold">Co-Leader</h3>
            <p className="text-lg font-medium text-gray-800">Association for Women in Mathematics (AWM)</p>
            <p className="text-sm text-gray-600 mb-4">October 2025 - Present | Evanston, IL</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Revived the university's dormant AWM chapter, securing faculty sponsorship.</li>
              <li>Grew membership to 40+ in the first month through a multi-departmental outreach campaign.</li>
              <li>Developing a year-long program including technical workshops, alumni panels, and faculty networking.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}