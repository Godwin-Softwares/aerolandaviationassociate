import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Header/hero/Hero'
import Partners from '../../components/Partners/Partners'
import Testimonial from '../../components/Testimonial/Testimonial'
import Courses from '../../components/courses/Courses'
import Footer from '../../components/footer/Footer'
import css from './Home.module.scss'

const Home = () => {
  return (
    <div className={css.home}>
        <Header/>
        <Hero/>
        <Courses/>
        <Testimonial/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home