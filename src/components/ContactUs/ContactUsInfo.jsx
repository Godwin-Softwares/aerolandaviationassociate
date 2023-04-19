import React from 'react'
import css from './ContactUsInfo.module.scss'
import { projectExperience } from '../../utils/data'

const ContactUsInfo = () => {
  return (
    <div className={css.wrapper}>
         <div className={`paddings yPaddings innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                <div className= {`secondaryText ${css.apply}`}>Our Address</div>
                 <div className={css.applyContent}>
                    {/* <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 1: Choose Your Course</div> */}
                    <p className={css.applyContentDetails}>
                    The Virgin Atlantic/GTMC Fares & Ticketing Courses have been developed by some of the travel industry's top course writers. The result is a fresh contemporary approach and a thoroughness for which Virgin is famous. The objective is to provide training programmes leading to valuable qualifications that demonstrate professional competence on the part of the holder.
                    </p>
                </div> 

            </div>
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
                           
                       
                            <div className='flexCenter' style={{background:exp.bg, padding:10, borderTopLeftRadius:20, borderBottomLeftRadius:20}}>
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
    </div>
  )
}

export default ContactUsInfo