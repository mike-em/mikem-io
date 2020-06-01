import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { gsap, CSSPlugin } from 'gsap'
import projects from '../utils/projectMenu' // project menu array
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import arrowRight from '../images/arrow-right-white.svg'
import { device } from '../utils/device'

const C = CSSPlugin

const StyledContainer = styled.div`
  margin: -80px auto 0 auto;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
`

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  width: 100%;
  list-style: none;
  position: absolute;
  bottom: 0;
  margin-bottom: 120px;
  padding-left: 10px;
  transform: translateX(-2000px);

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    height: 50%;
    margin-bottom: 40px;
    padding-left: 20px;
  }

  @media ${device.desktop} {
    height: 60%;
  }
`

const StyledArrow = styled.img`
  margin: 0 0 -8px 20px;
  padding: 0;
  height: 2.2rem;
  opacity: 0;
  transform: translateX(-35px);
  transition: 300ms ease-in-out;

  @media ${device.tablet} {
    height: 4rem;
    margin-bottom: -18px;
  }
`

const StyledNavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: 200ms ease-in-out;
  font-size: 3.3rem;
  font-weight: bold;
  text-align: left;

  @media ${device.smallMobile} {
    font-size: 4.2rem;
  }

  @media ${device.tablet} {
    font-size: 8.8rem;
  }

  :hover {
    text-shadow: 3px 3px ${({ theme }) => theme.color.primary};
    opacity: 1 !important;

    @media ${device.tablet} {
      text-shadow: 4px 4px ${({ theme }) => theme.color.primary};
    }

    ${StyledArrow} {
      transform: translateX(10px);
      opacity: 1;

      @media ${device.tablet} {
        transform: translateX(20px);
      }
    }
  }
`

const StyledBcgImage = styled(Img)`
  height: 100vh;
`

const Projects = () => {
  const [state, setState] = useState('one')
  const [initState, setInitState] = useState(true)

  const data = useStaticQuery(graphql`
    {
      imageOne: file(relativePath: { eq: "imageone.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "imagetwo.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "imagethree.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    let tl = gsap.timeline()

    if (initState) {
      tl.fromTo('#one', 1, { css: { x: 0 } }, { css: { x: 2000 } })
        .fromTo('#two', 1, { css: { x: 0 } }, { css: { x: 2000 } }, '-=0.7')
        .fromTo('#three', 1, { css: { x: 0 } }, { css: { x: 2000 } }, '-=0.7')
    }
  }, [initState])

  return (
    <StyledContainer state={state}>
      {state === 'one' && (
        <StyledBcgImage fluid={data.imageOne.childImageSharp.fluid} />
      )}
      {state === 'two' && (
        <StyledBcgImage fluid={data.imageTwo.childImageSharp.fluid} />
      )}
      {state === 'three' && (
        <StyledBcgImage fluid={data.imageThree.childImageSharp.fluid} />
      )}
      <StyledNav>
        {projects.map((item, index) => (
          <AniLink
            cover
            to={item.url}
            direction="left"
            bg="#ff7500"
            key={index}
          >
            <StyledNavItem
              onMouseEnter={() => setState(item.image)}
              state={state}
              id={item.id}
            >
              {item.text} <StyledArrow src={arrowRight} />
            </StyledNavItem>
          </AniLink>
        ))}
      </StyledNav>
    </StyledContainer>
  )
}

export default Projects
