import React from 'react'

const Home = () => {
  return (
    <>
        <div className='homeMainDiv flex flex-col gap-12 justify-center pt-48 ml-40 text-white min-h-full w-1/2 h-screen'>
          <div className='flex pl-16 flex-col gap-6'>
            <h2 className='h2Font text-4xl'>BEYOND THE HORIZON</h2>
            <h1 className='h1Font text-8xl'>ASTROVERSE</h1>
          </div>
          <div className='pl-16'>
            <p className='descriptionFont text-2xl w-[70vh]'>Embark on a VR journey that offers a truly out-of-this-world experience, taking you far beyond the edge of space. Why just hover when you can explore the depths of the universe? Sit back, relax, and dive into an adventure that brings the cosmos to your fingertips like never before.</p>
          </div>
        </div>
    </>
  ) 
}

export default Home
