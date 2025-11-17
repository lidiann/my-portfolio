import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 md:p-16">
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">

      <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">About</h1>
          <h2 className="text-2xl text-gray-600">
            A brief overview of my work, skills, and experience.
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              My name is <strong>Lidiann Spears</strong>, and I'm a student at <strong>Northwestern University</strong> pursuing a <strong>B.A. in Computer Science & Mathematics</strong>, with an expected graduation in <strong>June 2028</strong>.
            </p>
            <p>
              This website is my personal portfolio—a place to showcase the projects I've built and the technical skills I'm developing. I'm passionate about the intersection of math and software, and I'm always looking for new challenges.
            </p>
            <p>
              I'd love to connect. Please explore my projects and experience, and feel free to <strong>contact me</strong> using the form below!
            </p>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/profile-pic.jpg" 
            alt="Portrait of Lidiann Spears"
            width={500}
            height={600}
            className="rounded-lg object-cover w-full h-auto shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}