import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import ContactForm from './ContactForm'
import Footer from './Footer'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 80px);
`

const StyledTitle = styled.h1`
  font-size: 4rem;
  width: 95%;
  text-align: center;
  letter-spacing: 3px;
  margin: 20px 0;

  span {
    color: #ff7500;
  }
`

const StyledContactContainer = styled.div`
  margin-bottom: -50px;
  width: 95vw;
`

const Contact = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        how can I help you<span>?</span>
      </StyledTitle>
      <StyledContactContainer>
        <ContactForm />
      </StyledContactContainer>
      <Footer />
    </StyledContainer>
  )
}

export default Contact
