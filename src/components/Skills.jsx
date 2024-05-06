import React, { useState } from 'react';
import { Reveal } from './Snazzy';
import { Link } from 'react-scroll';

const Skills = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div name='skills' className='w-full h-100% bg-[#0a192f] mx-20px text-gray-300 pt-50px pb-25px'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-100%'>
          <div className='w-full flex justify-center items-center flex-col mb-7 mt-8'>
            <Reveal>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              </Reveal>
              <Reveal>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with:</p>
            </Reveal>
          </div> 
          <Reveal>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='html my-4'>
                  <Link onClick={handleClick} to='html' smooth={true} duration={500}>HTML
                  </Link>
                  </p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='css my-4'>CSS</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='javascript my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='react my-4'>REACT</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='github my-4'>GITHUB</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>EXPRESS JS</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>TailwindCSS</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Sass</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>RESTful API</p>
              </div>
              <div className='bg-cyan-800 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>PostgreSQL</p>
              </div>
          </div>
          </Reveal>
      </div>
    </div>
  );
};
export default Skills;
