import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { device } from '../utils/device'
import Blob from '../components/atoms/Blob'

const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1099;
  color: ${({ state }) => (state ? 'black' : 'white')};
  transition: color 300ms 200ms ease-in-out;
  overflow: hidden;

  ${({ navColor }) =>
    navColor &&
    css`
      color: black;
    `}
`

const StyledMenuButton = styled.button`
  padding: 10px 10px 10px 10px;
  display: inline-block;
  cursor: pointer;
  grid-area: menu;
  background-color: transparent;
  border: 0;
  margin: 0;
  align-self: center;
  justify-self: end;
  transition: transform 100ms 300ms ease-in-out;
  outline-style: none;
`
const StyledHamburger = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  position: relative;
`

const StyledHamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 100ms 200ms ease-in-out;

  ${({ navColor }) =>
    navColor &&
    css`
      background-color: black;
    `}
  ${({ toggle }) =>
    toggle &&
    css`
      background-color: transparent;
    `}
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ toggle }) => (toggle ? 'black' : 'white')};
    position: absolute;
    left: 0;
    transition: all 200ms 200ms ease-in-out;

    ${({ navColor }) =>
      navColor &&
      css`
        background-color: black;
      `}
  }
  &::before {
    top: -11px;
    ${({ toggle }) =>
      toggle &&
      css`
        transform: translateY(11px) rotate(45deg);
      `}
  }
  &::after {
    top: 11px;
    ${({ toggle }) =>
      toggle &&
      css`
        transform: translateY(-11px) rotate(-45deg);
      `}
  }
`

const StyledSligingMenuContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(${props => (props.toggle ? '0' : '100%')});
  transition: transform 300ms 200ms ease-in-out;
  z-index: 999;

  ${({ toggle }) =>
    toggle &&
    css`
      overflow: hidden;
    `}
`

const StyledMenuBlob = styled.div`
  display: none;
  margin-top: 10vh;

  @media ${device.tablet} {
    display: block;
  }
`

const StyledSlidingMenuBlobContainer = styled.div`
  width: 0vw;
  min-height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.color.primary};
  top: 0;
  left: 0;

  @media ${device.tablet} {
    width: 50vw;
  }
`

const StyledSlidingMenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  opacity: 1;

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    width: 50vw;
  }

  h2 {
    margin-left: 20px;
    font-size: 60px;
    font-weight: 800;
    color: gray;
    transition: color 200ms ease-in-out;

    span {
      margin-left: 2px;
    }

    :hover {
      color: black;
      cursor: pointer;

      span {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`

const StyledBlobContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1099;
  opacity: ${({ state }) => (state ? '0' : '1')};
  transition: opacity 300ms 200ms ease-in-out;
  :hover {
    cursor: pointer;
  }
`

const Menu = ({ navColor, children }) => {
  const [state, setState] = useState(false)

  const toggleMenu = () => {
    setState(!state)
  }
  return (
    <>
      <StyledMenuContainer
        onClick={toggleMenu}
        state={state}
        navColor={navColor}
      >
        <p>MENU</p>
        <StyledMenuButton>
          <StyledHamburger>
            <StyledHamburgerInner toggle={state} navColor={navColor} />
          </StyledHamburger>
        </StyledMenuButton>
      </StyledMenuContainer>
      <StyledSligingMenuContainer toggle={state} onClick={toggleMenu}>
        <StyledSlidingMenuBlobContainer>
          <StyledMenuBlob>
            <Blob size="300px" icon={logoDark} />
          </StyledMenuBlob>
        </StyledSlidingMenuBlobContainer>
        <StyledSlidingMenuListContainer>
          <AniLink
            cover
            direction="right"
            to="/"
            bg="#ff7500"
            duration={0.6}
            onClick={toggleMenu}
          >
            <h2>
              work<span>.</span>
            </h2>
          </AniLink>
          <AniLink
            cover
            direction="right"
            to="/about"
            bg="#ff7500"
            duration={0.6}
            onClick={toggleMenu}
          >
            <h2>
              about<span>.</span>
            </h2>
          </AniLink>
          <h2>
            skills<span>.</span>
          </h2>
          <h2>
            contact<span>.</span>
          </h2>
        </StyledSlidingMenuListContainer>
      </StyledSligingMenuContainer>
      <StyledBlobContainer state={state}>{children}</StyledBlobContainer>
    </>
  )
}

export default Menu
