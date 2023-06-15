import React from 'react'
import css from './VAEarthHero.module.scss'
import { fadeIn, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VAEarthHero = () => {
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
            <div className={`primaryText2 ${css.caption}`}>VA-Earth: Level 2 Award in VA Earth</div>
            <div className=''>The Virgin Atlantic Earth Level 2 Award is a must for all aspiring Hospitality and Tourism enthusiasts.</div>
            <img src='./virgin-atlantic.png' width={200}/>
            <div className={`primaryText1 ${css.amount}`}><span>₦100,000.00</span></div>
          </div>

          <div className={css.leftSideRight}>
            <img src='./va-e-cert.png' alt=''/>
          </div>
          
          
         
        </motion.div>

        {/* <img src='./american-air-hostess.png' width={400}/> */}
        
        <div 
          // variants={fadeIn("right", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./stewardessbg.png' alt=''/>
        </div>
      </motion.div>
    </section>
  )
}

export default VAEarthHero
