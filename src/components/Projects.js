import React, { useRef, useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { motion, useInView } from "framer-motion"
import { useColorMode } from "./useColorMode"

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

  const [ colorMode, setColorMode ] = useState('dark')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setColorMode(theme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', colorMode === 'dark' ? 'dark' : 'light')
    console.log(localStorage.getItem('theme'))
  }, [colorMode])

  const baseS3URL = "https://react-portfolio11.s3.us-east-2.amazonaws.com/"
  const projects = [
    { id: 0, title: 'El Rey', src1: baseS3URL+"NextFood1.png", src2: baseS3URL+"NextFood2.png",
      tools: [ 
        { id: 0, name: "NextJS", color: "bg-next" },
        { id: 1, name: "HTML/CSS", color: "bg-html" },
        { id: 2, name: "Tailwind", color: "bg-tailwind" },
        { id: 3, name: "MongoDB", color: "bg-mongo" },
        { id: 4, name: "AWS", color: "bg-aws"},

      ],
      desc: 'Restaurant site with full Stripe integration; Includes admin panel for users, products, etc.',
      demoUrl: 'https://next-js-food-order-el-rey.vercel.app',
      sourceURL: 'https://github.com/ASweet10/NextJS_FoodOrder',
    },  
    { id: 1, title: 'Alpine', src1: baseS3URL+"ecommerce1.png", src2: baseS3URL+"ecommerce2.png",
      tools: [ 
        { id: 0, name: "React", color: "bg-react" },
        { id: 1, name: "HTML/CSS", color: "bg-html" },
        { id: 2, name: "Tailwind", color: "bg-tailwind" },
        { id: 3, name: "MongoDB", color: "bg-mongo" },
      ],
      desc: 'Minimalist E-Commerce site. User can filter products and add/remove/update cart items',
      demoUrl: 'https://react-ecommerce-eight-beta.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-Ecommerce',
    },  
    { id: 2, title: 'RentPro', src1: baseS3URL+"next_RealEstate1.png", src2: baseS3URL+"next_RealEstate2.jpg",
      tools: [ 
        { id: 0, name: "React", color: "bg-react" },
        { id: 1, name: "HTML/CSS", color: "bg-html" },
        { id: 2, name: "Tailwind", color: "bg-tailwind" },
        { id: 3, name: "TypeScript", color: "bg-typescript" },
      ],
      desc: 'Real estate rental site. Users can search locations for properties & filter results',
      demoUrl: 'https://react-real-estate-tau.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-RealEstate',
    },
    { id: 3, title: 'EliteFitness', src1: baseS3URL+"MERN-gym-classes.png", src2: baseS3URL+"MERN-gym-blog.png",
      tools: [ 
        { id: 0, name: "React", color: "bg-react" },
        { id: 1, name: "HTML/CSS", color: "bg-html" },
        { id: 2, name: "Tailwind", color: "bg-tailwind" },
        { id: 3, name: "MongoDB", color: "bg-mongo" },
        { id: 4, name: "AWS", color: "bg-aws"},
      ],
      desc: 'Gym website built using the MERN stack and AWS.',
      demoUrl: 'https://mern-gym-frontend.vercel.app',
      sourceURL: 'https://github.com/ASweet10/MERN-gym',
    },
  ]

  return (
    <div name="projects" className={`h-full w-full scroll-mt-96 bg-transparent ${colorMode === 'dark' ? 'text-darkText' : 'text-text'} z-20 relative`}>
      <div className='max-w-screen-lg px-8 p-4 mx-auto flex flex-col justify-center h-full w-full text-center md:text-left'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='flex flex-col gap-12' ref={ref}>
            {projects.map(({id, title, src1, src2, tools, desc, demoUrl, sourceURL,}) => (
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
                  <h1 className='text-center md:text-left pl-6 pt-4 md:pt-0 text-2xl font-bold'>{title}</h1>
                  <div>
                    <div className='mx-6 my-4 text-center md:text-left text-lg'><p>{desc}</p></div>
                    <div className='flex flex-row flex-wrap w-full gap-2 justify-center md:justify-start md:pl-6'>
                      {tools && tools.map(({id, name, color}) => {
                        return(
                          <div className={`rounded-lg ${color}`} key={id}>
                            <h1 className='text-center font-semibold text-lg p-3'>{name}</h1>
                          </div>
                        )
                      })}
                    </div>

                    <div className='flex pt-6 md:py-6 items-center justify-start gap-4'>
                      <a target="blank" href={demoUrl} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button'>
                        <h1 className='pr-2'>Demo</h1>
                        <BsBoxArrowUpRight size={'20px'} />
                      </a>
                      <a target="blank" href={sourceURL} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button'>
                        <h1 className='pr-2'>Code</h1>
                        <FaGithub size={'20px'} />
                      </a>
                    </div>

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