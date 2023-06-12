import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Contact</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/56207652-1b0e-4f2e-b67c-bea54f610b5b'
            method="POST"
            className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Please enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
            />
            <input type='text' name='email' placeholder='Please enter your email'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
            />
            <textarea name='message' rows={10}
              className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none'
            />
            <button
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                  items-center rounded-md hover:scale 110 duration-500' 
            >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
