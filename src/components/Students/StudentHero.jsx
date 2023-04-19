import React from 'react'
import css from './StudentHero.module.scss'
import {motion} from 'framer-motion'
import { footerVariants } from '../../utils/motion'


const StudentHero = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      variants = {footerVariants}
      viewport = {{once: false, amount: 0.25}}
      className={css.wrapper}>
      <img src='./student.png' alt="contribute" width="100%" height="100%"/>
        {/* <div className='css.overlay'></div> */}
         <div className={` ${css.container}`}>
            <span className={`primaryText3 ${css.title}`}>
                Student Introduction
            </span>
        </div>
    </motion.div>
  )
}

export default StudentHero