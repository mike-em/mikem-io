import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Blob from '../components/atoms/Blob'
import logoLight from '../images/mm-logo-primary.svg'
import { device } from '../utils/device'

const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;
`

const StyledTitle = styled.h1`
  width: 300px;
  font-size: 9rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 5px;
  z-index: 990;

  span {
    margin-left: 10px;
    color: #ff7500;
  }
`

const StyledBlobContainer = styled.div`
  margin-top: -180px;
  margin-left: -70px;
`

const Hero = ({ title }) => {
  const [state, setState] = useState('250px')

  useEffect(() => {
    if (window.innerWidth > 450 && window.innerWidth < 800) {
      setState('400px')
    } else if (window.innerWidth > 800) {
      setState('500px')
    }
  })
  return (
    <StyledHeroContainer>
      <StyledTitle>
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
