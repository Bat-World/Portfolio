"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      href: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={20} />,
      href: 'https://twitter.com/yourusername',
    },
    {
      name: 'Email',
      icon: <HiMail size={20} />,
      href: 'mailto:your.email@example.com',
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          <Link
            href="/privacy"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/sitemap"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}