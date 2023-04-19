import React from 'react'
import css from './VA2Programme.module.scss'
import { fadeIn, footerVariants, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VA2Programme = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}} 
        className={`yPaddings innerWidth ${css.container}`}>

            <div  className={`flexCenter ${css.heading}`}>
                <span className='primaryText1'>Programme Overview</span>
                <p style={{marginTop:"2rem"}}>Information about VA-2 Level 3 Award in VA Fares and Ticketing</p>
                {/* <p>Am now gainfully employed as Ticketing manager in a travel agency</p> */}
            </div>
        <div 
        
        className={css.bottom}>
        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./laptop-air.png' alt=''/>
        </motion.div>    
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}>
          <p className='primaryText2'>VA-2: Level 3 Award in VA Fares and Ticketing</p>
          <p className={css.content}>
          The Virgin Atlantic/GTMC Fares & Ticketing Courses have been developed by some of the travel industry's top course writers. The result is a fresh contemporary approach and a thoroughness for which Virgin is famous. The objective is to provide training programmes leading to valuable qualifications that demonstrate professional competence on the part of the holder.
           <br/>
           <br/>
           These are qualifications that not only improve the promotion and employment prospects of the student, but also help build the staff skills-base that will ensure the long term continued expansion of the wider tourism and travel sectors.
          <br/>
          <br/>
          Launched in 2003, the courses set the standard in manual Fares and Ticketing training for people who want to enhance their travel industry skills or join the travel industry. Centres can run any of the flight booking courses below.
          <br/>
           <br/>
           VA-2 has been designed to give you a thorough understanding of fare construction principles, building on your VA-1 knowledge with step by step stages of new principles of fare construction, which enables you to calculate and recognise more complex fares.
         </p>
        </motion.div>
       
        </div>
      </motion.div>
    </section>
  )
}

export default VA2Programme