import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import logoLight from '../images/mm-logo-light.svg'
import mailLight from '../images/mail-icon-light.svg'
import mailDark from '../images/mail-icon-primary.svg'
import Blob from '../components/atoms/Blob'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 80px;
  width: 100%;
  max-width: 1366px;
`
const StyledLogo = styled.div`
  width: 100px;
  height: 100%;
  background-image: url(${logoDark});
  background-size: 80px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 990;
`
const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  letter-spacing: 1px;
  color: white;
  z-index: 990;
`

const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1099;
  color: ${({ state }) => (state ? 'black' : 'white')};
  transition: color 300ms 200ms ease-in-out;
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

const StyledBlobContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1099;
  opacity: ${({ state }) => (state ? '0' : '1')};
  transition: opacity 300ms 200ms ease-in-out;
  cursor: pointer;
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

const Nav = ({ title }) => {
  const [state, setState] = useState(false)

  const toggleMenu = () => {
    setState(!state)
  }

  return (
    <>
      <StyledContainer>
        <StyledLogo />
        <StyledTitle>{title}</StyledTitle>
        <StyledMenuContainer onClick={toggleMenu} state={state}>
          <p>MENU</p>
          <StyledMenuButton>
            <StyledHamburger>
              <StyledHamburgerInner toggle={state} />
            </StyledHamburger>
          </StyledMenuButton>
        </StyledMenuContainer>
        <StyledBlobContainer state={state}>
          <Blob
            blobBcg="#ffffff"
            size="100px"
            icon={mailDark}
            iconSize="45px"
          />
        </StyledBlobContainer>
      </StyledContainer>
      <StyledSligingMenuContainer toggle={state}>
        <StyledSlidingMenuBlobContainer>
          <StyledMenuBlob>
            <Blob size="300px" />
          </StyledMenuBlob>
        </StyledSlidingMenuBlobContainer>
        <StyledSlidingMenuListContainer>
          <h2>
            work<span>.</span>
          </h2>
          <h2>
            about<span>.</span>
          </h2>
          <h2>
            skills<span>.</span>
          </h2>
          <h2>
            contact<span>.</span>
          </h2>
        </StyledSlidingMenuListContainer>
      </StyledSligingMenuContainer>
    </>
  )
}

export default Nav
