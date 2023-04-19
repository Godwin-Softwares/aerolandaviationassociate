import React from 'react'
import Header from '../../components/Header/Header'
import AboutUsHero from '../../components/AboutUs/AboutUsHero'
import AboutUsBreadCrumbs from '../../components/AboutUs/AboutUsBreadCrumbs'
import AboutUsInfo from '../../components/AboutUs/AboutUsInfo'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div>
      <Header/>
      <AboutUsHero/>
      <AboutUsBreadCrumbs/>
      <AboutUsInfo/>
      <Footer/>
    </div>
  )
}

export default About