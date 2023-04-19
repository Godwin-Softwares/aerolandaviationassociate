import React from 'react'
import css from './AdmissionHowTo.module.scss'
import { projectExperience } from '../../utils/data'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'

const AdmissionHowTo = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="show"
        variants = {staggerContainer}
        viewport = {{once: false, amount: 0.25}}
        className={css.wrapper}>
         <div className={`paddings yPaddings innerWidth ${css.container}`}>
            <motion.div 
                 variants={fadeIn("right", "tween", 0.2, 1)}
                 className={css.leftSide}>
                <div className= {`secondaryText ${css.apply}`}>HOW TO APPLY</div>
                 <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 1: Choose Your Course</div>
                    <p className={css.applyContentDetails}>
                     </p>
                </div> 

                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 2: Check Entry Requirements</div>
                    <p className={css.applyContentDetails}>
                     </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 3: Tranining Duration</div>
                    <p className={css.applyContentDetails}>
                    </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 4: Cost of Training</div>
                    <p className={css.applyContentDetails}>
                    </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 5: Payment for Registration online/offline</div>
                    <p className={css.applyContentDetails}>
                     </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 5: Bank Account Details</div>
                    <p className={css.applyContentDetails}>
                     </p>
                </div>
            </motion.div>
            <div className={css.rightSide}>
                <div className={`secondaryText1 ${css.allCourses}`}>ALL COURSES</div>
                 <div className={css.requirementContent}>
                    {
                        projectExperience.map((exp, i) => {

                            return(

                                <a href={exp.path} style={{textDecoration:"none"}} className={css.links}>
                                <div 
                                // variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                                className={css.exp} key={i}>
                           
                       
                            <div className='flexCenter' style={{background:exp.bg, padding:10, borderTopLeftRadius:15, borderBottomLeftRadius:15}}>
                                <exp.icon size={25} color='white'/>
                            </div>
                            <div className={css.expContent}>
                                <span style={{fontSize:14, fontWeight:'bold', marginBottom:5}}>{exp.name}</span>
                                <span style={{fontSize:12}}>{exp.projects}</span>
                                <span><img src='./virgin-atlantic.png' alt='' style={{width:'100px'}}/></span>
                            </div>
                            
                            </div>

                            </a>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default AdmissionHowTo