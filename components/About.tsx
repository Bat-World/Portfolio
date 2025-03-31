import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
        About <span className="text-blue-600">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 dark:text-gray-300">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Who am I?
          </h3>
          <p className="mb-4">
            I'm a passionate frontend developer with expertise in React, Next.js,
            and modern web technologies. I love creating beautiful, responsive,
            and user-friendly websites.
          </p>
          <p className="mb-6">
            With 3+ years of experience, I've worked on various projects from
            small business websites to complex web applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Name:</h4>
              <p>Your Name</p>
            </div>
            <div>
              <h4 className="font-semibold">Email:</h4>
              <p>your.email@example.com</p>
            </div>
            <div>
              <h4 className="font-semibold">From:</h4>
              <p>Your Location</p>
            </div>
            <div>
              <h4 className="font-semibold">Experience:</h4>
              <p>3+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}