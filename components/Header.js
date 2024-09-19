"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     
      <div className='bg-green-400 flex justify-between items-center p-6 fixed w-full shadow-md z-10'>
        {/* Logo Section */}
        <div>
          <Link href="/" className='font-bold text-2xl sm:text-3xl'>
            Parking_Management_System
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex'>
          <nav>
            <ul className='flex gap-5 text-lg sm:text-xl'>
              <li>
                <Link href="/" className='hover:border-b-2 hover:border-black'>
                  DashBoard
                </Link>
              </li>
              <li>
                <Link href="/Parking_list" className='hover:border-b-2 hover:border-black'>
                  Parking List
                </Link>
              </li>
              <li>
                <Link href="/Add_vehicle" className='hover:border-b-2 hover:border-black'>
                  Add Vehicle
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-3xl focus:outline-none">

            &#9776;  {/* This is a simple hamburger icon */}

          </button>
        </div>
      </div>

      {/* Mobile Navigation - Toggle based on state */}
      {isMenuOpen && (
        <div className="bg-green-400 md:hidden fixed top-16 left-0 w-full shadow-lg z-20">
          <nav className="p-4">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  DashBoard
                </Link>
              </li>
              <li>
                <Link href="/Parking_list" onClick={() => setIsMenuOpen(false)}>
                  Parking List
                </Link>
              </li>
              <li>
                <Link href="/Add_vehicle" onClick={() => setIsMenuOpen(false)}>
                  Add Vehicle
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Added padding to avoid content being hidden behind the fixed header */}
      <div className='pt-24' /> {/* Adjust pt-24 based on your header height */}
    </>
  )
}

export default Header;