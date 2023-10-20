import React, { useState } from 'react'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css-3.png'
import javaScriptLogo from '../images/js.png'
import reactLogo from '../images/React-icon.svg.png'
import mongoDBLogo from '../images/MongoDB-Logo-500x313.png'
import mySQLLogo from '../images/mysqllogo.png'
import tailwindLogo from '../images/Tailwind_CSS_Logo.svg.png'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const technologies = [
    { id: 1, src: htmlLogo },
    { id: 2, src: cssLogo },
    { id: 3, src: javaScriptLogo },
    { id: 4, src: reactLogo },
    { id: 5, src: tailwindLogo },
    { id: 6, src: mongoDBLogo },
    { id: 7, src: mySQLLogo },
  ]

  return (
    <div name="home" className='w-full h-screen bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pr-8'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-5xl font-bold '>Full-Stack Web Developer</h2>
          <h3 className='text-2xl sm:text-xl py-4 mt-4'>
          Hi, I'm Aaron Sweet. I'm a Full-Stack Web Developer based in Milwaukee, Wisconsin. <br></br>
          </h3>

          <div className='flex flex-col md:flex-row py-4 mt-4 items-center'>
            <h3 className='text-xl font-bold pb-4 md:pr-4'>Tech Stack</h3>
            <div className='flex flex-row gap-4 text-center'>
            { technologies.map(({id, src, title, style}) =>{
                return(
                  <div key={id} className="py-2 rounded-lg">
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