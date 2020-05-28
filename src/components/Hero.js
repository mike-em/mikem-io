import React from 'react'
import styled from 'styled-components'
import HeroBlob from '../components/atoms/HeroBlob'
import { device } from '../utils/device'

const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;

  @media ${device.tablet} {
    width: 90vw;
  }

  @media ${device.laptop} {
    width: 80vw;
  }

  @media ${device.xl} {
    width: 60vw;
  }
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

  @media ${device.tablet} {
    font-size: 10rem;
  }

  @media ${device.laptop} {
    font-size: 12rem;
  }

  @media ${device.xl} {
    font-size: 13rem;
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
  @media ${device.tablet} {
    margin-right: -120px;
  }
  @media ${device.laptop} {
    margin-right: -200px;
  }

  @media ${device.desktop} {
    margin-right: -250px;
  }

  @media ${device.xl} {
    margin-top: -220px;
    margin-right: -500px;
  }
`

const Hero = ({ title, titleSize }) => {
  return (
    <StyledHeroContainer>
      <StyledTitle titleSize={titleSize}>
        {title}
        <span>.</span>
      </StyledTitle>
      <StyledBlobContainer>
        <HeroBlob />
      </StyledBlobContainer>
    </StyledHeroContainer>
  )
}

export default Hero
