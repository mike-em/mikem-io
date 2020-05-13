import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import Hero from './Hero'
import cards from '../utils/cards'
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
      color: #ff7500;
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
  border: 2px solid #ff7500;
  border-right: none;
  border-radius: 50px 0 0 50px;
  background-image: ${({ bcgImage }) => bcgImage && `url(${bcgImage})`};
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 4rem;
    span {
      color: #ff7500;
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

const StyledServicesContainer = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 50px;
  background-color: #ff7500;
  color: #ffffff;
`

const StyledTitle = styled.div`
  justify-self: center;
  width: 95vw;
  h2 {
    width: 320px;
    font-size: 9rem;
    font-weight: 800;
    letter-spacing: 5px;
    word-break: break-word;
    margin: 0;

    span {
      margin-left: 10px;
    }
  }
`

const StyledDescription = styled.div`
  width: 95vw;
  justify-self: center;
`
const StyledServicesList = styled.div`
  display: grid;
  width: 95vw;
  justify-self: center;

  h3 {
    font-size: 3.5rem;
    letter-spacing: 3px;
    margin-top: 10px;
    margin-bottom: 0;
  }

  ul {
    font-size: 2rem;
    list-style: none;
    padding: 0 10px;

    li {
      margin: 5px;
    }
  }
`

const StyledProcessContainer = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 30px;

  span {
    color: #ff7500;
  }
`

const StyledProcessInnerContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
  width: 95vw;
  justify-items: center;
  justify-self: center;
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 200px;
  background-color: #ff7500;
  border-radius: 20px;
  position: relative;

  h3 {
    margin: 0;
    width: 50%;
    text-align: center;
    color: #ffffff;
    letter-spacing: 2px;
    position: absolute;
    top: 130px;
  }
`

const StyledCardImg = styled.div`
  width: 40%;
  height: 70px;
  background-image: ${({ cardImg }) => cardImg && `url(${cardImg})`};
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 50%;
  position: absolute;
  top: 50px;
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
