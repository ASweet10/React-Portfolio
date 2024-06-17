import React from 'react'
import stockDashboardOne from '../images/stock-dashboard-1.png'
import stockDashboardTwo from '../images/stock-dashboard-2.png'
import ecommerce1 from '../images/ecommerce1.png'
import ecommerce2 from '../images/ecommerce2.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import gymSiteBlog from '../images/MERN-gym-blog.png'
import gymSiteClasses from '../images/MERN-gym-classes.png'
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export default function Projects() {

  const projects = [
    { id: 0, src1: ecommerce1, src2: ecommerce2, title: 'E-Commerce', tools:[ "HTML/CSS", "React", "Tailwind", "Sanity" ],
      desc: 'E-Commerce site built using React and Sanity CMS. User can add/remove/update items in cart',
      demoUrl: '',
      sourceURL: 'https://github.com/ASweet10/ecommerce',
    },
    { id: 1, src1: gymSiteBlog, src2: gymSiteClasses, title: 'Gym Website', tools:[ "HTML/CSS", "React", "Tailwind", "MongoDB", "Express" ],
      desc: 'Gym website built using the MERN stack. Learned how to use AWS S3 and CloudFront CDN to serve blog images.',
      demoUrl: 'https://mern-gym-frontend-asweet10.vercel.app',
      sourceURL: 'https://github.com/ASweet10/MERN-gym',
    },
    { id: 2, src1: food1, src2: food2, title: 'Grubhub Clone', tools:[ "HTML/CSS", "React", "Tailwind", "MongoDB", "Express" ],
      desc: 'Food ordering app built using the MERN stack. Includes admin panel to manage products and prices',
      demoUrl: 'https://sorting-visualizer-107.netlify.app',
      sourceURL: 'https://github.com/ASweet10/SortingVisualizer',
    },    
    { id: 3, src1: stockDashboardOne, src2: stockDashboardTwo, title: 'Stock Dashboard', tools:[ "Python", "DASH", "Plotly.js" ],
      desc: 'Stock market investment tool which includes price chart, metrics, investor sentiment,' + 
      ' volume visualization, and news articles.',
      demoUrl: 'https://stockdashboard-406v.onrender.com',
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
            {projects.map(({id, src1, src2, title, desc, demoUrl, sourceURL, tools}) => {
              return(
                <div key={id} className='flex flex-col md:flex-row'>
                  <div className='rounded-md h-40 md:h-72 md:w-1/2 w-full object-cover overflow-hidden relative'>
                    <img src={ src1 }  alt="Something went wrong" 
                        className='w-full h-full object-cover absolute z-10 transition-transform duration-300 transform hover:scale-110'
                    />
                    <img src={ src2 } alt="Something went wrong"
                        className='w-full h-full object-cover absolute z-20 opacity-0 transition-opacity duration-300 transform hover:opacity-100'
                    />
                  </div>

                  {/* <img src={src1} alt="" className='rounded-md h-48 w-96 object-cover' /> */}
                  <div className='flex flex-col md:w-1/2 w-full'>
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
