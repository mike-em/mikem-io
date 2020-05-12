import React from 'react'
import styled from 'styled-components'
import logoDark from '../images/mm-logo-dark.svg'
import Menu from './Menu'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
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

const Navbar = ({ title, navColor, children }) => {
  return (
    <StyledContainer>
      <StyledLogo />
      <StyledTitle>{title}</StyledTitle>
      <Menu navColor={navColor}>{children}</Menu>
    </StyledContainer>
  )
}

export default Navbar
