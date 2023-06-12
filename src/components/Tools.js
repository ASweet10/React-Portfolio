import React from 'react'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css-3.png'
import javaScriptLogo from '../images/js.png'
import reactLogo from '../images/React-icon.svg.png'
import expressLogo from '../images/expresslogo.png'
import mongoDBLogo from '../images/pngwing.com.png'
import mySQLLogo from '../images/mysqllogo.png'

export default function Tools() {

  const tools =   [
    {
      id: 1,
      src: htmlLogo,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: cssLogo,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javaScriptLogo,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactLogo,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: expressLogo,
      title: 'Express',
      style: 'shadow-gray-500'
    },
    {
      id:6,
      src: mongoDBLogo,
      title: 'MongoDB',
      style: 'shadow-green-500'
    },
    /*
    {
      id: 7,
      src: mySQLLogo,
      title: 'MySQL',
      style: 'shadow-blue-300'
    }
    */
  ]

  return (
    <div name="tools" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black
    text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold inline'>Tools</p>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          
          {
            tools.map(({id, src, title, style}) =>{
              return(
              <div 
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} className='w-20 mx-auto' />
              </div>
            )})
          }
          
          
          {/* 
          This works but trying to use map properly to avoid repeating these divs

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={htmlLogo} className='w-20 mx-auto' />
              <p className='mt-4'>HTML</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={cssLogo} className='w-20 mx-auto' />
              <p className='mt-4'>CSS</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={reactLogo} className='w-20 mx-auto' />
              <p className='mt-4'>React</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={mongoDBLogo} className='w-20 mx-auto' />
              <p className='mt-4'>MongoDB</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={expressLogo} className='w-20 mx-auto' />
              <p className='mt-4'>Express</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={mySQLLogo} className='w-20 mx-auto' />
              <p className='mt-4'>MySQL</p>
            </div>
            */}
          </div>

        </div>
      </div>
    </div>
  )
}
