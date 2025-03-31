import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-blue-500" />,
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-600" />,
    level: 'Advanced',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    level: 'Advanced',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500" />,
    level: 'Intermediate',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 className="text-orange-500" />,
    level: 'Advanced',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="text-blue-400" />,
    level: 'Advanced',
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="text-cyan-400" />,
    level: 'Advanced',
  },
];

export const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured online store with cart functionality and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A responsive portfolio template built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
];