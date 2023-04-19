import React from 'react'
import css from './VAEarthProgramme.module.scss'
import { fadeIn, footerVariants, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VAEarthProgramme = () => {
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
                <p style={{marginTop:"2rem"}}>Information about VA-Earth: Level 2 Award in VA Earth</p>
                {/* <p>Am now gainfully employed as Ticketing manager in a travel agency</p> */}
            </div>
        <div 
        
        className={css.bottom}>
        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./graduatedbg.png' alt=''/>
        </motion.div>    
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}>
          <p className='primaryText2'>VA-Earth: Level 2 Award in VA Earth</p>
          <p className={css.content}>
          An introductory course designed to develop learners' global geography skills.
           <br/>
           <br/>
           What better way to show employers your global knowledge in the Tourism and Hospitality industry than by having completed a travel training qualification about the world that is endorsed and certified by Virgin Atlantic.
          <br/>
          <br/>
          From Honolulu to Helsinki, from Iceland to Indonesia and from Machu Picchu to Madagascar, the VA-Earth programme is a fascinating ‘world tour’ covering all 195 countries on the globe. The course begins with an introduction to essential world geography and the climate, as well as explaining the operation of international time zones.
          <br/>
           <br/>
           It then goes on to cover interesting and stimulating facts about each country in turn with useful details of key travel destinations, including aspects of historical interest.
           <br/>
           <br/>
           The programme has been developed by some of the travel industry's top Travel Geography Courses writers. The result is a fresh contemporary approach and a thoroughness for which Virgin is famous. This course is designed to improve the global geography skills needed within the Travel, Tourism and Hospitality sector, The course content involves relevant global geography information about countries, major cities and popular destinations.
         </p>
        </motion.div>
       
        </div>
      </motion.div>
    </section>
  )
}

export default VAEarthProgramme