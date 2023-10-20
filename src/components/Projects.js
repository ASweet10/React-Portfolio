import React from 'react'
import stockDashboard from '../images/stock-dashboard-2.png'
import ecommerce from '../images/ecommerce.png'
import sortVisualizer from '../images/sort-visualizer-1.png'
import gymWebsite from '../images/bg_image_forest.jpg'
import { FaGithub } from 'react-icons/fa'
import { BsBox, BsBoxArrowUpRight } from 'react-icons/bs'

export default function Projects() {
  const projectTags = [
    
  ]
  const projects = [
    { id: 0, src: ecommerce, title: 'E-Commerce', tools:[ "HTML", "CSS", "Next.JS", "Sanity", "Stripe" ],
      desc: 'E-Commerce site built using Next.JS and Sanity CMS. User can add/remove/update items' +
      ' in cart and use Stripe to complete payments.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/ecommerce',
    },
    { id: 1, src: gymWebsite, title: 'Gym Website', tools:[],
      desc: '',
      demoUrl: '',
      sourceURL: '',
    },
    { id: 2, src: gymWebsite, title: 'Social Media Site', tools:[ "HTML", "CSS", "React", "Tailwind", "MongoDB" ],
      desc: '',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer',
    },    
    { id: 3, src: stockDashboard, title: 'Stock Dashboard', tools:[ "Python", "DASH", "Plotly.js" ],
      desc: 'Stock market investment tool which includes price chart, metrics, investor sentiment,' + 
      ' volume visualization, and news articles.',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/StockDashboard',
    },
  ]

  return (
    <div name="projects" className='h-full w-full scroll-mt-96 bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg px-8 p-4 mx-auto flex flex-col justify-center h-full w-full'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='flex flex-col gap-12'>
            {projects.map(({id, src, title, desc, demoUrl, sourceURL, tools}) => {
              return(
                <div key={id} className='flex flex-col md:flex-row'>
                  <img src={src} alt="" className='rounded-md h-48 w-96 object-cover' />
                  <div className='flex flex-col'>
                    <h1 className='text-left pl-6 pt-3 md:pt-0 text-2xl font-bold'>{title}</h1>
                    <div>
                      <div className='mx-6 my-6 text-lg'><p>{desc}</p></div>
                      <div className='flex flex-row flex-wrap w-full gap-2 justify-left pl-6'>
                        {tools && tools.map((tool) => {
                          return(
                            <div className='rounded-lg bg-project-tools-bg'>
                              <h1 className='text-text text-center p-3'>{tool}</h1>
                            </div>
                          )
                        })}
                      </div>

                      <div className='flex p-6 items-center justify-left gap-6'>
                        <a target="blank" href={demoUrl} className='flex flex-row rounded-lg px-8 py-2 items-center'>
                          <h1 className='pr-2'>Demo</h1>
                          <BsBoxArrowUpRight size={'20px'} />
                        </a>
                        <a target="blank" href={sourceURL} className='flex flex-row rounded-lg px-8 py-2 items-center'>
                          <h1 className='pr-2'>Code</h1>
                          <FaGithub size={'20px'} />
                        </a>
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
