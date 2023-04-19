import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'
import css from './Courses.module.scss'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


const Courses = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="show"
        variants = {staggerContainer}
        viewport = {{once: false, amount: 0.25}}
        className={css.wrapper}>
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>

                {
                    projectExperience.map((exp, i) => {
                        return (
                        <motion.div 
                            variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                            className={css.exp} key={i}>
                            <a href={exp.path} style={{textDecoration:"none"}} className={css.links}>
                       
                            <div className='flexCenter' style={{background:exp.bg}}>
                                <exp.icon size={25} color='white'/>
                            </div>
                            <div className={css.expBase}>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects}</span>
                                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                    <span className='secondaryText'><img src='./virgin-atlantic.png' alt='' style={{width:'150px'}}/></span>
                                    <span className={`secondaryText1 ${css.applyBtn}`}>Apply Now</span>
                                </div>
                              
                            </div>
                            </a>
                        </motion.div>
                        )
                    })
                }
            </div>
            <motion.div 
              variants={textVariant(0.5)}
              className={css.rightSide}>
                <div className='primaryText3'>CTH Travel Reservation</div>
                    {
                      WhatDoIHelp.map((paragraph, i) => {
                        return <span className='secondaryText3' key={i}>{paragraph}</span>
                      })  
                    }

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText1'>320+</span>
                            <span className='secondaryText'>Trained Students</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText1'>305+</span>
                            <span className='secondaryText'>Certificate Issued</span>
                        </div>
                    </div>
            </motion.div>
            </div>
    </motion.section>
  )
}

export default Courses