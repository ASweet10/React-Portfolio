import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"

const techVariants = {
  animate: {
    transition: {
      repeat: Infinity,
      repeatDelay: 2,
    },
  }
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const baseS3URL = "https://react-portfolio11.s3.us-east-2.amazonaws.com/"

  const ref = useRef(null)
  const isInView = useInView(ref)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const technologies = [
    { id: 1, src: baseS3URL + "html.png" },
    { id: 2, src: baseS3URL + "css-3.png" },
    { id: 3, src: baseS3URL + "js.png" },
    { id: 4, src: baseS3URL + "React-icon.svg.png" },
    { id: 5, src: baseS3URL + "ts-logo-128.png"},
    { id: 6, src: baseS3URL + "nodejs.png" },
    { id: 7, src: baseS3URL + "Tailwind_CSS_Logo.svg.png" },
    { id: 8, src: baseS3URL + "MongoDB-Logo-500x313.png" },
    { id: 9, src: baseS3URL + "mysqllogo.png"},
  ]

  return (
    <div name="home" className='w-full h-screen bg-transparent text-darkText dark:text-text z-20 relative'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pr-8'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-5xl font-bold '>Full-Stack Web Developer</h2>
          <h3 className='text-2xl sm:text-xl py-4 mt-4'>
            Hi, I'm Aaron Sweet. I'm a Full-Stack Dev based in Milwaukee, Wisconsin. <br></br>
          </h3>

          <div className='flex flex-col py-4 items-center mx-4'>
            <h3 className='text-xl font-bold pb-2 md:pr-4'>Tech Stack</h3>
            <div className='flex flex-wrap gap-2 md:gap-4 text-center'>
              { technologies.map(({id, src, title, style}) => {
                  return(
                    <div key={id} className="py-2 rounded-lg" >
                        <img src={src} alt='tech' className='w-12' />
                    </div>
                )})
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}