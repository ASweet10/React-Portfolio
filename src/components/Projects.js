import React from 'react'
import stockDashboard from '../images/stock-dashboard-2.png'
import ecommerce from '../images/ecommerce.png'
import sortVisualizer from '../images/sort-visualizer-1.png'
import horror2 from '../images/horrorgame-2.png'

export default function Projects() {
  const projectTags = [
    
  ]
  const projects = [
    {
      id: 0,
      src: ecommerce,
      title: 'E-Commerce',
      desc: 'E-Commerce site built using Next.JS and Sanity CMS. User can add/remove/update items' +
      ' in cart and use Stripe to complete payments.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/ecommerce',
      tools:[ "HTML", "CSS", "Next.JS", "Sanity", "Stripe" ] 
    },
    {
      id: 1,
      src: stockDashboard,
      title: 'Stock Dashboard',
      desc: 'Stock market investment tool which includes price chart, metrics, investor sentiment,' + 
      ' volume visualization, and news articles.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/StockDashboard',
      tools:[ "Python", "DASH", "Plotly.js" ] 
    },
    {
      id: 2,
      src: sortVisualizer,
      title: 'Sorting Visualizer',
      desc: 'Visualizer for bubble, heap, quick, insertion, and merge sorts.',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer',
      tools:[ "HTML", "CSS", "JavaScript" ] 
    },
    {
      id: 3,
      src: horror2,
      title: 'Game Projects',
      desc: 'Visualizer for bubble, heap, quick, insertion, and merge sorts.',
      demoUrl: '',
      sourceURL: 'https://elitefouragatha.itch.io'
    },
  ]

  return (
    <div name="projects" className='h-full w-full bg-gray-bg-one text-white scroll-mt-96'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>

        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>

            {projects.map(({id, src, title, desc, demoUrl, sourceURL}) => {
              return(
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                  <h1 className='text-center text-2xl'>{title}</h1>
                  <img src={src} alt="" className='rounded-md' />
                  {id === 3 && (
                    <div className='flex items-center justify-center'>
                      <a //Width, button padding on x & y, margin,
                        className='w-1/3 py-4 m-4 bg-button hover:bg-button-hover rounded-md text-center'
                        href={sourceURL}
                        target="blank"
                      > Game Projects </a>
                    </div>
                  )}
                  {id !== 3 && (
                    <div>
                      <div className='mx-6 my-6'><p>{desc}</p></div>
                      <div className='flex items-center justify-center'>

                        <a 
                          className='w-1/3 py-3 m-4 bg-button hover:bg-button-hover rounded-md text-center justify-center'
                          href={demoUrl}
                          target="blank"
                        > Demo </a>
                        <a 
                          className='w-1/3 py-3 m-4 bg-button hover:bg-button-hover rounded-md text-center justify-center'
                          href={sourceURL} 
                          target="blank"
                        > Source </a>
                      </div>
                    </div>
                  )}

              </div>
              )
            })}
</div>
        </div>




      </div>
    </div>
  )
}
