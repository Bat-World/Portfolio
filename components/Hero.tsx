import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 dark:text-gray-300">
          Frontend Developer | Web Designer
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}