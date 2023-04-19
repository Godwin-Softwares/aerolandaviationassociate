import React from 'react'
import Header from '../../components/Header/Header'
import StudentHero from '../../components/Students/StudentHero'
import StudentBreadCrumbs from '../../components/Students/StudentBreadCrumbs'
import StudentInfo from '../../components/Students/StudentInfo'
import Footer from '../../components/footer/Footer'

const Student = () => {
  return (
    <div>
      <Header/>
      <StudentHero/>
      <StudentBreadCrumbs/>
      <StudentInfo/>
      <Footer/>
    </div>
  )
}

export default Student