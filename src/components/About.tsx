import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export default function About() {

  return (
    <div className='h-full w-full bg-transparent text-text z-20 relative'>
      <div className='max-w-screen-lg px-12 mx-auto flex flex-col items-center justify-center'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-2 text-center md:text-left'>
            <p className='text-4xl font-bold'>About Me</p>
            <p className='text-xl font-bold my-3'>I enjoy developing software and learning new things.
              Currently I'm getting into TypeScript, Docker, and frontend design to improve the user experience.
            </p>
          </div>
          <div className="w-full justify-center flex gap-2">
            <a target="blank" href="https://github.com/ASweet10"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <FaGithub className='text-4xl hover:text-gray-700'/>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/aaronsweet26/"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row gap-2'>
                <FaLinkedin className='text-4xl hover:text-blue-700'/>
              </div>
            </a>
            <a href="mailto:AaronSweet10@gmail.com" target="blank" className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
              <div className='flex flex-row gap-2'>
                <IoMailOutline className='text-4xl hover:text-gray-700'/>
              </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}