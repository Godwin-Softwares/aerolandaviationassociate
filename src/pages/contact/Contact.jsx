import React from 'react'
import Header from '../../components/Header/Header'
import ContactUsHero from '../../components/ContactUs/ContactUsHero'
import ContactUsBreadCrumbs from '../../components/ContactUs/ContactUsBreadCrumbs'
import ContactUsInfo from '../../components/ContactUs/ContactUsInfo'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
      <Header/>
      <ContactUsHero/>
      <ContactUsBreadCrumbs/>
      <ContactUsInfo/>
      <Footer/>
    </div>
  )
}

export default Contact