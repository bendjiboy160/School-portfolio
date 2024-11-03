import { motion } from "framer-motion"
import { useRef } from "react"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => function HOC() {
    

  return (
    
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true,  amount: "some" }}

      className={`${styles.padding} max-w-7xl mx-auto relative z-0 xs:max-sm:py-20 `}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
    

  )
}

export default SectionWrapper