import React, { useRef } from 'react'
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { motion, useInView } from "framer-motion"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiMysql } from "react-icons/si"

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: {
      delay: 0.05 * index
    }
  })
}

export default function Projects() {
  const ref = useRef<HTMLInputElement>(null);

  const baseS3URL = "https://react-portfolio11.s3.us-east-2.amazonaws.com/"
  const projects = [
    { id: 0, title: 'El Rey', src1: baseS3URL+"NextFood1.png", src2: baseS3URL+"NextFood2.png",
      tools: [ 
        { id: 0, name: "NextJS", icon: <SiNextdotjs /> },
        { id: 1, name: "HTML/CSS", icon: <FaHtml5 /> },
        { id: 2, name: "Tailwind", icon: <SiTailwindcss /> },
        { id: 3, name: "MongoDB", icon: <SiMongodb /> },
        { id: 4, name: "Node", icon: <FaNodeJs /> },
        { id: 5, name: "Express", icon: <SiExpress /> },  
      ],
      desc: 'Website for a restaurant; Includes full Stripe integration & admin panel',
      demoUrl: 'https://next-js-food-order-el-rey.vercel.app',
      sourceURL: 'https://github.com/ASweet10/NextJS_FoodOrder',
    },  
    { id: 1, title: 'Alpine', src1: baseS3URL+"ecommerce1.png", src2: baseS3URL+"ecommerce2.png",
      tools: [ 
        { id: 0, name: "React", icon: <FaReact /> },
        { id: 1, name: "HTML/CSS", icon: <FaHtml5 /> },
        { id: 2, name: "Tailwind", icon: <SiTailwindcss /> },
        { id: 3, name: "Node", icon: <FaNodeJs /> },
        { id: 4, name: "Express", icon: <SiExpress /> }, 
        { id: 5, name: "MongoDB", icon: <SiMongodb /> },
      ],
      desc: 'E-Commerce site; User can filter products by price, color, category, etc.',
      demoUrl: 'https://react-ecommerce-eight-beta.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-Ecommerce',
    },  
    { id: 2, title: 'RentPro', src1: baseS3URL+"realestate1.png", src2: baseS3URL+"next_RealEstate2.jpg",
      tools: [ 
        { id: 0, name: "React", icon: <FaReact /> },
        { id: 1, name: "HTML/CSS", icon: <FaHtml5 /> },
        { id: 2, name: "Tailwind", icon: <SiTailwindcss /> },
        { id: 3, name: "TypeScript", icon: <SiTypescript /> },
        { id: 4, name: "MySQL", icon: <SiMysql /> },
      ],
      desc: 'Real estate rental site. Users can search map for properties & filter results',
      demoUrl: 'https://react-real-estate-tau.vercel.app',
      sourceURL: 'https://github.com/ASweet10/React-RealEstate',
    },
    { id: 3, title: 'EliteFitness', src1: baseS3URL+"gym1.jpg", src2: baseS3URL+"MERN-gym-blog.png",
      tools: [ 
        { id: 0, name: "React", icon: <FaReact /> },
        { id: 1, name: "HTML/CSS", icon: <FaHtml5 /> },
        { id: 2, name: "Tailwind", icon: <SiTailwindcss /> },
        { id: 3, name: "Node", icon: <FaNodeJs /> },
        { id: 4, name: "Express", icon: <SiExpress /> },  
        { id: 5, name: "MongoDB", icon: <SiMongodb /> },
      ],
      desc: 'Gym website built using the MERN stack. Uses JWT for user authentication',
      demoUrl: 'https://mern-gym-frontend.vercel.app',
      sourceURL: 'https://github.com/ASweet10/MERN-gym',
    },
  ]

  return (
    <div className="h-full w-full scroll-mt-96 bg-transparent text-text z-20 relative">
      <div className='max-w-screen-lg px-8 p-4 mx-auto flex flex-col justify-center h-full w-full text-center md:text-left'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-8'>
            <p className='text-4xl font-bold inline text-center'>Projects</p>
          </div>

          <div className='flex flex-col gap-12' ref={ref}>
            {projects.map(({id, title, src1, src2, tools, desc, demoUrl, sourceURL,}) => (
              <motion.div key={id}
                variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
                viewport={{ once: true}} custom={id}
              >
                <div className='flex flex-col md:flex-row'>
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
                        {tools && tools.map(({id, name, icon}) => {
                          return(
                            <div className="rounded-lg bg-slate-300 text-gray-800 flex items-center" key={id}>
                              <h1 className='text-center font-semibold text-lg py-3 px-2'>{name}</h1>
                              <div className='text-2xl px-2'>
                                {icon}
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div className='flex pt-6 md:py-6 items-center justify-start gap-4'>
                        <a target="_blank" href={demoUrl} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button hover:text-blue-400'>
                          <h1 className='pr-2 '>Demo</h1>
                          <BsBoxArrowUpRight size={'20px'} />
                        </a>
                        <a target="_blank" href={sourceURL} className='flex flex-row rounded-lg px-8 py-2 items-center bg-button hover:text-blue-400'>
                          <h1 className='pr-2'>Code</h1>
                          <FaGithub size={'20px'} />
                        </a>
                      </div>

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