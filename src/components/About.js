import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, useInView } from "framer-motion"
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div name="about" className='h-full w-full dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg px-8 mx-auto flex flex-col items-center justify-center'>
        <motion.div className='mt-20' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        > {/* Navbar offset */}
          <div className='pb-2 text-center md:text-left'>
            <p className='text-4xl font-bold'>About Me</p>
            <p className='text-xl font-bold my-3'>I enjoy developing software and learning new things.
              I'm currently tackling AWS and Docker and building new apps using Next.js and TypeScript.
            </p>
          </div>
          <div className="w-1/2 flex gap-2">
            <a target="blank" href="https://github.com/ASweet10"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row items-center gap-2'>
                <h1 className='text-xl font-semibold mt-2'>GitHub</h1>
                <FaGithub className='text-3xl'/>
              </div>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/aaronsweet26/"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row gap-2'>
                <div className='flex flex-row items-center gap-2'>
                  <h1 className='text-xl font-semibold mt-2'>LinkedIn</h1>
                  <FaLinkedin className='text-3xl text-blue-500'/>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}