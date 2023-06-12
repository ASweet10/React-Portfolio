import React from 'react'
import stockDashboard from '../images/stock-dashboard-2.png'
import githubLogo from '../images/GitHub-Mark-Light-64px.png'
import sortVisualizer from '../images/sort-visualizer-1.png'
import horror2 from '../images/horrorgame-2.png'
import itchioLogo from '../images/Itch.io_logo.svg.png'

export default function Projects() {

  const projects = [
    {
      id: 1,
      src: sortVisualizer,
      title: 'Sorting Visualizer',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer'      
    },
    {
      id: 2,
      src: stockDashboard,
      title: 'Stock Dashboard',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/StockDashboard'
    },
    {
      id: 3,
      src: horror2,
      title: 'Game Projects',
      demoUrl: '',
      sourceURL: 'https://elitefouragatha.itch.io'
    },
  ]

  return (
    <div name="projects" className='md:h-screen w-full bg-gradient-to-b from-black to-gray-800
    text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {projects.map(({id, src, title, demoUrl, sourceURL}) => {
            return(
              <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <h1 className='text-center text-2xl'>{title}</h1>
                <img src={src} alt="" className='rounded-md' />
                {id === 3 && (
                  <div className='flex items-center justify-center'>
                    <a //Width, button padding on x & y, margin,
                      className='w-1/2 px-6 py-6 m-4 bg-gray-600 rounded-md text-center'
                      href={sourceURL}
                      target="blank"
                    >
                    <img src={itchioLogo} className='w-16' />
                    </a>

                  </div>
                )}
                {id !== 3 && (
                  <div className='flex items-center justify-center'>
                    <a 
                      className='w-1/3 px-6 py-3 m-4 bg-gray-600 rounded-md text-center'
                      href={demoUrl}
                      target="blank"
                    >
                      Demo
                    </a>
                    <a 
                      className='w-1/3 px-6 py-3 m-4 bg-gray-600 rounded-md text-center justify-center items-center'
                      href={sourceURL} 
                      target="blank"
                    >
                      <img className='w-14 justify-center items-center' src={githubLogo} alt="Github"/>
                    </a>
                  </div>
                )}

            </div>
            )
          })}
          {/* 
          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={stockDashboard} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button>Source<img src={githubLogo}/></button>
            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={sortVisualizer} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button>Source<img src={githubLogo}/></button>
            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={sortVisualizer} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button>Source<img src={githubLogo}/></button>
            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={sortVisualizer} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button>Source<img src={githubLogo}/></button>
            </div>
          </div>

          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <img src={sortVisualizer} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button>Source<img src={githubLogo}/></button>
            </div>
          </div>
          */}

        </div>
      </div>
    </div>
  )
}
