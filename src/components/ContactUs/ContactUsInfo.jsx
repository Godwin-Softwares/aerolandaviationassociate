import React from 'react'
import css from './ContactUsInfo.module.scss'
import { projectExperience } from '../../utils/data'

const ContactUsInfo = () => {
  return (
    <div className={css.wrapper}>
         <div className={`paddings yPaddings innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                <div className= {`secondaryText ${css.contactHeading}`}>Our Contact Info</div>
                    <div className={css.contactContainer}>
                        <div className={css.contactInfo}>
                           
                            <div className={css.contactInfoContent}>
                            <span className={css.photos}><img src='./location.png' alt='' className={css.photo} /></span>
                            <p className={css.contactDetails}>2a John Olugbo Ikeja Lagos</p>
                            </div>
                            <div className={css.contactInfoContent}>
                            <span className={css.photos}><img src='./telephone.png' alt='' className={css.photo} /></span>
                            <p className={css.contactDetails}>090-700-700-27 </p>
                            </div>
                            <div className={css.contactInfoContent}>
                                <span className={css.photos}><img src='./email.png' alt='' className={css.photo} /></span>
                               <p className={css.contactDetails}>info@aerolandtravels.com</p>
                            </div>
                        </div>
                        <div className= {`secondaryText ${css.contactHeading}`}>Send us a Message</div>
                        <div className={css.formContainer}>
                            <form  className={css.form}>
                                <div className={css.formInfo}>
                                    <label>Your Name</label>
                                    <input type='text' className={css.textbox} />
                                </div>
                                <div className={css.formInfo}>
                                    <label>Your Email</label>
                                    <input type='email' className={css.textbox} />
                                </div>
                                <div className={css.formInfo}>
                                    <label>Your Message</label>
                                    <textarea rows={4} className={css.message}></textarea>
                                </div>
                                <div className={css.formInfo}>
                                    <label></label>
                                    <button className={css.button} >Send Message</button>
                                </div>

                            </form>
                        </div>
                       
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

export default ContactUsInfo