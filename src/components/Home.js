import React, { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div name="about" className='w-full h-screen bg-background-light dark:bg-background-dark'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pr-8'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-5xl font-bold text-text-dark dark:text-text-light'>Hello, I'm Aaron</h2>
          <h3 className='text-2xl sm:text-4xl py-4 mt-4 w-full text-text-dark dark:text-text-light text-left'>
          Full-Stack Web Developer. Occasional game dev
          </h3>
        </div>
      </div>
    </div>
  )
}