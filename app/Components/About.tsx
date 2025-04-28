import React from 'react'

const About = () => {
  return (
    <div className='pt-10 p-4 h-auto bg-gradient-to-br from-[#E7DBCD] to-white' id="about">
      <div className='text-center p-4'>
        <h2 className='capitalize text-3xl font-bold'>yoga style & classes</h2>
        <p className='text-center text-sm mt-4 md:w-[50vw] mx-auto'>At YogaEra, we believe there's no one-size-fits-all practice. Whether you're seeking calm, strength, flexibility, or simply a moment of peace, our wide range of yoga styles meets you exactly where you are. </p>
      </div>
    
      <div className='grid md:grid-cols-2 md:justify-between md:items-center gap-4 w-full p-4 mt-4 text-center'>
        <div className='w-full mb-4'>
          <div>
            <img className='w-full max-w-md mx-auto max-h-96 mb-2' src="/about-img1.png" alt="woman doing yoga image" />
          </div>
          <p className='md:w-full md:mx-auto'>Yoga <br /> Slow down, breathe deep. <br /> This gentle, traditional practice is perfect for beginners or anyone seeking balance and calm.</p>
          <div className='space-x-2 space-y-2 w-[90%] mt-4 mx-auto text-center md:text-left lg:text-center'>
            <button className='bg-[#5f4729] text-white py-1 px-5 rounded-lg hover:bg-[#d8a87a]'>All</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Beginner</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Intermediate</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Advanced</button>
          </div>
        </div>
        <div className='w-full mb-4'>
          <div>
            <img className='w-full max-w-md mx-auto max-h-96 mb-2' src="/about-img2.png" alt="woman doing yoga image" />
          </div>
          <p className='md:w-full md:mx-auto'>Power Yoga <br /> Flow hard. Feel Strong. <br />This high energy class blends strength, balance into an uplifting workout.</p>
          <div className='space-x-2 space-y-2 w-[90%] mt-4 mx-auto text-center md:text-left lg:text-center'>
            <button className='bg-[#5f4729] text-white py-1 px-5 rounded-lg hover:bg-[#d8a87a]'>All</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Beginner</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Intermediate</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Advanced</button>
          </div>
        </div>
        <div className='w-full mb-4'>
          <div>
            <img className='w-full max-w-md mx-auto max-h-96 mb-2' src="/about-img3.png" alt="woman doing yoga image" />
          </div>
          <p className='md:w-full md:mx-auto'>Meditation <br /> Slow down, breathe deep. <br />This gentle, traditional practice is perfect for beginners or anyone seeking balance and calm.
</p>
          <div className='space-x-2 space-y-2 w-[90%] mt-4 mx-auto text-center md:text-left lg:text-center'>
            <button className='bg-[#5f4729] text-white py-1 px-5 rounded-lg hover:bg-[#d8a87a]'>All</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Beginner</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Intermediate</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Advanced</button>
          </div>
        </div>
        <div className='w-full mb-4'>
          <div>
            <img className='w-full max-w-md mx-auto max-h-96 mb-2' src="/about-img4.png" alt="woman doing yoga image" />
          </div>
          <p className='md:w-full md:mx-auto'>Vinyasa Flow <br />Move with your breath. <br />A dynamic and creative style that links movement with breath. Vinyasa Flow energizes the body and quiet the mind.</p>
          <div className='space-x-2 space-y-2 w-[90%] mt-4 mx-auto text-center md:text-left lg:text-center'>
            <button className='bg-[#5f4729] text-white py-1 px-5 rounded-lg hover:bg-[#d8a87a]'>All</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Beginner</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Intermediate</button>
            <button className='border-1 py-1 px-3 rounded-lg hover:bg-[#d8a87a]'>Advanced</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About