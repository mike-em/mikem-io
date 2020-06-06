import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import SEO from '../components/seo'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  margin: 0 auto;
  width: 80vw;
  height: 100vh;
`

const StyledTitle = styled.h1`
  font-size: 100px;
  margin: 0;

  span {
    color: #ff7500;
  }
  @media ${device.laptop} {
    font-size: 200px;
  }
`
const StyledSubtitle = styled.p`
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  @media ${device.laptop} {
    font-size: 30px;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: hsl(28, 100%, 50%);
  cursor: pointer;
`

const error = () => {
  return (
    <StyledContainer>
      <SEO title="404 Page" />
      <StyledTitle>
        <span>4</span>0<span>4</span>...
      </StyledTitle>
      <StyledSubtitle>
        I think you might be lost... Let me take you back to{' '}
        <StyledLink href="/">safety</StyledLink>.
      </StyledSubtitle>
    </StyledContainer>
  )
}

export default error
