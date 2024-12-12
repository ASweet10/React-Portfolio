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
    { id: 0, title: 'El Rey', src1: baseS3URL+"NextFood1.png", src2: baseS3URL+"NextFood2.png",
      tools: [ 
        { name: "NextJS", color: "bg-next" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "AWS", color: "bg-aws"},
        { name: "HTML/CSS", color: "bg-html" },
      ],
      desc: 'Restaurant site with full Stripe integration; Includes admin panel for users, products, etc.',
      demoUrl: 'https://next-js-food-order-el-rey.vercel.app',
      sourceURL: 'https://github.com/ASweet10/NextJS_FoodOrder',
    },  
    { id: 1, title: 'Alpine', src1: baseS3URL+"ecommerce1.png", src2: baseS3URL+"ecommerce2.png",
      tools: [ 
        { name: "React", color: "bg-react" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "HTML/CSS", color: "bg-html" },
      ],
      desc: 'Minimalist E-Commerce site. User can filter products and add/remove/update cart items',
      demoUrl: 'https://react-ecommerce-eight-beta.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-Ecommerce',
    },  
    { id: 2, title: 'HomeHub', src1: baseS3URL+"ecommerce1.png", src2: baseS3URL+"ecommerce2.png",
      tools: [ 
        { name: "Next", color: "bg-next" },
        { name: "TypeScript", color: "bg-typescript" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "HTML/CSS", color: "bg-html" },
      ],
      desc: 'Real estate rental site. Users can search locations for properties & filter results',
      demoUrl: 'https://react-ecommerce-eight-beta.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-Ecommerce',
    },
    { id: 3, title: 'EliteFitness', src1: baseS3URL+"MERN-gym-classes.png", src2: baseS3URL+"MERN-gym-blog.png",
      tools: [ 
        { name: "React", color: "bg-react" },
        { name: "Tailwind", color: "bg-tailwind" },
        { name: "MongoDB", color: "bg-mongo" },
        { name: "AWS", color: "bg-aws"},
        { name: "HTML/CSS", color: "bg-html" },
      ],
      desc: 'Gym website built using the MERN stack, AWS, and CloudFront',
      demoUrl: 'https://mern-gym-frontend-asweet10.vercel.app',
      sourceURL: 'https://github.com/ASweet10/MERN-gym',
    },  
  ]

  return (
    <div name="projects" className='h-full w-full scroll-mt-96 bg-transparent text-darkText dark:text-text z-20 relative'>
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
