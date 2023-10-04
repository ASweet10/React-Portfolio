import React, { useState, useEffect } from 'react'

export default function Contact() {
  const [ query, setQuery ] = useState({ name: '', email: '', message: '', })

  useEffect(() => {
    setQuery()
  })

  return (
    <div name='contact' className='h-full w-full py-16 bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg h-full w-full text-center'>
          <p className='text-4xl font-bold inline text-center'>Contact</p>
          <div className='flex justify-center items-center mt-4'>
            <form action='https://getform.io/f/56207652-1b0e-4f2e-b67c-bea54f610b5b' method="POST" className='flex flex-col w-full md:w-1/2 gap-4'>
              <input type='text' name='name' placeholder='Please enter your name' className='p-2 bg-transparent border-2 rounded-lg' />
              <input type='text' name='email' placeholder='Please enter your email' className='p-2 bg-transparent border-2 rounded-lg' />
              <textarea name='message' rows={8} id='input-message' className='p-2 bg-transparent border-2 rounded-lg' />
              <button type='submit'
                className='bg-darkBackground dark:bg-background text-text dark:text-darkText 
                  px-6 py-3 my-4 mx-auto flex items-center rounded-md font-semibold' 
              >Send</button>
            </form>
          </div>
      </div>
    </div>
  )
}
