import { Tilt }  from "react-tilt";
import { easeIn, easeInOut, motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Web1OvningarInfo, Web1ProjektInfo } from "../constants";
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45, 
          scale: 1, 
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] lg:max-w-[320px] w-full h-full relative"
      >
        <a href={source_code_link} target="_blank">
        <div className="relative w-full h-[230px]">
            <img src={image} alt={name} 
            className="w-full h-full object-fill rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            </div>
          </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 mb-8 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 absolute bottom-4">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}
              </p>
            ))}
        </div>
        </a>

        

        
         
      </Tilt>
    </motion.div>
  )
}

const Web1Ovningar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false)
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, // viewport
          rootMargin: '0px', // no margin
          threshold: 0.08, // 8% of target visible
        }
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Clean up the observer
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible2(entry.isIntersecting);
        },
        {
          root: null, // viewport
          rootMargin: '0px', // no margin
          threshold: 0.1, // 10% of target visible
        }
      );
  
      if (targetRef2.current) {
        observer.observe(targetRef2.current);
      }
  
      // Clean up the observer
      return () => {
        if (targetRef2.current) {
          observer.unobserve(targetRef2.current);
        }
      };
    }, []);
  return (
    <>
      <div className="position: fixed gap-2 right-20 top-1/2 xs:max-sm:hidden" >
        <ul className="text-right">
          <li >
          <button 
        onClick={() =>scrollTo(0,0) }
        className="text-white transition ease-in-out delay-100 hover:-translate-y-1 "
        style={{
          opacity: isVisible ? 1 : 0.5,
          fontSize: isVisible ? 18 : 16,
        }}
        >Exercises</button>
          </li>
          <li>
          <button onClick={() => targetRef2.current?.scrollIntoView(
              {behavior: 'smooth',}
              )} 
              className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
              style={{
                opacity: isVisible2 ? 1 : 0.5,
                fontSize: isVisible2 ? 20 : 16,
              }}>Projects</button>
          </li>
        </ul>
      </div>
    <div ref={targetRef}>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My exercise</p>
        <h2 className={styles.sectionHeadText}>Exercise.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following exercises showcase my great coding skills. Each exercise is briefly described and has a
          links to a live demo. It reflects my ability to solve coding problems and listen to my teacher.
        </motion.p>
      </div>
      <div className='mt-20 mb-20 flex flex-wrap gap-7'>
          {Web1OvningarInfo.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </div>
     
   
    <div ref={targetRef2}>
      <motion.div variants={textVariant()}  >
        <p className={styles.sectionSubText}>My project</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following project are made my me alone or with other classmates. Each project is briefly described and has a
          links to a live demo.
        </motion.p>
      </div>
      <div className='mt-20 mb-20 flex flex-wrap gap-7' >
          {Web1ProjektInfo.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </div>
    
    </>
  )
}

export default SectionWrapper(Web1Ovningar, "")