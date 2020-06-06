import React from 'react'
import Navbar from '../components/Navbar'
import MainLayout from '../components/MainLayout'
import Contact from '../components/contact'
import SEO from '../components/seo'

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO title="Contact Me | Michael Mikucki" />
      <Navbar navColor={true} titleColor="#000000" title="contact" />
      <Contact />
    </MainLayout>
  )
}

export default ContactPage
