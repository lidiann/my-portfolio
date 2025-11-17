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
          <p className="text-gray-700 leading-relaxed">
          My name is Lidiann Spears, and I'm a student at Northwestern University pursuing a B.A. in Computer Science & Mathematics, with an expected graduation in June 2028.
          <br></br>
          <br></br>
          This website is my personal portfolio, a place to showcase the projects I've built and the technical skills I'm developing. I'm passionate about the intersection of math and software, and I'm always looking for new challenges.
          <br></br>
          <br></br>
          I'd love to connect, so feel free to reach me using the icons above. Please explore my projects and experience, and feel free to contact me using the form below!
          </p>
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