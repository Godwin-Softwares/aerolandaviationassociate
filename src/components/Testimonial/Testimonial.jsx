import React from 'react'
import css from './Testimonial.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'
import Slider from "react-slick";
import { comments, sliderSettings } from '../../utils/data';


const Testimonial = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
   
   
   return (
    <motion.section 
        initial="hidden"
        whileInView="show"
        variants = {staggerChildren}
        viewport = {{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
         <motion.div 
         variants= {footerVariants}
         className={`yPaddings innerWidth ${css.container}`}>
            <div  className={`flexCenter ${css.heading}`}>
                <span className='primaryText3'>What people Say about us</span>
                <p style={{marginTop:"2rem"}}>Comments about Aeroland Aviation Associate  </p>
                <p>These are students that benefitted from the AAA course and some are gainfully employed globally.</p>
            </div>
            <div className={css.comments }>
                <Slider 
                    {...sliderSettings}
                    className={css.slider}
                >
                    {
                        comments.map((comment, i) => {
                            return(
                                <div className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt=""/>
                                    <p>{comment.comment}</p>
                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>
                                

                            )
                        })
                    }
                </Slider>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Testimonial