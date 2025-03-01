'use client'
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
   <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          My Website
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent md:p-0">
            <li>
              <Link
                href="/design-1"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                Design 1
              </Link>
            </li>
            <li>
              <Link
                href="/design-2"
                className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                Design-2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
