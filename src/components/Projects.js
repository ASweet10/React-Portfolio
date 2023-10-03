import React from 'react'
import stockDashboard from '../images/stock-dashboard-2.png'
import ecommerce from '../images/ecommerce.png'
import sortVisualizer from '../images/sort-visualizer-1.png'
import horror2 from '../images/horrorgame-2.png'
import { BsLink45Deg } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projectTags = [
    
  ]
  const projects = [
    { id: 0, src: ecommerce, title: 'E-Commerce',
      desc: 'E-Commerce site built using Next.JS and Sanity CMS. User can add/remove/update items' +
      ' in cart and use Stripe to complete payments.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/ecommerce',
      tools:[ "HTML", "CSS", "Next.JS", "Sanity", "Stripe" ]
    },
    { id: 1, src: stockDashboard, title: 'Stock Dashboard',
      desc: 'Stock market investment tool which includes price chart, metrics, investor sentiment,' + 
      ' volume visualization, and news articles.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/StockDashboard',
      tools:[ "Python", "DASH", "Plotly.js" ] 
    },
    { id: 2, src: sortVisualizer, title: 'Sorting Visualizer',
      desc: 'Visualizer for bubble, heap, quick, insertion, and merge sorts.',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer',
      tools:[ "HTML", "CSS", "JavaScript" ]
    },
    { id: 3, src: horror2, title: 'Other Projects',
      desc: 'Visualizer for bubble, heap, quick, insertion, and merge sorts.',
      demoUrl: '',
      sourceURL: 'https://elitefouragatha.itch.io',
      tools:[]
    }
  ]

  return (
    <div name="projects" className='h-full w-full scroll-mt-96 bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light'>
      <div className='max-w-screen-lg px-8 p-4 mx-auto flex flex-col justify-center h-full w-full'>

        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='flex flex-col gap-12'>
            {projects.map(({id, src, title, desc, demoUrl, sourceURL, tools}) => {
              return(
                <div key={id} className='flex flex-col md:flex-row'>
                  <div className='pb-4 md:pr-4'>
                    <img src={src} alt="" className='rounded-md w-full ' />
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='text-left pl-6 text-2xl font-bold'>{title}</h1>
                    <div>
                      <div className='mx-6 my-6 text-lg'><p>{desc}</p></div>
                      <div className='flex flex-row w-full gap-2 justify-left pl-6'>
                        {tools && tools.map((tool) => {
                          return(
                            <div className='rounded-lg bg-project-tools-bg'>
                              <h1 className='text-white text-center p-3'>{tool}</h1>
                            </div>
                          )
                        })}
                      </div>
                      <div className='flex p-4 items-center justify-left gap-8'>
                        <a target="blank" href={demoUrl}><BsLink45Deg size={'48px'}/></a>
                        <a target="blank" href={sourceURL}><FaGithub size={'48px'} /></a>
                      </div>
                    </div>
                  </div>
              </div>
              )
            })}
</div>
        </div>




      </div>
    </div>
  )
}
