import React from 'react'
import css from './VA2Hero.module.scss'
import { fadeIn, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VA2Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}} 
      
        className= {css.container}>
    
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}>
          <div className={css.leftSideLeft}>
            <div className={`primaryText2 ${css.caption}`}>VA-2: Level 3 Award in VA Fares and Ticketing</div>
            <div className=''>This Virgin Atlantic-2 (VA-2) Level 3 Award is a more advanced industry-standard training course in manual Fares & Ticketing.</div>
            <img src='./virgin-atlantic.png' width={200}/>
            <div className={`primaryText1 ${css.amount}`}><span>₦70,000.00</span></div>
          </div>

          <div className={css.leftSideRight}>
            <img src='./va2-cert.png' alt=''/>
          </div>
          
          
         
        </motion.div>

        {/* <img src='./american-air-hostess.png' width={400}/> */}
        
        <div 
          // variants={fadeIn("right", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./fine-tickets.png' alt=''/>
        </div>
      </motion.div>
    </section>
  )
}

export default VA2Hero