import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import heroImage from '../images/heroImage.jpg'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div name="about" className='h-screen w-full bg-gradient-to-t from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pr-8'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-5xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='py-4 max-w-md text-white text-center'>
            Recently, I've been learning the MERN stack to build web applications.
             I'm also working on game projects using Unity/C#.
          </p>
        </div>

        {/*
        <div>
          <img src={heroImage} alt="hero-image" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
        */}
      </div>
    </div>
  )
}
