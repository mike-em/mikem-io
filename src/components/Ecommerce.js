import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from '../utils/device'
import Img from 'gatsby-image'
import Hero from './Hero'
import Footer from './Footer'
import linkIcon from '../images/link-icon-primary.svg'
import githubIcon from '../images/github-link-primary.svg'
import arrowIcon from '../images/arrow-right-primary.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDescriptionContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin-top: 50px;
`

const StyledDescriptionLeft = styled.div`
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid #ff7500;
  border-left: none;
  border-radius: 0 50px 50px 0;

  background-repeat: no-repeat;
  background-size: 120%;
  background-position: 100px 60px;

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 3rem;
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

  p {
    margin: 0;
  }
`
const StyledImageContainer = styled(Img)`
  margin-top: 50px;
  width: 100vw;
  height: 500px;
`

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: end;
  margin: 20px 20px 0 0;
  padding: 0 30px;
  width: 200px;
  height: 80px;
  border: 2px solid #ff7500;
  border-radius: 50px;
`

const StyledLink = styled.a`
  width: 50px;
  height: 50px;
  background-image: ${({ bcgImg }) => bcgImg && `url(${bcgImg})`};
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 50% 50%;
`

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  height: 30px;
  margin: 30px 0 -20px 0;
  color: #ff7500;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledButtonNext = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    img {
      transition: transform 200ms ease-in-out;
      transform: translateX(3px);
    }
  }

  img {
    height: 16px;
    margin-left: 8px;
  }
`

const Ecommerce = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "imageone.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <Hero title="ecom merce" />
      <StyledDescriptionContainer>
        <StyledDescriptionRight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            dolor et esse, est nemo quis vero debitis vel rem maiores itaque
            quibusdam doloremque totam, ut nesciunt optio voluptatum voluptate
            ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque, dolor et esse, est nemo quis vero debitis vel rem maiores
            itaque quibusdam doloremque totam, ut nesciunt optio voluptatum
            voluptate ullam!
          </p>
        </StyledDescriptionRight>
      </StyledDescriptionContainer>
      <StyledImageContainer fluid={data.file.childImageSharp.fluid} />
      <StyledDescriptionContainer>
        <StyledDescriptionLeft>
          <h2>
            technologies<span>.</span>
          </h2>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>Styled Components</li>
            <li>Firebase</li>
            <li>Google Authentication</li>
            <li>Stripe</li>
          </ul>
        </StyledDescriptionLeft>
        <StyledLinksContainer>
          <StyledLink
            href="https://google.com"
            target="blank"
            bcgImg={linkIcon}
          />
          <StyledLink
            href="https://google.com"
            target="blank"
            bcgImg={githubIcon}
          />
        </StyledLinksContainer>
      </StyledDescriptionContainer>
      <StyledBottomNav>
        <AniLink cover direction="left" to="/social-network" bg="#ff7500">
          <StyledButtonNext>
            <h4>next</h4>
            <img src={arrowIcon} />
          </StyledButtonNext>
        </AniLink>
      </StyledBottomNav>
      <Footer />
    </StyledContainer>
  )
}

export default Ecommerce
