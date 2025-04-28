import React from 'react';
import { Link } from 'react-router-dom'; 

const Contact = () => {
  return (
    <div className='pt-10 p-4 h-auto bg-[#d1c5b6] flex flex-col justify-center items-center' id="contact">
      <h2 className='capitalize text-3xl font-bold mb-6'>Begin Your Journey Today</h2>
      <Link to="/auth">
        <button className='bg-[#5a4f41] border-none text-white rounded-full text-center p-3 transition-all duration-300 cursor-pointer hover:bg-[#9e896d] hover:shadow-[0_0_0_5px_#5a4f412f] hover:text-white'>
          Sign Up Today
        </button>
      </Link>
    </div>
  );
};

export default Contact;