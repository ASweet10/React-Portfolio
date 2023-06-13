import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [ navOpen, setNavOpen ] = useState(false)

  const navLinks = [
    {
      id: 1,
      link: 'about'
    },
    {
      id: 2,
      link: 'projects'
    },
    {
      id: 3,
      link: 'tools'
    },
    {
      id: 4,
      link: 'contact'
    }
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4
     text-white bg-black fixed'>
      <div>
        <h1 className='text-2xl font-signature ml-2'>AaronSweet.dev</h1>
      </div>

      <ul className='hidden md:flex'>
        {navLinks.map(({ id, link }) => {
          return(
            <li key={id}
            className='px-4 cursor-pointer capitalize font-medium
           text-gray-500 hover:scale-105 duration-200'>
             <Link to={link} smooth duration={500}>
              {link}
             </Link>
           </li>
          )
        })}

        {/* 
        <li className='px-4 cursor-pointer capitalize font-medium
          text-gray-500 hover:scale-105 duration-200'>
            About
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium
          text-gray-500 hover:scale-105 duration-200'>
            Projects
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium
          text-gray-500 hover:scale-105 duration-200'>
            Tools
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium
          text-gray-500 hover:scale-105 duration-200'>
            Contact
        </li>
        */}

      </ul>
      <div 
      onClick={() => setNavOpen(!navOpen)}
      className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        
        {navOpen ? <FaTimes size={30}/> : <FaBars size={30}/> }
      </div>

      {navOpen && (
        <ul className='flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
        text-gray-500'>
          {navLinks.map(({ id, link }) => {
            return(
              <li key={id}
              className='px-4 cursor-pointer capitalize text-4xl py-6
            text-gray-500 hover:scale-105 duration-200'>
              <Link 
              onClick={() => setNavOpen(!navOpen)}
              to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
            )
          })}


          {/* 
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>About</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Projects</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Tools</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Contact</li>
          */}
        </ul>
      )}
    </div>
  )
}