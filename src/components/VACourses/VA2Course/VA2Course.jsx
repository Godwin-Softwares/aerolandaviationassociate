import React from 'react'
import css from './VA2Course.module.scss'
import { fadeIn, footerVariants, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VA2Course = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}} 
        className={`yPaddings innerWidth ${css.container}`}>

            <div  className={`flexCenter ${css.heading}`}>
                <span className='primaryText1'>Course objectives</span>
                <p style={{marginTop:"2rem"}}>On completion of this module, students will be able to:</p>
                {/* <p>Am now gainfully employed as Ticketing manager in a travel agency</p> */}
            </div>
        <div 
        
        className={css.bottom}>
          
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}>
          <p className='primaryText2'>VA-1: Level 2 Award in VA Fares and Ticketing</p>
          <p className={css.content}>
         <span className={css.bullet}>{`\u2022`}</span> Define IATA geographical areas and Global Routing Indicators.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Calculate fares applying the fundamental principles of the mileage system.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Identify differing fare types and their characteristics.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Select the lowest applicable fare for point to point itineraries with reference to fare rules.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Interpret various airline codings.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Construct fares using NUCs and the IATA Rates of Exchange for a range of currencies.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Identify all automated tickets, from tickets to ATBs and OPTAT/TAT and interpret all relevant information.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> Interpret all MPDs/MCOs.

         </p>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./booking.png' alt=''/>
        </motion.div> 
       
        </div>
      </motion.div>
    </section>
  )
}

export default VA2Course