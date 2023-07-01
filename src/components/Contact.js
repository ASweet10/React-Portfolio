import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='h-full w-full bg-gray-bg-one text-white top-96'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full text-center'>
        <div>
          <div className='mt-16'> {/* Navbar offset */}
          <p className='text-4xl font-bold inline text-center'>Contact</p>
            <div className='flex justify-center items-center mt-4 text-white'>
              <form action='https://getform.io/f/56207652-1b0e-4f2e-b67c-bea54f610b5b'
                method="POST"
                className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder='Please enter your name'
                  className='p-2 bg-transparent border-2 rounded-lg focus:outline-none' 
                />
                <input type='text' name='email' placeholder='Please enter your email'
                  className='p-2 bg-transparent border-2 rounded-lg focus:outline-none' 
                />
                <textarea name='message' rows={8}
                  className='p-2 bg-transparent border-2 rounded-lg focus:outline-none'
                />
                <button
                  className='text-white bg-button hover:bg-button-hover px-6 py-3 my-4 mx-auto flex
                      items-center rounded-md hover:scale 110 duration-500' 
                >Send</button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
