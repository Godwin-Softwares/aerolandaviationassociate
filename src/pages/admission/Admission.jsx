import React from 'react'
import Header from '../../components/Header/Header'
import AdmissionHero from '../../components/Admission/AdmissionHero'
import AdmissionBreadCrumbs from '../../components/Admission/AdmissionBreadCrumbs'
import AdmissionHowTo from '../../components/Admission/AdmissionHowTo'
import Footer from '../../components/footer/Footer'


const Admission = () => {
  return (
    <div>
      <Header/>
      <AdmissionHero/>
      <AdmissionBreadCrumbs/>
      <AdmissionHowTo/>
      <Footer/>
    </div>
  )
}

export default Admission