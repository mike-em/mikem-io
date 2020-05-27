import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Ecommerce from './projects/Ecommerce'
import SocialNetwork from './projects/SocialNetwork'
import Portfolio from './projects/Portfolio'
import arrowRight from '../images/arrow-right-white.svg'
import projects from '../utils/projectMenu' // project menu array

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
`

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  list-style: none;
  position: absolute;
  bottom: 0;
  margin-bottom: 120px;
  padding-left: 10px;

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    height: 50%;
    margin-bottom: 40px;
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
    font-size: 9rem;
  }

  :hover {
    text-shadow: 3px 3px #ff7500;
    opacity: 1;

    @media ${device.tablet} {
      text-shadow: 4px 4px #ff7500;
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

const Projects = () => {
  const [state, setState] = useState('one')

  return (
    <StyledContainer state={state}>
      {state === 'one' && <Ecommerce />}
      {state === 'two' && <SocialNetwork />}
      {state === 'three' && <Portfolio />}
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
