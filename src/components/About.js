import linkedInPhoto from '../images/LinkedInPhoto.jpg'
import linkedInLogo from '../images/LinkedIn-Logo.png'

export default function About() {

  return (
    <div name="about" className='h-full w-full bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg px-8 mx-auto flex flex-col items-center justify-center'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-2 text-center md:text-left'>
            <p className='text-4xl font-bold'>About Me</p>
            <p className='text-xl font-bold my-3'>I enjoy developing web apps and learning new things.
              I'm currently tackling AWS and Docker tutorials and building new apps using Next.js and TypeScript.
              I do game dev on the side and it's been a lot of fun so feel free to ask me about it!
            </p>
          </div>
          <div className="w-1/4 mx-auto">
          <a target="blank" href="https://www.linkedin.com/in/aaronsweet26/"className='flex flex-col rounded-lg px-8 py-2 items-center justify-center'>
            <img src={ linkedInPhoto }  alt="Something went wrong" 
                className='rounded-full'
            />
            <div className='flex flex-row items-center gap-2'>
              <h1 className='text-xl font-semibold mt-2'>LinkedIn</h1>
              <img src={ linkedInLogo }  alt="Something went wrong" 
                  className='w-8 h-8'
              />
            </div>
          </a>
          </div>

        </div>
      </div>
    </div>
  )
}
