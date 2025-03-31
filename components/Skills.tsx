import { skills } from '../lib/constants';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-3 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold dark:text-white">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}