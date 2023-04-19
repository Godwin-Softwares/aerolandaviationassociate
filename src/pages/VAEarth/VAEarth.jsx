import React from 'react'
import VAEarthHero from '../../components/VACourses/VAEarthHero/VAEarthHero'
import Header from '../../components/Header/Header'
import VAEarthCourse from '../../components/VACourses/VAEarthCourse/VAEarthCourse'
import VAEarthProgramme from '../../components/VACourses/VAEarthProgramme/VAEarthProgramme'
import Footer from '../../components/footer/Footer'

const VAEarth = () => {
  return (
    <div>
        <Header/>
        <VAEarthHero/>
        <VAEarthProgramme/>
        <VAEarthCourse/>
        <Footer/>
    </div>
  )
}

export default VAEarth