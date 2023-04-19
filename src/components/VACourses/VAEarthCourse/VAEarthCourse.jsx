import React from 'react'
import css from './VAEarthCourse.module.scss'
import { fadeIn, footerVariants, staggerContainer } from '../../../utils/motion'
import {motion} from 'framer-motion'


const VAEarthCourse = () => {
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
          <p className='primaryText2'>VA-Earth: Level 2 Award in VA Earth</p>
          <p className={css.content}>
         <span className={css.bullet}>{`\u2022`}</span> To be able to locate a country on a world map.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To match a capital city with its country.
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To name further major cities in specific countries.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To place each country in the correct continent.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To identify each of the five oceans of the world.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To provide essential and useful information about each country in the world.
        <br/>
        <br/>
        <span className={css.bullet}>{`\u2022`}</span> To provide stimulating information about the major cites of the world
        <br/>
        <br/>

         </p>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}>
            <img src='./travel-agency.png' alt=''/>
        </motion.div> 
       
        </div>
      </motion.div>
    </section>
  )
}

export default VAEarthCourse