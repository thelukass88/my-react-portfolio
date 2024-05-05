import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <h2 className='fs-1 text-4xl sm:text-7xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</h2>
                <p className='py-4 text-2xl text-white text-center'>Let's collaborate! Feel free to drop me an email or connect through my social links.</p>
            </div>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:l.holliday88@hotmail.com'
            >
                          <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'><HiOutlineMail size={30} />l.holliday88@hotmail.com</button>
            </a>
        </div>
    </div>
  )
}
export default Contact