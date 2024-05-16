import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from "../assets/faces/profile.png"; // Default image
import profile2 from "../assets/faces/profile2.png"; // Example additional images
import profile3 from "../assets/faces/profile3.png";
import profile4 from "../assets/faces/profile4.png";
import profile5 from "../assets/faces/profile5.png";
import profile6 from "../assets/faces/profile6.png";
import profile7 from "../assets/faces/profile7.png";
import { Link } from "react-scroll";
import { Reveal } from "./Snazzy";
import { motion } from 'framer-motion';

const Home = () => {
  // Create an array of image sources
  const imageSources = [profile, profile2, profile3, profile4, profile5, profile6, profile7];

  // Initialize the state with one of the images
  const [currentImage, setCurrentImage] = useState(profile);

  // Function to randomly select a new image
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    setCurrentImage(imageSources[randomIndex]);
  };

  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-2 md:flex-row">
        <div className="flex flex-col justify-center h-100%">
          <Reveal>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              <em>Hello there!</em>
              <br />
              I'm Luke.
              <br />
              Welcome to my portfolio.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-gray-500 py-4 max-w-md">
              I'm an aspiring front-end web developer with a passion for
              learning as much as I possibly can. Check out my portfolio to see
              what I've learned and how I've applied it.<br></br>
              <strong>Get to know me better by clicking my nose...</strong>
            </p>
          </Reveal>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Reveal>
            <motion.img
              src={currentImage} // Use the state for the image source
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
              onClick={changeImage} // Add click handler to change image
              style={{ cursor: 'pointer' }} // Change cursor to pointer on hover
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Home;