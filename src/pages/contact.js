import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import MainLayout from '../components/MainLayout'
import Contact from '../components/contact'

const ContactPage = () => {
  return (
    <MainLayout>
      <Navbar navColor={true} titleColor="#000000" title="contact" />
      <Contact />
    </MainLayout>
  )
}

export default ContactPage
