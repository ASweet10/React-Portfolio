import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import useColorMode from '../hooks/useColorMode'

export default function Navbar() {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ colorMode, setColorMode ] = useColorMode()

  const navLinks = [
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'contact' }
  ]

  return (
    <div className='flex items-center w-full h-20 px-4 md:px-24 justify-center bg-transparent text-darkText dark:text-text z-30 relative'>
      <div className='flex flex-row items-center'>
        <Link to="/home" className='capitalize text-lg cursor-pointer font-medium pr-20'>Aaron Sweet</Link>
        <ul className='flex'>
          {navLinks.map(({ id, link }) => {
            return(
              <li key={id} className='px-2 text-lg cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-darkText dark:text-text'>
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            )})}
        </ul>
        {!navOpen && (
          <div onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className='cursor-pointer pl-6 z-10 focus:outline-none transition-none'>
            {colorMode === 'dark' ? <BsFillMoonFill className='text-text-light' size={25} /> : <BsSunFill className='text-text-dark' size={25} />}
          </div>
        )}
      </div>
      
      {/*
      <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer pr-8 z-10 md:hidden'>
        {navOpen ? <FaTimes className='text-darkText dark:text-text' size={30}/> 
            : <FaBars className='text-darkText dark:text-text' size={30}/> }
      </div>
      */}

      {/* Fullscreen Mobile Popup Nav */}
      {/*
      {navOpen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 
          w-full h-screen bg-background dark:bg-darkBackground'>
          {navLinks.map(({ id, link }) => {
            return(
              <li key={id}
              className='px-4 cursor-pointer capitalize text-4xl py-6
            hover:scale-105 duration-200 text-text-dark dark:text-text-light'>
              <Link 
              onClick={() => setNavOpen(!navOpen)}
              to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
            )
          })}
        </ul>
      )}
      */}
    </div>
  )
}