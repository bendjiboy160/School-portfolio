import { Tilt }  from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from '../utils/motion'
import { TiltLoader } from "three/examples/jsm/Addons.js";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45, 
          scale: 1, 
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:max-md:min-w-[360px] md:max-lg:w-[640px] lg:max-xl:w-[280px] xl:max-w-[359px] xl:min-w-[320px] w-full h-full relative"
      >
        <Link to={source_code_link}>
          <div className="relative w-full h-[230px]">
              <img src={image} alt={name} 
              className="w-full h-full ovject-cover rounded-2xl"
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
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
          </div>
        </Link>
         
         
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My courses</p>
      <h2 className={styles.sectionHeadText}>Courses.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following are the courses Im taking. Each project is briefly described and show more info if you click on them. They reflects my
        great coding ability and shows how I can work with different languages and manage projects effectively.
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");