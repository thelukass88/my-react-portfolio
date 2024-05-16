import { FC } from 'react';
// import { motion } from 'framer-motion';

interface ProjectContainerProps {
  bgImage: string;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
}

const ProjectContainer: FC<ProjectContainerProps> = ({ bgImage, title, description, demoLink, codeLink }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
        <span className="text-lg font-bold text-white tracking-wider">{title}</span>
        <p className="text-center">{description}</p>
        <div className="pt-8 text-center">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
