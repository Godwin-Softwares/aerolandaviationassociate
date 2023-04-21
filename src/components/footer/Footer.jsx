import React from 'react'
import css from './Footer.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerContainer } from '../../utils/motion'

const Footer = () => {
  return (
    <motion.section 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={` paddings ${css.wrapper}`}>
        <div className={` innerWidth ${css.container}`}>
            <motion.div 
                variants={footerVariants}
                className={css.top}>
                <div className={css.leftSide}>
                    <div className={css.leftSideLeft}>
                        <p className={` secondaryText4 ${css.container}`}>Endorsed By</p>
                        <img src='./cth.png' alt='' width={100}/>
                        <img src='./gtmc.png' alt='' width={100}/>
                        <img src='./virgin-atlantic.png' alt='' width={100}/>
                    </div>
                    <div className={css.leftSideRight}>
                    <p className='secondaryText4'>Menu</p>   
                        <ul>
                            <li ><a href='/'>Home</a></li>
                            <li><a href='courses'>Courses</a></li>
                            <li><a href='admission'>Admission</a></li>
                            <li><a href='student'>Students</a></li>
                            <li><a href='about'>About Us</a></li>
                            <li><a href='contact'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className={css.rightSide}>
                
                <div className={css.rightSideLeft}>
                        <p className={` secondaryText4 ${css.container}`}>Qualifications</p>  
                        <ul>
                            <li ><a href='VA1'>VA1: Level 2 Award in VA Fares and Ticketing</a></li>
                            <li><a href='VA2'>VA2: Level 3 Award in VA Fares and Ticketing</a></li>
                            <li><a href='VAEarth'>VAEarth: Level 2 Award in VA Earth</a></li>
                        </ul>
                        <div className={css.follow}>
                            <p className='secondaryText4'>Follow Us!</p>
                            <div className={css.socials}>
                                <span><a href='#'><img src='./facebook2.png' alt='' width={20} /></a></span>
                                <span><a href='#'><img src='./instagram2.png' alt='' width={20}/></a></span>
                                <span><a href='#'><img src='./twitter2.png' alt='' width={20}/></a></span>
                                <span><a href='#'><img src='./youtube2.png' alt='' width={20}/></a></span>
                            </div>
                        </div>
                </div>

                    <div className={css.rightSideRight}>
                    <p className={` secondaryText4 ${css.container}`}>Recognised and Regulated by Confederation of Tourism and Hospitality</p>  
                    <p className={css.content}>
                    Aeroland Aviation Associate is recognised and regulated by CHT and Ofqual, the regulator for qualifications, exams and tests in England. Ofqual's work ensures that learners get the results they deserve and that the qualifications they receive count, both now and in the future. Unless otherwise indicated, all CTH qualifications sit within the Ofqual’s Regulated Qualifications Framework (RQF) that has replaced both the Qualifications and Credit Framework (QCF) and the National Qualifications Framework (NQF), and can be found on Ofqual’s Register of Regulated Qualifications.
                    </p>
                    </div>
                </div>

            </motion.div>
         
            <motion.div 
             variants={footerVariants}
             className={css.bottom}>
             <p className={`  ${css.bottomLeft}`}>All rights reserved &copy; Aeroland Aviation Associate '23</p>
             <p className={`  ${css.bottomRight}`}>Powered by G-Horizon</p>
            </motion.div>
        </div>
      
    </motion.section>
  )
}

export default Footer