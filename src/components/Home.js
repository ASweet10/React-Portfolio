import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { TbBrandNextjs } from "react-icons/tb"

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

  const iconTechnologies = [
    { id: 1, name: "HTML", icon: FaHtml5 },
    { id: 2, name: "CSS", icon: FaCss3Alt },
    { id: 3, name: "JavaScript", icon: IoLogoJavascript },
    { id: 4, name: "React.js", icon: FaReact },
    { id: 5, name: "TypeScript", icon: SiTypescript },
    { id: 6, name: "NodeJS", icon: FaNodeJs },
    { id: 7, name: "TailwindCSS", icon: SiTailwindcss },
    { id: 8, name: "MongoDB", icon: DiMongodb },
    { id: 9, name: "MySQL", icon: DiMysql },
    { id: 10, name: "Next.js", icon: TbBrandNextjs },
  ]

  return (
    <div name="home" className='w-full h-screen bg-transparent text-darkText dark:text-text z-20 relative'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pr-8'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-5xl font-bold text-center'>Full-Stack Web Developer</h2>
          <h3 className='text-2xl sm:text-xl py-4 mt-4 text-center'>
            Hi, I'm Aaron Sweet. I'm a Full-Stack Dev based in Milwaukee, Wisconsin. <br></br>
          </h3>

          <div className='flex flex-col py-4 items-center mx-4'>
            <h3 className='text-xl font-bold pb-2 md:pr-4'>Tech Stack</h3>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-2 text-center max-w-lg'>
              { iconTechnologies.map((item, index) => {
                return(
                  <div key={index} className="py-2 rounded-lg flex flex-col justify-center items-center text-center w-24" >
                    <item.icon className='text-5xl'/>
                    <h1 className='text-base font-bold'>{item.name}</h1>
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