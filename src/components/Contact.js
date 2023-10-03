import React, { useState } from 'react'

export default function Contact() {
  const [ query, setQuery ] = useState({ name: '', email: '', message: '', })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      const formSpan = document.getElementById('form-response-span')
      Object.entries(query).forEach(([ key, value ]) => {
        formData.append(key, value)
      })
      fetch('https://getform.io/{your-form-endpoint}', {
        method: 'POST',
        body: formData
      }).then(() => setQuery({ name: '', email: '', message: '' }))
    } catch {
      console.log("error")
    }
  }

  return (
    <div name='contact' className='h-full w-full py-16 bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full text-center'>
        <div>
          <div className='mt-16'> {/* Navbar offset */}
          <p className='text-4xl font-bold inline text-center'>Contact</p>
            <div className='flex justify-center items-center mt-4'>
              <form onSubmit={formSubmit}
                className='flex flex-col w-full md:w-1/2 gap-4'>
                <input type='text' name='name' placeholder='Please enter your name' value={ query.name }
                  onChange={handleInput()} className='p-2 bg-transparent border-2 font-semibold rounded-lg focus:outline-none' 
                />
                <input type='text' name='email' placeholder='Please enter your email' value={ query.email }
                  onChange={handleInput()} className='p-2 bg-transparent border-2 font-semibold rounded-lg focus:outline-none' 
                />
                <textarea name='message' rows={8} id='input-message' value={ query.message }
                  onChange={handleInput()} className='p-2 bg-transparent border-2 font-semibold rounded-lg focus:outline-none'
                />
                <button type='submit'
                  className='bg-background-dark dark:bg-background-light text-text-light dark:text-text-dark 
                   px-6 py-3 my-4 mx-auto flex items-center rounded-md font-semibold' 
                >Send</button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
