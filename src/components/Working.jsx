import { motion, useScroll, useSpring } from 'framer-motion';
import Section from './Section';
import projects from './projects-data';

export default function Working() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-green-100">
      {projects.map((project) => (
        <Section key={`section-${project.id}`} project={project} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}