import React from 'react'

const Testimonials = () => {
  return (
      <div className='pt-10 p-4 h-auto bg-gradient-to-br from-[#E7DBCD] to-white' id="testimonials">
        <div className='text-center p-4'>
          <h2 className='capitalize text-3xl font-bold'>testimonials</h2>
          <p className='text-center text-sm mt-4 md:w-[50vw] mx-auto'>At Yoga Era, our community is at the heart of everything we do. From first-time yogis to seasoned practitioners, our students find space to grow, heal, and reconnect.</p>
        </div>
        <div className="md:flex md:justify-between md:items-center gap-6 w-full p-4 mt-4 text-center">
          <div className='mb-4 md:mt-14'>
            <img className='w-full max-w-md mx-auto max-h-96 mb-1' src="/testimonial-img1.png" alt='' />  
             <div className='bg-[#bbafa0] max-w-md mx-auto py-2 px-5 rounded-lg'>
              <h3 className='text-lg font-bold'>Grace Ben <br />
              <span className='italic text-gray-700'>Tech Consultant</span></h3>
              <p className='text-sm'>“Stronger, calmer, more present”
              “I never thought I’d enjoy yoga this much. The Power Yoga flows are challenging but energizing, and I’ve seen a huge difference in my strength and focus.</p>
             </div>
          </div>
          <div className='mb-4'>
            <img className='w-full max-w-md mx-auto max-h-96 mb-1' src="/testimonial-img2.png" alt='' />  
             <div className='bg-[#b8a58f] max-w-md mx-auto py-2 px-5 rounded-lg'>
              <h3 className='text-lg font-bold'>Anita Brown <br />
              <span className='italic text-gray-700'>Graphics Designer</span></h3>
              <p className='text-sm'>“Stronger, calmer, more present”
              I never thought I’d enjoy yoga this much. The Power Yoga flows are challenging but energizing, and I’ve seen a huge difference in my strength and focus.</p>
             </div>
          </div>
          <div className='mb-4 md:mt-14'>
            <img className='w-full max-w-md mx-auto max-h-96 mb-1' src="/testimonial-img3.png" alt='' />  
             <div className='bg-[#a6998a] py-2 px-5 rounded-lg max-w-md mx-auto'>
              <h3 className='text-lg font-bold'>Melissa Sam <br />
              <span className='italic text-gray-700'>Freelance Writer</span></h3>
              <p className='text-sm'>“I travel often, and Yoga Era makes it easy to stay centered no matter where I am. The instructors are so grounding, and the classes flow beautifully and active throughout my day. i highly recommend.”</p>
             </div>
          </div>

        </div>
      </div>
  )
}

export default Testimonials