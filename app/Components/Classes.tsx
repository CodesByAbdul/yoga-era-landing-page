import React from 'react'

const Classes = () => {
  return (
    <div className="pt-10 p-4 h-auto bg-gradient-to-br from-[#E7DBCD] to-white" id="classes">
      <div className='text-center flex flex-col justify-center items-center md:flex md:flex-row md:justify-around w-full p-4'>
        <img className='w-1/3 mb-4' src="/class-img1.png" alt="" />
        <div>
          <h2 className='capitalize font-bold text-2xl md:text-3xl lg:text-4xl'>start your yoga journey today</h2>
          <p className='text-center text-sm mt-4'>Our yoga classes are designed to help you connect <br /> with your body, calm your mind, and unlock your full potential. </p>
          <button className='bg-[#685D4F] text-white px-4 py-2 rounded-full mt-4 hover:bg-[#7A6A5B] transition duration-300'>Learn more</button>
        </div>
      </div>
      <div className='flex flex-col-reverse gap-4 justify-between items-center md:flex md:flex-row md:justify-stretch md:items-stretch w-full p-4 mt-4 capitalize text-center'>
        <div className='w-full mb-4'>
          <h2 className='font-bold text-2xl my-8'>why choose our yoga classes </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className='flex flex-col justify-center items-center'>
              <div className="p-2 bg-[#c8c5c5] rounded-lg">
                <div className="p-4 bg-[#fdf2e4] rounded-full"><img src="/vector1.svg" alt="" /></div>
              </div>
              <p className='text-sm mt-2'>experienced instructors</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className="p-2 bg-[#c8c5c5] rounded-lg">
                <div className="p-4 bg-[#fdf2e4] rounded-full"><img src="/vector2.svg" alt="" /></div>
              </div>
              <p className='text-sm mt-2'>flexible class schedule</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className="p-2 bg-[#c8c5c5] rounded-lg">
                <div className="p-4 bg-[#fdf2e4] rounded-full"><img src="/vector3.svg" alt="" /></div>
              </div>
              <p className='text-sm mt-2'>yoga for all classes</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className="p-2 bg-[#c8c5c5] rounded-lg">
                <div className="p-4 bg-[#fdf2e4] rounded-full"><img src="/vector4.svg" alt="" /></div>
              </div>
              <p className='text-sm mt-2'>online & on- demand classes</p>
            </div>
          </div>
        </div>
        <div className='w-full h-auto object-contain'><img className='w-full max-w-md mx-auto max-h-96' src="/class-img2.png" alt="woman doing yoga image" /></div>
      </div>
    </div>
  )
}

export default Classes