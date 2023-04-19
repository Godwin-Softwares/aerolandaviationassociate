import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../../../utils/motion'

function Hero() {
  return (
    <section 
    
        className={`padding ${css.wrapper}`}>
          <motion.div 
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0.25}}

              className={`innerWidth ${css.container}`}>
              
                <div className={css.upperElements}>
                    <motion.div
                      variants={fadeIn("right", "tween", 0.2, 1)}
                      className={css.caption}>
                      <span className='primaryText1'>Get Certified!</span> <br/> <span className='primaryText2'>CTH Travel Reservation 
                      <br/><img src='./virgin-atlantic.png' alt='' width={150}/></span> 

                    </motion.div> 
                    
              
                    <motion.div 
                      variants={fadeIn("left", "tween", 0.5, 1)}
                      className={css.certificate}>
                      <img src='./certificate.png' alt=''/>
                      {/* <div className='secondaryText1'>CERTIFIED TRAINER</div> */}
                      <div className={css.expect}>
                       <div className='primaryText'>10</div>
                        <div className='secondaryText'>
                          <div>Years Training</div>
                          <div>Experience</div>
                       </div>
                       </div>
                    </motion.div> 

                    <motion.a 
                      variants={fadeIn("up", "tween", 0.5, 1.3)}
                      className={css.apply} href="VA1">
                      Apply Now!
                    </motion.a> 
                </div> 
            

                <motion.div
                      variants={fadeIn("up", "tween", 0.3, 1)}
                       className={css.person}>
                  <motion.img 
                    variants={fadeIn("up", "tween", 0.5, 1.3)}
                    src='./airplane.png' alt='' />
                </motion.div> 

                <motion.div
                      variants={fadeIn("up", "tween", 0.3, 1)}
                       className={css.flight}>
                  <motion.img 
                    variants={fadeIn("up", "tween", 0.5, 1.3)}
                    src='./flight-ticket.png' alt='' />
                </motion.div> 

             

                <div className={css.lowerElements}>
                   <motion.div
                      variants={fadeIn("right", "tween", 0.2, 1)} 
                      className={css.experience}>
                       {/* <div className='primaryText'>10</div> */}
                       <img src='./flight-ticket.png' alt='' width={250} height={200} />
                       {/* <div 
                       className='secondaryText'>
                          <div>Years Training</div>
                          <div>Experience</div>
                       </div> */}
                   </motion.div>

                   {/* <div  */}
                      {/* // variants={fadeIn("left", "tween", 0.5, 1)} */}
                      {/* // className={css.certificate}> */}
                       {/* className={css.ticket}>   */}
                      {/* <img src='./flight-ticket.png' alt='' width={260} /> */}
                      {/* <img src='./flight-ticket.png' alt='' width={200} height={200} /> */}
                   {/* </div>  */}
               
                    <motion.div 
                      variants={fadeIn("left", "tween", 0.5, 1)}
                      // className={css.certificate}>
                       className={css.ticket}>  
                      {/* <img src='./flight-ticket.png' alt='' width={260} /> */}
                      <img src='./students.png' alt='' width={260} />
                   </motion.div> 
                </div> 
          </motion.div> 
    </section>
  )
}

export default Hero