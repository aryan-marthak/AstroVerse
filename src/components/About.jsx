import React from 'react'

const About = () => {
  return (
    <>
        <div className='homeMainDiv flex flex-col gap-12 pt-[49px] ml-40 text-white min-h-full w-1/2 h-screen'>
          <div className='flex pr-11 items-center flex-col'>
            <h1 className='h1FontAC'>ABOUT</h1>
            <h2 className='h2Font mt-[-15px]'>ASTROVERSE: BEYOND THE HORIZON</h2>
          </div>
          <div className='pl-24 overflow-scroll'>
            <p className='descriptionFont text-2xl w-[70vh]'>AstroVerse is an interactive platform designed to bring the wonders of our solar system to life through virtual reality. Our mission is to make space exploration accessible and engaging for everyone. Whether you’re a student, educator, or space enthusiast, AstroVerse allows you to explore planets, moons, and other celestial bodies in an immersive 3D environment.</p>
            <br />
            <p className='descriptionFont text-2xl w-[70vh]'>With AstroVerse, you can:</p>
            <ul>
              <li className='descriptionFont list-disc text-2xl w-[70vh]'>Navigate the Solar System: Explore planets and moons with detailed information at your fingertips.</li>
              <li className='descriptionFont list-disc text-2xl w-[70vh]'>Learn Fun Facts: Discover interesting facts about each celestial body, sourced from reliable scientific platforms.</li>
              <li className='descriptionFont list-disc text-2xl w-[70vh]'>Engage with VR: Step into a virtual space world with an experience that feels close to reality.</li>
            </ul>
            <br />
            <p className='descriptionFont pb-20 text-2xl w-[70vh]'>We believe that learning about space should be fun, accessible, and immersive. AstroVerse provides a unique blend of education and engagement, allowing users to travel through the cosmos without leaving their homes.</p>
          </div>
        </div>
    </>
  ) 
}

export default About
