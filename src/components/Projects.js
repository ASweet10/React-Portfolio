import React, { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { motion, useInView } from "framer-motion"

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({ opacity: 1, y: 0, transition: {
      delay: 0.05 * index
    }
  })
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const baseS3URL = "https://react-portfolio11.s3.us-east-2.amazonaws.com/"
  const projects = [
    { id: 0, title: 'Gym Website', src1: baseS3URL+"MERN-gym-classes.png", src2: baseS3URL+"MERN-gym-blog.png",
      tools: [ 
        { name: "HTML/CSS", color: "bg-html" },
        { name: "React", color: "bg-react" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "AWS", color: "bg-aws"}
      ],
      desc: 'Gym website built using the MERN stack. Learned how to use AWS S3 and CloudFront CDN to serve blog images.',
      demoUrl: 'https://mern-gym-frontend-asweet10.vercel.app',
      sourceURL: 'https://github.com/ASweet10/MERN-gym',
    },
    { id: 1, title: 'Restaurant Site', src1: baseS3URL+"NextFood1.png", src2: baseS3URL+"NextFood2.png",
      tools: [ 
        { name: "HTML/CSS", color: "bg-html" },
        { name: "NextJS", color: "bg-next" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "AWS", color: "bg-aws"}
      ],
      desc: 'Food ordering app with full Stripe integration; Includes admin panel to manage products and prices',
      demoUrl: 'https://next-js-food-order-el-rey.vercel.app',
      sourceURL: 'https://github.com/ASweet10/NextJS_FoodOrder',
    },  
    { id: 2, title: 'Basic E-Commerce', src1: baseS3URL+"ecommerce1.png", src2: baseS3URL+"ecommerce2.png",
      tools: [ 
        { name: "HTML/CSS", color: "bg-html" },
        { name: "React", color: "bg-react" },
        { name: "Tailwind", color: "bg-tailwind" },
      ],
      desc: 'Minimalist E-Commerce site built with React. User can add/remove/update items in cart',
      demoUrl: 'https://react-ecommerce-ozxxl8raz-asweet10.vercel.app',
      sourceURL: 'https://github.com/ASweet10/ecommerce',
    },  
    { id: 3, title: 'School Projects', src1: baseS3URL+"stock-dashboard-1.png", src2: baseS3URL+"sorting_visualizer.png",
      desc: 'Stock market research dashboard and a visualizer for popular sorting algorithms',
      sourceURL: 'https://github.com/ASweet10/SchoolProjects/tree/main',
    },
  ]

  return (
    <div name="projects" className='h-full w-full scroll-mt-96 bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg px-8 p-4 mx-auto flex flex-col justify-center h-full w-full'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='flex flex-col gap-12' ref={ref}>
            {projects.map(({id, src1, src2, title, desc, demoUrl, sourceURL, tools}) => (
              <motion.div className='flex flex-col md:flex-row' key={id} 
                variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
                viewport={{ once: true}} custom={id}
              >
                <div className='rounded-md h-40 md:h-72 md:w-1/2 w-full object-cover overflow-hidden relative'>
                  <img src={src1} alt="Something went wrong" className='w-full h-full object-cover absolute z-10 transition-transform duration-300 transform hover:scale-110'
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
                      {tools && tools.map(({name, color}) => {
                        return(
                          <div className={`rounded-lg ${color}`}>
                            <h1 className='text-center font-semibold text-lg p-3'>{name}</h1>
                          </div>
                        )
                      })}
                    </div>

                    { demoUrl && (
                      <div className='flex p-6 items-center justify-left gap-6'>
                        <a target="blank" href={demoUrl} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button'>
                          <h1 className='pr-2'>Demo</h1>
                          <BsBoxArrowUpRight size={'20px'} />
                        </a>
                        <a target="blank" href={sourceURL} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button'>
                          <h1 className='pr-2'>Code</h1>
                          <FaGithub size={'20px'} />
                        </a>
                      </div>
                    )}

                    { !demoUrl && (
                      <div className='flex p-6 items-center justify-left gap-6'>
                        <a target="blank" href={sourceURL} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button'>
                          <h1 className='pr-2'>Code</h1>
                          <FaGithub size={'20px'} />
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
</div>
        </div>




      </div>
    </div>
  )
}
