import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import ContactForm from './ContactForm'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 80px);
  overflow: hidden;
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

  @media ${device.tablet} {
    width: 60%;
    font-size: 4.5rem;
    margin: 10px 0 50px 0;
  }

  @media ${device.laptop} {
    width: 50%;
    font-size: 5rem;
  }

  @media ${device.desktop} {
    width: 40%;
    font-size: 6rem;
  }

  @media ${device.xl} {
    width: 35%;
    font-size: 7rem;
  }

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`

const StyledContactContainer = styled.div`
  margin-bottom: 50px;
  width: 95vw;

  @media ${device.tablet} {
    width: 60vw;
  }
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
    </StyledContainer>
  )
}

export default Contact
