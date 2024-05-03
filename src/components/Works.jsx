import React from 'react';
import code from '../assets/code2.png';
import shakespeers from '../assets/shakespeers.png';
import thingstodo from '../assets/thingstodo.png';
import passwordgen from '../assets/8characters.png';
import codequiz from '../assets/question-examples-1.png';
import readmegen from '../assets/readmegen.png';
import dayplanner from '../assets/plannertop.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-green-100 '>
      <div className='max-w-[1000px] mx-auto p-4 bg-green-100 flex flex-col justify-center w-full h-full'>
        <div className='py-16 pb-8 w-full mb-2 rounded-md bg-cyan-800 flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my recent work/ projects.</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${shakespeers})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Shakes-Peers
              </span>
              <p className='text-center'>A web application designed to aid students with revision for their English GCSE or A-Level exams.</p>
              <div className='pt-8 text-center'>
                <a href='https://shakespeers.netlify.app' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Giftyaning/Shakespeers' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${thingstodo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Things To Do In My City
              </span>
              <p className='text-center'>A web application built with the Ticket Master API - designed to allow users to search for current events in a chosen city.</p>
              <div className='pt-8 text-center'>
                <a href='https://sarenne89.github.io/TTDIMC/' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/sarenne89/TTDIMC' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dayplanner})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Work Day Planner
              </span>
              <p className='text-center'>A simple planner which uses both JQuery and DaysJS, as well as APIs, that allows users to save an update events on a calendar that updates daily.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/thelukass88/work-day-planner' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://thelukass88.github.io/work-day-planner/' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${readmegen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                README Generator
              </span>
              <p className='text-center'>Command line interface program that 
                                        inquires and compiles information into a 
                                        comprehensive Readme. NPM: Inquirer (8.0) | NodeJS |</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/thelukass88/READMEgenerator/assets/128861516/5eb875aa-43a1-4f83-a693-70d54c21d753' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/thelukass88/READMEgenerator'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' target="blank">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${codequiz})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Coding Quiz
              </span>
              <p className='text-center'>A Quiz game that uses Javascript to dynamically update the questions on a single page. This project displayed use of local storage.</p>
              <div className='pt-8 text-center'>
                <a href='https://thelukass88.github.io/Coding-Quiz/' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/thelukass88/Coding-Quiz' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${passwordgen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Password Generator
              </span>
              <p className='text-center'>A simple application that uses vanilla Javascript funcstion and variables to generate a random password. This was also my first time with objects and arrays.</p>
              <div className='pt-8 text-center'>
                <a href='https://thelukass88.github.io/password-generator/' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/thelukass88/password-generator' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Works;