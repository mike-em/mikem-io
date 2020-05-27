import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import Hero from './Hero'
import Footer from './Footer'
import reactIcon from '../images/react-icon.svg'
import nodeIcon from '../images/node-icon.svg'
import figmaIcon from '../images/figma-icon.svg'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDescriptionContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
  color: ${({ theme }) => theme.color.black};

  @media ${device.desktop} {
    width: 80vw;
  }

  @media ${device.xl} {
    width: 60vw;
  }
`

const StyledDescriptionLeft = styled.div`
  width: 90vw;
  padding: 30px;
  border: 2px solid #ff7500;
  border-left: none;
  border-radius: 0 50px 50px 0;
  background-image: ${({ bcgImage }) => bcgImage && `url(${bcgImage})`};
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  @media ${device.tablet} {
    width: 60vw;
  }

  @media ${device.laptop} {
    width: 55vw;
    padding-left: 80px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding-left: 120px;
    background-size: 100%;
    background-position: 220px 60px;
  }

  @media ${device.xl} {
    width: 35vw;
  }

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 4rem;

    @media ${device.tablet} {
      font-size: 4.5rem;
    }
    span {
      color: ${({ theme }) => theme.color.primary};
      margin-left: 3px;
    }
  }

  ul {
    padding-left: 30px;

    li {
      font-size: 1.8rem;
      letter-spacing: 1px;

      @media ${device.tablet} {
        font-size: 2.2rem;
        margin-top: 5px;
      }
    }
  }
`

const StyledDescriptionRight = styled.div`
  justify-self: end;
  width: 90vw;
  padding: 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-right: none;
  border-radius: 50px 0 0 50px;
  background-image: ${({ bcgImage }) => bcgImage && `url(${bcgImage})`};
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  @media ${device.tablet} {
    width: 60vw;
  }

  @media ${device.laptop} {
    width: 55vw;
    padding-left: 80px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding-left: 120px;
    background-size: 100%;
    background-position: 220px 60px;
  }

  @media ${device.xl} {
    width: 35vw;
  }

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 3.5rem;
    width: 400px;

    @media ${device.smallMobile} {
      font-size: 4rem;
    }

    @media ${device.tablet} {
      font-size: 4.5rem;
    }
    span {
      color: ${({ theme }) => theme.color.primary};
      margin-left: 3px;
    }
  }

  ul {
    padding-left: 30px;

    li {
      font-size: 1.8rem;
      letter-spacing: 1px;

      @media ${device.tablet} {
        font-size: 2.2rem;
        margin-top: 5px;
      }
    }
  }
`

const Skills = () => {
  return (
    <StyledContainer>
      <Hero title="my skills" />
      <StyledDescriptionContainer>
        <StyledDescriptionLeft bcgImage={reactIcon}>
          <h2>
            frontend<span>.</span>
          </h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS / ScSS</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </StyledDescriptionLeft>
        <StyledDescriptionRight bcgImage={nodeIcon}>
          <h2>
            backend & database<span>.</span>
          </h2>
          <ul>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
            <li>Rest API</li>
          </ul>
        </StyledDescriptionRight>
        <StyledDescriptionLeft bcgImage={figmaIcon}>
          <h2>
            design<span>.</span>
          </h2>
          <ul>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Affinity Design</li>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>Wireframes</li>
            <li>Design</li>
            <li>Prototype</li>
          </ul>
        </StyledDescriptionLeft>
      </StyledDescriptionContainer>
      <Footer />
    </StyledContainer>
  )
}

export default Skills
