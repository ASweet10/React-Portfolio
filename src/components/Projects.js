import React from 'react'
import stockDashboard from '../images/stock-dashboard-2.png'
import portfolioImg from '../images/portfoliopic.png'
import sortVisualizer from '../images/sort-visualizer-1.png'
import horror2 from '../images/horrorgame-2.png'
import itchioLogo from '../images/Itch.io_logo.svg.png'

export default function Projects() {

  const projects = [
    {
      id: 0,
      src: sortVisualizer,
      title: 'Sorting Visualizer',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer'      
    },
    {
      id: 1,
      src: stockDashboard,
      title: 'Stock Dashboard',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/StockDashboard'
    },
    {
      id: 2,
      src: portfolioImg,
      title: 'Portfolio',
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
    <div name="projects" className='md:h-screen w-full bg-gray-bg-one  text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-center'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {projects.map(({id, src, title, demoUrl, sourceURL}) => {
            return(
              <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <h1 className='text-center text-2xl'>{title}</h1>
                <img src={src} alt="" className='rounded-md' />
                {id === 3 && (
                  <div className='flex items-center justify-center'>
                    <a //Width, button padding on x & y, margin,
                      className='w-1/3 px-6 py-4 m-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-900 rounded-md text-center'
                      href={sourceURL}
                      target="blank"
                    > Itch.io </a>
                  </div>
                )}
                {id !== 3 && (
                  <div className='flex items-center justify-center'>
                    <a 
                      className='w-1/3 px-6 py-3 m-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-900 rounded-md text-center'
                      href={demoUrl}
                      target="blank"
                    > Demo </a>
                    <a 
                      className='w-1/3 px-6 py-3 m-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-900 rounded-md text-center'
                      href={sourceURL} 
                      target="blank"
                    > Source </a>
                  </div>
                )}

            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
