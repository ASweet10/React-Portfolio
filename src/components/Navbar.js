import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useColorMode } from './useColorMode'
import { color } from 'framer-motion'
import ParticleBackground from 'components/ParticleBackground'
import { MdOutlinePersonOutline } from "react-icons/md"
import { LuMail } from "react-icons/lu"
import { motion } from 'framer-motion'

export default function Navbar() {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ colorMode, setColorMode ] = useState('light')
  const [ name, setName ] = useState("Sweet")

  const navLinks = [
    { id: 1, link: 'about' },
    { id: 2, link: 'projects' },
    { id: 3, link: 'contact' }
  ]

  const toggleDarkMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setColorMode(theme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', colorMode === 'dark' ? 'dark' : 'light')
    console.log(localStorage.getItem('theme'))
  }, [colorMode])

  return (
    <>
      <div className={`flex mx-auto items-center max-w-screen-lg h-20 px-4 md:px-24 justify-center bg-transparent ${colorMode === 'dark' ? 'text-darkText' : 'text-text'} z-30 relative`}>
        <div className='hidden md:flex flex-row items-center'>
          <motion.a
            initial="initial"
            whileHover="hovered"
            href="/" 
            className='uppercase text-lg cursor-pointer font-bold font-bebas relative block overflow-hidden '
          >
            <div>
              <span className='mr-2'>Aaron</span>
              {name.split("").map((letter, i) => {
                return <motion.span
                  key={i}
                  className='inline-block'
                  variants={{
                    initial: {
                      y: 0
                    },
                    hovered: {
                      y: "-100%"
                    }
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delay: 0.025 * i
                  }}
                >{letter}</motion.span>
              })}
            </div>

            <div className='absolute inset-0'>
              <span className='mr-2'>Aaron</span>
              {name.split("").map((letter, i) => {
                return <motion.span 
                key={i}
                className='inline-block'
                variants={{
                 initial: {
                   y: "100%"
                 },
                 hovered: {
                   y: 0
                 }
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  delay: 0.025 * i
                }}
                >{letter}</motion.span>
              })}
            </div>
          </motion.a>
          <ul className='flex md:pl-48'>
            {navLinks.map(({ id, link }) => {
              return(
                <li key={id} className={`px-2 text-lg cursor-pointer capitalize font-medium hover:scale-1 duration-200 ${ colorMode === 'dark' ? 'text-darkText' : 'text-text'} hover:text-gray-400`}>
                  <Link to={link} smooth duration={500}>{link}</Link>
                </li>
              )})}
          </ul>
          
          {/*
          { !navOpen && (
            <div onClick={() => toggleDarkMode()} className='cursor-pointer pl-6 z-10 focus:outline-none transition-none'>
              { colorMode === 'dark' ? <BsFillMoonFill className='text-text-light' size={25} /> : <BsSunFill className='text-text-dark' size={25} />}
            </div>
          )}
          */}

        </div>
        

        <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer z-10 md:hidden'>
          {navOpen ? <FaTimes className='text-darkText dark:text-text' size={30}/> 
              : <FaBars className='text-darkText dark:text-text' size={30}/> }
        </div>

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

      </div>

      <ParticleBackground theme={colorMode} />
    </>

  )
}