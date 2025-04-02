import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export default function Contact() {

  return (
    <div className='h-full w-full py-16 bg-transparent text-darkText dark:text-text z-20 relative'>
      <div className='flex flex-col p-4 justify-center h-full w-full text-center'>
          <div className="w-full md:w-1/2 md:mx-auto flex flex-col md:flex-row gap-6 justify-center text-center mt-8">
            <a target="blank" href="https://github.com/ASweet10"className='flex flex-col rounded-lg px-6 py-2 items-center justify-center'>
              <div className='flex flex-row items-center gap-2 group'>
                <h1 className='text-xl font-semibold'>GitHub</h1>
                <FaGithub className='text-2xl group-hover:text-gray-700'/>
              </div>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/aaronsweet26/"className='flex flex-col rounded-lg px-6 py-2 items-center justify-center'>
              <div className='flex flex-row items-center gap-2 group'>
                <h1 className='text-xl font-semibold'>LinkedIn</h1>
                <FaLinkedin className='text-2xl group-hover:text-blue-700'/>
              </div>
            </a>
            <a href="mailto:AaronSweet10@gmail.com" target="blank" className='flex flex-col rounded-lg px-6 py-2 items-center justify-center'>
              <div className='flex flex-row gap-2'>
                <div className='flex flex-row items-center gap-2 group'>
                  <h1 className='text-xl font-semibold'>Contact</h1>
                  <IoMailOutline className='text-2xl group-hover:text-gray-700'/>
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
