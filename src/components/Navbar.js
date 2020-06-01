import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { device } from '../utils/device'
import logoDark from '../images/mm-logo-dark.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Menu from './Menu'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;

  @media ${device.tablet} {
    padding: 0 20px;
  }
`

const StyledLogo = styled(AniLink)`
  width: 100px;
  height: 100%;
  background-image: ${({ logo }) =>
    logo ? `url(${logo})` : `url(${logoDark})`};
  background-size: 80px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 990;
`

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 1px;
  color: ${({ titleColor, theme }) =>
    titleColor ? titleColor : theme.color.white};
  z-index: 990;
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

const Navbar = ({ title, titleColor, navColor, logo, children }) => {
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
    <StyledContainer>
      <StyledLogo
        cover
        direction="bottom"
        to="/"
        bg="#ff7500"
        duration={0.6}
        logo={logo}
      />
      <StyledTitle titleColor={titleColor}>{title}</StyledTitle>
      <Menu toggleMenu={toggleMenu} state={state} navColor={navColor} />
      <StyledBlobContainer state={state} isVisible={visible}>
        {children}
      </StyledBlobContainer>
    </StyledContainer>
  )
}

export default Navbar
