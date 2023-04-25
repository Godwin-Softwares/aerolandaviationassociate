import React from 'react'
import css from './StudentInfo.module.scss'

import { projectExperience } from '../../utils/data'

const StudentInfo = () => {
  return (
    <div className={css.wrapper}>
         <div className={`paddings yPaddings innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                <div className= {`secondaryText ${css.apply}`}>STUDENT GUIDE</div>
               
                <div className={css.applyContent}>
                   <p className={css.applyContentDetails}>
                    Aeroland offers a wide range of CTH programmes leading to internationally recognised CTH qualifications. Here’s a 5-step summary of the process to achieving a CTH qualification.
                
                    </p>
                </div> 
                 <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 1: Contact Aeroland</div>
                    <p className={css.applyContentDetails}>
                      You can contact us via emails, Telephone get our contact information here <a href='contact'>click</a>.

                      Our Training centers accross lagos is well equipped and automated to make your training seemless.
                  
                    </p>
                </div> 

                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 2: Enrollment of Student</div>
                    <p className={css.applyContentDetails}>
                    Once you have enrolled with Aeroland Aviation Associate, we will register you with CTH for your course and as a CTH Student Member. (As a Student Member you will receive access to the CTH Members online resource website which has all sorts of useful study support materials, industry news and a variety of career opportunities in the sector). You will then be eligible to commence your course.
                    </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 3: Training Commences</div>
                    <p className={css.applyContentDetails}>
                    Training period varies depending on the course being undertaken, most training could last up to several months, and Aeroland determines if there will be any changes to this periods.
                    </p>
                </div> 
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 4: Examinations and Assignment</div>
                    <p className={css.applyContentDetails}>
                    When the exams or assignments are due we will register you for each one with CTH on your behalf.
                    </p>
                </div> 
              
                <div className={css.applyContent}>
                    <div className={`secondaryText1 ${css.applyContentHeading}`}>Step 5: Results and Certificate</div>
                    <p className={css.applyContentDetails}>
                    Aeroland will send a Statement of Attainment of all your results achieved and once you have completed and passed the whole course a certificate will be sent to you.

                    Once you have received your certificate you’ll be ready to continue your studies or start an exciting career. Good luck!
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
    </div>
  )
}

export default StudentInfo
