import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [ query, setQuery ] = useState({ name: '', email: '', message: '', })

  useEffect(() => {
    setQuery()
  })

  return (
    <div name='contact' className='h-full w-full py-16 bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='flex flex-col p-4 justify-center h-full w-full text-center'>
          <p className='text-4xl font-bold inline text-center'>Contact</p>
          <div className="w-1/2 mx-auto flex gap-2 justify-center mt-8">
            <a target="blank" href="https://github.com/ASweet10"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row items-center gap-2'>
                <h1 className='text-xl font-semibold mt-2'>GitHub</h1>
                <FaGithub className='text-3xl'/>
              </div>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/aaronsweet26/"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row gap-2'>
                <div className='flex flex-row items-center gap-2'>
                  <h1 className='text-xl font-semibold mt-2'>LinkedIn</h1>
                  <FaLinkedin className='text-3xl text-blue-500'/>
                </div>
              </div>
            </a>
          </div>

          {/*
          <div className='flex justify-center items-center mt-4'>
            <form action='https://getform.io/f/56207652-1b0e-4f2e-b67c-bea54f610b5b' method="POST" className='flex flex-col w-full md:w-1/2 gap-4'>
              <input type='text' name='name' placeholder='Please enter your name' className='p-2 bg-transparent border-2 rounded-lg' />
              <input type='text' name='email' placeholder='Please enter your email' className='p-2 bg-transparent border-2 rounded-lg' />
              <textarea name='message' rows={8} id='input-message' className='p-2 bg-transparent border-2 rounded-lg' />
              <button type='submit'
                className='px-6 py-3 my-4 mx-auto rounded-md font-semibold bg-darkBackground dark:bg-background text-text dark:text-darkText' 
              >Send</button>
            </form>
          </div>
          */}
      </div>
    </div>
  )
}
