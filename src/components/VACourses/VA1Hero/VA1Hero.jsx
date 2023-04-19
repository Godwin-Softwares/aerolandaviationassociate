import React from 'react'
import css from './VA1Hero.module.scss'
import { fadeIn, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VA1Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}} 
      
        className={`innerWidth ${css.container}`}>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}>
          <div className={`primaryText1 ${css.caption}`}>VA-1: Level 2 Award in VA Fares and Ticketing</div>
          <div className=''>This Virgin Atlantic-1 (VA-1) Level 2 Award is an industry-standard training course in manual Fares & Ticketing.</div>
          <img src='./virgin-atlantic.png' width={200}/>
          <div className={`primaryText1 ${css.amount}`}><span>₦50,000.00</span></div>
        </motion.div>
        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./va1-cert.png'/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VA1Hero