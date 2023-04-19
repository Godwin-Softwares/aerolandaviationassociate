import React from 'react'
import css from './AboutUsHero.module.scss'
import {motion} from 'framer-motion'
import { footerVariants } from '../../utils/motion'

const AboutUsHero = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      variants = {footerVariants}
      viewport = {{once: false, amount: 0.25}}
      className={css.wrapper}>
      <img src='./about.png' alt="contribute" width="100%" height="100%"/>
        {/* <div className='css.overlay'></div> */}
         <div className={` ${css.container}`}>
            <span className={`primaryText3 ${css.title}`}>
                About Us
            </span>
        </div>
    </motion.div>
  )
}

export default AboutUsHero