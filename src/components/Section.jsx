import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectContainer from './ProjectContainer';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Section = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <ProjectContainer {...project} />
      </div>
      <motion.h2 style={{ y }}>{`#00${project.id}`}</motion.h2>
    </section>
  );
};

export default Section;