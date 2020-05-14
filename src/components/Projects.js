import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { device } from '../utils/device'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Ecommerce from './projects/Ecommerce'
import SocialNetwork from './projects/SocialNetwork'
import Portfolio from './projects/Portfolio'

import imageOne from '../images/imageone.jpg'

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
  margin-bottom: 140px;
  padding-left: 10px;

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    height: 50%;
    margin-bottom: 40px;
  }
`

const StyledArrow = styled(IoIosArrowForward)`
  margin: 0 0 -5px 20px;
  padding: 0;
  font-size: 30px;
  opacity: 0;
  transform: translateX(-35px);
  transition: 200ms ease-in-out;

  @media ${device.tablet} {
    font-size: 50px;
    margin-bottom: -15px;
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
  font-size: 40px;
  font-weight: bold;
  text-align: left;

  @media ${device.tablet} {
    font-size: 80px;
  }

  :hover {
    text-shadow: 3px 3px #ff7500;
    opacity: 1;

    @media ${device.tablet} {
      text-shadow: 4px 4px #ff7500;
    }

    ${StyledArrow} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

const Projects = () => {
  const [state, setState] = useState('one')

  const imageOne = () => setState('one')
  const imageTwo = () => setState('two')
  const imageThree = () => setState('three')

  return (
    <StyledContainer state={state}>
      {state === 'one' && <Ecommerce />}
      {state === 'two' && <SocialNetwork />}
      {state === 'three' && <Portfolio />}
      <StyledNav>
        <AniLink
          cover
          to="/ecommerce"
          direction="left"
          bg="#ff7500"
          // bg="
          //   url(https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)
          //   center / cover /* position / size */
          //         no-repeat                /* repeat */
          //         fixed                    /* attachment */
          //         padding-box              /* origin */
          //         content-box              /* clip */
          //         white                     /* color */
          // "
        >
          <StyledNavItem onMouseEnter={imageOne} state={state}>
            ecommerce <StyledArrow />
          </StyledNavItem>
        </AniLink>
        <AniLink
          cover
          to="/social-network"
          direction="left"
          bg="#ff7500"
          // bg="
          //   url(https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)
          //   center / cover /* position / size */
          //         no-repeat                /* repeat */
          //         fixed                    /* attachment */
          //         padding-box              /* origin */
          //         content-box              /* clip */
          //         white                     /* color */
          // "
        >
          <StyledNavItem onMouseEnter={imageTwo} state={state}>
            social network <StyledArrow />
          </StyledNavItem>
        </AniLink>
        <AniLink
          cover
          to="/photography"
          direction="left"
          bg="#ff7500"
          // bg="
          //   url(https://images.unsplash.com/photo-1540116771367-4b6be7945fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)
          //   center / cover /* position / size */
          //         no-repeat                /* repeat */
          //         fixed                    /* attachment */
          //         padding-box              /* origin */
          //         content-box              /* clip */
          //         white                     /* color */
          // "
        >
          <StyledNavItem onMouseEnter={imageThree} state={state}>
            portfolio <StyledArrow />
          </StyledNavItem>
        </AniLink>
      </StyledNav>
    </StyledContainer>
  )
}

export default Projects
