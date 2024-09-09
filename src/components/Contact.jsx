import React from 'react'

const About = () => {
  return (
    <>
        <div className='homeMainDiv justify-center flex flex-col gap-12 pt-[49px] ml-40 text-white min-h-full w-1/2 h-screen'>
          <div className='flex pr-11 items-center flex-col'>
            <h1 className='h1FontAC'>CONTACT US</h1>
            {/* <h2 className='h2Font mt-[-15px]'>ASTROVERSE: BEYOND THE HORIZON</h2> */}
          </div>
          <div className='pl-24 overflow-scroll'>
            <p className='descriptionFont text-2xl w-[70vh]'>We’d love to hear from you! Whether you have feedback, questions, or ideas for improvement, feel free to reach out.</p>
            <br />
            {/* <p className='descriptionFont text-2xl w-[70vh]'>With AstroVerse, you can:</p> */}
            <ul className='pl-10'>
              <li className='pl-4 descriptionFont list-disc text-2xl w-[70vh]'>Email: contact@astroverse.com</li>
              <li className='pl-4 descriptionFont list-disc text-2xl w-[70vh]'>Phone: +91 123-456-7890</li>
              {/* <li className='descriptionFont list-disc text-2xl w-[70vh]'>Engage with VR: Step into a virtual space world with an experience that feels close to reality.</li> */}
            </ul>
            <br />
            <p className='descriptionFont text-2xl w-[70vh]'>Follow Us on social media for updates:</p>
            <br />
            <ul className='pl-10'>
              <li className='pl-4 descriptionFont list-disc text-2xl w-[70vh]'>Twitter: @AstroVerse</li>
              <li className='pl-4 descriptionFont list-disc text-2xl w-[70vh]'>Instagram: @AstroVerse</li>
            </ul>
          </div>
        </div>
    </>
  ) 
}

export default About
