import React from 'react'
import css from './Partners.module.scss'
import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const Partners = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
        <div className={`yPaddings innerWidth ${css.container}`}>

            <div  className={`flexCenter ${css.heading}`}>
                <span className='primaryText3'>Our Partners</span>
                
            </div>
            <div className={css.logos}>
                <motion.span
                variants={fadeIn("left", "tween", 0.5, 1)} 
                >
                    <img src='./cth.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("left", "tween", 0.3, 1)} 
                >
                    <img src='./gtmc.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.3, 1)} 
                >
                    <img src='./virgin-atlantic.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.5, 1)} 
                >
                    <img src='./british.png' alt='' width={200} />
                </motion.span>
                <motion.span
                variants={fadeIn("left", "tween", 0.5, 1)} 
                >
                    <img src='./etihad.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("left", "tween", 0.3, 1)} 
                >
                    <img src='./asky.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.3, 1)} 
                >
                    <img src='./egyptair.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.5, 1)} 
                >
                    <img src='./qatar.png' alt='' width={200} />
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.3, 1)} 
                >
                    <img src='./united-airline.png' alt='' width={200}/>
                </motion.span>
                <motion.span
                    variants={fadeIn("right", "tween", 0.5, 1)} 
                >
                    <img src='./south-africa.png' alt='' width={200} />
                </motion.span>
            </div>    
        </div>
    </div>
  )
}

export default Partners