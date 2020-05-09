import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { device } from '../utils/device'

import Ecommerce from './projects/Ecommerce'
import SocialNetwork from './projects/SocialNetwork'
import Portfolio from './projects/Portfolio'

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
  overflow: hidden;
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
    <StyledWrapper state={state}>
      {state === 'one' && <Ecommerce />}
      {state === 'two' && <SocialNetwork />}
      {state === 'three' && <Portfolio />}
      <StyledNav>
        <StyledNavItem onMouseEnter={imageOne} state={state}>
          ecommerce <StyledArrow />
        </StyledNavItem>
        <StyledNavItem onMouseEnter={imageTwo} state={state}>
          social network <StyledArrow />
        </StyledNavItem>
        <StyledNavItem onMouseEnter={imageThree} state={state}>
          portfolio <StyledArrow />
        </StyledNavItem>
      </StyledNav>
    </StyledWrapper>
  )
}

export default Projects
