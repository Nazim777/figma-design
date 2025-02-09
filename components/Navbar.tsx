import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, MessageSquareText, Moon } from 'lucide-react';
import { Switch } from "@/components/ui/switch"



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
         power quest
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
            <MessageSquareText className='bg-outline'/>
            </li>
            <li>
            <Moon />
            </li>
            <li>
            <Bell />
            </li>
            <li>
                <Switch/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
