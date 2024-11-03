import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

const Web2Ovningar = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My exercises</p>
      <h2 className={styles.sectionHeadText}>Exercises.</h2>
    </motion.div>
    <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following exercises are made durring webbutveckling 2. Each exercise has a links to a live demo. 
        </motion.p>
      </div>
    <div class="container">
        <div className="flex-col mr-20 " class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Start</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_a.html">js_start_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_b.html">js_start_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_c.html">js_start_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_d.html">js_start_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_e.html">js_start_e</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_f.html">js_start_f</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_g.html">js_start_g</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_h.html">js_start_h</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_i.html">js_start_i</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_j.html">js_start_j</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_k.html">js_start_k</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_start/js_start_l.html">js_start_l</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Grunder</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_a.html">js_grunder_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_b.html">js_grunder_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_c.html">js_grunder_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_d.html">js_grunder_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_e.html">js_grunder_e</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_f.html">js_grunder_f</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_grunder/js_grunder_g.html">js_grunder_g</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Vilkor</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_vilkor/js_vilkor_a.html">js_vilkor_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_vilkor/js_vilkor_b.html">js_vilkor_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_vilkor/js_vilkor_c.html">js_vilkor_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_vilkor/js_vilkor_d.html">js_vilkor_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_vilkor/js_vilkor_e.html">js_vilkor_e</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Whileloopar</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_a.html">js_whileloopar_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_b.html">js_whileloopar_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_c.html">js_whileloopar_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_d.html">js_whileloopar_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_e.html">js_whileloopar_e</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_whileloopar/js_whileloopar_f.html">js_whileloopar_f</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Forloopar</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_a.html">js_forloopar_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_b.html">js_forloopar_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_c.html">js_forloopar_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_d.html">js_forloopar_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_e.html">js_forloopar_e</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_f.html">js_forloopar_f</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_g.html">js_forloopar_g</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_h.html">js_forloopar_h</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_forloopar/js_forloopar_i.html">js_forloopar_i</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Timer</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_a.html">js_timer_a</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_b.html">js_timer_b</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_c.html">js_timer_c</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_d.html">js_timer_d</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_e.html">js_timer_e</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_f.html">js_timer_f</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_g.html">js_timer_g</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_h.html">js_timer_h</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_i.html">js_timer_i</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_j.html">js_timer_j</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_timer/js_timer_k.html">js_timer_k</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Funktioner</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_1.html">js_funktioner_1</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_2.html">js_funktioner_2</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_3.html">js_funktioner_3</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_4.html">js_funktioner_4</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_5.html">js_funktioner_5</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_6.html">js_funktioner_6</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_7.html">js_funktioner_7</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_8.html">js_funktioner_8</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_9.html">js_funktioner_9</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_funktioner/js_funktioner_10.html">js_funktioner_10</a></li>
            </ul>
        </div>
        <div className="flex-col mr-20" class="element">
            <h2 className={`mt-20 ${styles.sectionSubText}`}>Array</h2>
            <ul>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_array/js_array_1.html">js_array_1</a></li>
                <li><a href="https://labb.vgy.se/~bensal23/webbutveckling2/ovningar/js_array/js_array_2.html">js_array_2</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SectionWrapper(Web2Ovningar, "")   