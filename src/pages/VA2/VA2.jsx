import React from 'react'
import VA2Hero from '../../components/VACourses/VA2Hero/VA2Hero'
import Header from '../../components/Header/Header'
import VA2Programme from '../../components/VACourses/VA2Programme/VA2Programme'
import VA2Course from '../../components/VACourses/VA2Course/VA2Course'
import Footer from '../../components/footer/Footer'

const VA2 = () => {
  return (
    <div>
        <Header/>
        <VA2Hero/>
        <VA2Programme/>
        <VA2Course/>
        <Footer/>
    </div>
  )
}

export default VA2