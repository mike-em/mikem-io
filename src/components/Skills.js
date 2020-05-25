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
`

const StyledDescriptionLeft = styled.div`
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid #ff7500;
  border-left: none;
  border-radius: 0 50px 50px 0;
  background-image: ${({ bcgImage }) => bcgImage && `url(${bcgImage})`};
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 4rem;
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
    }
  }
`

const StyledDescriptionRight = styled.div`
  justify-self: end;
  width: 90vw;
  padding: 20px 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-right: none;
  border-radius: 50px 0 0 50px;
  background-image: ${({ bcgImage }) => bcgImage && `url(${bcgImage})`};
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 3.5rem;

    @media ${device.smallMobile} {
      font-size: 4rem;
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
            <li>CSS frameworks</li>
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
