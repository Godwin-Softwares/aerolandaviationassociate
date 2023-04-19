import React from 'react'
import css from './ContactUsHero.module.scss'
import {motion} from 'framer-motion'
import { footerVariants } from '../../utils/motion'

const ContactUsHero = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      variants = {footerVariants}
      viewport = {{once: false, amount: 0.25}}
      className={css.wrapper}>
      <img src='./contact.png' alt="contribute" width="100%" height="100%"/>
        {/* <div className='css.overlay'></div> */}
         <div className={` ${css.container}`}>
            <span className={`primaryText3 ${css.title}`}>
                Contact Us
            </span>
        </div>
    </motion.div>
  )
}

export default ContactUsHero