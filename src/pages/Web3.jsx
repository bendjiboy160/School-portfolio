import { Navbar } from "../components"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";




const Web3 = () => {
  return (
    <div>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Work in progress</p>
        <h2 className={styles.sectionHeadText}>Progress.</h2>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Web3, "")