import React from 'react'
import styled, { css } from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Blob from '../components/atoms/Blob'
import menuList from '../utils/menu' // menu items array
import image from '../images/mikem-io.jpg'
import { device } from '../utils/device'

const StyledMenuButton = styled.button`
  padding: 10px 10px 10px 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  align-self: center;
  transition: transform 100ms 300ms ease-in-out;
  outline-style: none;
  z-index: 1099;
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
  display: flex;
  width: 100vw;
  height: 100vh;
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
  background-image: url(${image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 100%;

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

const Menu = ({ navColor, toggleMenu, state }) => {
  return (
    <>
      <StyledMenuButton onClick={toggleMenu}>
        <StyledHamburger>
          <StyledHamburgerInner toggle={state} navColor={navColor} />
        </StyledHamburger>
      </StyledMenuButton>
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
    </>
  )
}

export default Menu
