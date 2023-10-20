export default function About() {

  return (
    <div name="about" className='h-full w-full justify-center bg-background dark:bg-darkBackground text-darkText dark:text-text'>
      <div className='max-w-screen-lg px-8 mx-auto flex flex-col justify-center'>
        <div className='mt-20'> {/* Navbar offset */}
          <div className='pb-2 text-center md:text-left'>
            <p className='text-4xl font-bold'>About Me</p>
          </div>

        </div>
      </div>
    </div>
  )
}
