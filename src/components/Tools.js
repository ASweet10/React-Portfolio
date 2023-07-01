import React from 'react'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css-3.png'
import javaScriptLogo from '../images/js.png'
import reactLogo from '../images/React-icon.svg.png'
import nodeJSLogo from '../images/nodejs.png'
import mongoDBLogo from '../images/mongodb.png'
import mySQLLogo from '../images/mysqllogo.png'
import tailwindLogo from '../images/Tailwind_CSS_Logo.svg.png'

export default function Tools() {
  const tools = [
    { id: 1, src: htmlLogo, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: cssLogo, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javaScriptLogo, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, src: reactLogo, title: 'React', style: 'shadow-blue-600' },
    { id: 5, src: nodeJSLogo, title: 'NodeJS', style: 'shadow-green-200' },
    { id:6, src: mongoDBLogo, title: 'MongoDB', style: 'shadow-green-800' },
    { id: 7, src: mySQLLogo, title: 'MySQL', style: 'shadow-blue-300' },
    { id: 8, src: tailwindLogo, title: 'Tailwind', style: 'shadow-teal-300' }
  ]

  return (
    <div name="tools" className='h-screen w-full bg-gray-bg-one text-white mt-25'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20'> {/* Navbar offset */}
          <div><p className='text-4xl font-bold inline text-center'>Tools</p></div>
          <p className='text-l font-bold inline text-center'>Here are some of my favorite tools right now</p>

          <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-4 px-12 sm:px-0'>
          { tools.map(({id, src, title, style}) =>{
              return(
                <div 
                  key={id}
                  className={`py-2 rounded-lg ${style}`}>
                    <img src={src} alt='tool' className='w-20 mx-auto' />
                    <p className='text-xl font-bold inline text-center'>{title}</p>
                </div>
            )})
          }
          </div>
        </div>
      </div>
    </div>
  )
}
