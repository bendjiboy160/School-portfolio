import { Navbar } from "../components"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";




const Web3 = () => {
  return (
    <div>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My Index</p>
        <h2 className={styles.sectionHeadText}>Index.</h2>

      </motion.div>
      <motion.div variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        This is the index page I made for my webb server programering course. <br/>
        <a href="https://labb.vgy.se/~bensal23/webbServerProgrammering/index.php">Index</a>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Web3, "")