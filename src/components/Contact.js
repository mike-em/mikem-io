import React from 'react'
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
  font-size: 3.3rem;
  width: 95%;
  text-align: center;
  letter-spacing: 3px;
  margin: 20px 0;
  color: ${({ theme }) => theme.color.black};

  @media ${device.smallMobile} {
    font-size: 4rem;
  }

  span {
    color: ${({ theme }) => theme.color.primary};
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
