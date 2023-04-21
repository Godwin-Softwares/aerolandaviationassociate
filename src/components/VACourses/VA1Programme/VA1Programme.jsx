import React from 'react'
import css from './VA1Programme.module.scss'
import { fadeIn, footerVariants, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VA1Programme = () => {
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
                <p style={{marginTop:"2rem"}}>Information about VA-1 Level 2 Award in VA Fares and Ticketing</p>
                {/* <p>Am now gainfully employed as Ticketing manager in a travel agency</p> */}
            </div>
        <div 
        
        className={css.bottom}>
        <motion.div 
          variants={fadeIn("right", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./passport-air.png' alt=''/>
        </motion.div>    
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.leftSide}>
          {/* <p className='primaryText2'>VA-1: Level 2 Award in VA Fares and Ticketing</p> */}
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
         VA-1 introduces you to the world of the travel industry. By using extracts from selected industry publication, students will be taught how to price and document various itineraries, according to the customer's requirements.
         </p>
        </motion.div>
       
        </div>
      </motion.div>
    </section>
  )
}

export default VA1Programme