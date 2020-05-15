import React from 'react'
import styled from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import Menu from './Menu'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
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

const Navbar = ({ title, navColor, children, titleColor, logo }) => {
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
      <Menu navColor={navColor}>{children}</Menu>
    </StyledContainer>
  )
}

export default Navbar
