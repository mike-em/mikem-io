import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Blob from '../components/atoms/Blob'
import menuList from '../utils/menu' // menu items array
import { device } from '../utils/device'

const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1099;
  color: ${({ state }) => (state ? 'black' : 'white')};
  transition: color 300ms 200ms ease-in-out;
  overflow: hidden;

  p {
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }

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
      background-color: ${({ theme }) => theme.color.black};
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
    background-color: ${({ toggle, theme }) =>
      toggle ? theme.color.black : theme.color.white};
    position: absolute;
    left: 0;
    transition: all 200ms 200ms ease-in-out;

    ${({ navColor }) =>
      navColor &&
      css`
        background-color: ${({ theme }) => theme.color.black};
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
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 0;
  right: 0;

  a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    width: 50vw;
  }

  h2 {
    margin: 20px 20px;
    font-size: 6rem;
    letter-spacing: 2px;
    font-weight: ${({ theme }) => theme.extraBold};
    color: ${({ theme }) => theme.color.grey};
    transition: color 200ms ease-in-out;

    @media ${device.smallMobile} {
      margin: 40px 20px;
    }

    @media ${device.tablet} {
      font-size: 7rem;
    }

    @media ${device.laptop} {
      font-size: 9rem;
    }

    @media ${device.height} {
      margin: 20px;
    }

    span {
      margin-left: 4px;
      transition: color 200ms ease-in-out;
    }

    :hover {
      color: ${({ theme }) => theme.color.black};
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
  opacity: ${({ state, isVisible }) => (state || isVisible ? '0' : '1')};
  transform: translateX(${props => (props.isVisible !== true ? '0' : '120px')});
  transition: all 300ms 200ms ease-in-out;
  :hover {
    cursor: pointer;
  }
`

const Menu = ({ navColor, children }) => {
  const [state, setState] = useState(false)
  const [visible, setVisible] = useState(false)

  // function hiding contact link on scroll

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  const toggleMenu = () => {
    setState(!state)
  }

  const handleScroll = () => {
    if (document.defaultView.scrollY > 200) {
      setVisible(true)
    } else if (document.defaultView.scrollY < 200) {
      setVisible(false)
    }
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
            <Blob size="320px" icon={logoDark} />
          </StyledMenuBlob>
        </StyledSlidingMenuBlobContainer>
        <StyledSlidingMenuListContainer>
          {menuList.map((item, index) => (
            <AniLink
              key={index}
              cover
              direction="right"
              to={item.url}
              bg="#ff7500"
              duration={0.6}
              onClick={toggleMenu}
            >
              <h2>
                {item.text}
                <span>.</span>
              </h2>
            </AniLink>
          ))}
        </StyledSlidingMenuListContainer>
      </StyledSligingMenuContainer>
      <StyledBlobContainer state={state} isVisible={visible}>
        {children}
      </StyledBlobContainer>
    </>
  )
}

export default Menu
