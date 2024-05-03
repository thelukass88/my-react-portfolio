import React from "react";
import { Reveal } from "./Snazzy";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col bg-green-100 justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <Reveal>
              <p>
                Hi. I'm <em>Luke Holliday</em>. <br></br>It's nice to meet you.<br></br> I'm glad you're here! <br></br>Please, take a
                look around.
              </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. 
                I started my journey into Web Development in 2023 and have since 
                completed courses on Udemy and with the EdX Skills for Life Bootcamp. 
                In my spare time I'm working on developing dynamic applications that 
                meet particular gaps in teaching at FE (Further Education, or, A-Level as most know it). 
                In addition to software development, I have over a decade of 
                teaching experience with a specialism in essay writing.
              </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;