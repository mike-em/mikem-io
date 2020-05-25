import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Blob from '../components/atoms/Blob'
import { device } from '../utils/device'

const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;
`

const StyledTitle = styled.h1`
  width: ${({ titleSize }) => (titleSize ? titleSize : '300px')};
  font-size: 7rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 5px;
  z-index: 990;
  color: ${({ theme }) => theme.color.black};

  @media ${device.smallMobile} {
    font-size: 8.8rem;
  }

  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.color.primary};
  }
`

const StyledBlobContainer = styled.div`
  margin-top: -200px;
  margin-left: -50px;

  @media ${device.smallMobile} {
    margin-top: -180px;
    margin-left: -70px;
  }
`

const Hero = ({ title, titleSize }) => {
  const [state, setState] = useState('250px')

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const handleResize = () => {
    if (window.innerWidth > 450 && window.innerWidth < 800) {
      setState('400px')
    } else if (window.innerWidth > 800) {
      setState('500px')
    }
  }

  return (
    <StyledHeroContainer>
      <StyledTitle titleSize={titleSize}>
        {title}
        <span>.</span>
      </StyledTitle>
      <StyledBlobContainer>
        <Blob blobBcg="#ff7500" size={state} />
      </StyledBlobContainer>
    </StyledHeroContainer>
  )
}

export default Hero
