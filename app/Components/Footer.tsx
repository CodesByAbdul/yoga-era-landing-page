import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 p-4 h-auto bg-[#e2e0dc]'>
      <div className='flex flex-col justify-center items-start md:flex-row md:justify-around md:items-start'>
        <div className='text-center'>
          <div className='flex gap-4 justify-start items-center md:justify-center mb-4'>
            <img className='p-2 border-1 border-[#b69572] rounded-full' src="/icon1.svg" alt="" />
            <img className='p-2 border-1 border-[#b69572] rounded-full' src="/icon2.svg" alt="" />
            <img className='p-2 border-1 border-[#b69572] rounded-full' src="/icon3.svg" alt="" />
            <img className='p-2 border-1 border-[#b69572] rounded-full' src="/icon4.svg" alt="" />
            <img className='p-2 border-1 border-[#b69572] rounded-full' src="/icon5.svg" alt="" />
          </div>
          <a href="#home" className="text-lg font-bold flex flex-col items-start md:items-center" onClick={() => window.scrollTo(0, 0)} >
            <img src="/logo.svg" alt="Logo" />
            <p>Yoga Era</p>
          </a>
          <ul className="flex items-start gap-3 md:flex-row md:space-x-6 my-3 md:p-0">
                <li>
                  <a
                    href="#home"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:opacity-50 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#classes"
      
                    className="hover:opacity-50 cursor-pointer"
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
      
                    className="hover:opacity-50 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
      
                    className="hover:opacity-50 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='font-bold mb-3'>Resources</h3>
          <a className='mb-2 cursor-pointer hover:opacity-50'>Wellness Tips</a>
          <a className='mb-2 cursor-pointer hover:opacity-50'>Yoga Dictionary</a>
          <a className='mb-2 cursor-pointer hover:opacity-50'>Meditation Techniques</a>
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='font-bold mb-3'>Support</h3>
          <a className='mb-2 cursor-pointer hover:opacity-50'>FAQs</a>
          <a href='#contact' className='mb-2 cursor-pointer hover:opacity-50'>Contact Us</a>
          <a href='#testimonials' className='mb-2 cursor-pointer hover:opacity-50'>Testimonials</a>
        </div>
      </div>
      <div className='text-center p-4 mt-6 pb-0'>
        <p className='text-sm'>© 2023 Yoga Era. All rights reserved.</p>
        <p className='text-sm'>Designed by <a href="https://abdulrahmanadigun-portfolio.vercel.app/" target="_blank" className='text-[#b69572] hover:underline'>Abdulrahman Adigun</a></p>
      </div>
    </div>
  )
}

export default Footer