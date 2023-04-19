import React from 'react'
import VA1Hero from '../../components/VACourses/VA1Hero/VA1Hero'
import Header from '../../components/Header/Header'
import VA1Programme from '../../components/VACourses/VA1Programme/VA1Programme'
import VA1Course from '../../components/VACourses/VA1Course/VA1Course'
import Footer from '../../components/footer/Footer'

const VA1 = () => {
  return (
    <div>
        <Header/>
        <VA1Hero/>
        <VA1Programme/>
        <VA1Course/>
        <Footer/>
        
    </div>
  )
}

export default VA1