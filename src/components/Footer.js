import React from 'react'
import styled from 'styled-components'
import { GoHeart } from 'react-icons/go'
import social from '../utils/social'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 50px;
  background-color: #ff7500;
`

const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
`

const StyledSocialIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  background-image: ${({ socialIcon }) => socialIcon && `url(${socialIcon})`};
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
`

const StyledCopyright = styled.div`
  color: #ffffff;
  position: relative;

  p {
    margin: 0 0 10px 0;
  }

  span {
    font-size: 1.8rem;
  }
`

const Footer = () => {
  return (
    <StyledContainer>
      <StyledSocialMediaContainer>
        {social.map((item, index) => {
          return (
            <a href={item.url} key={index}>
              <StyledSocialIcon socialIcon={item.icon} />
            </a>
          )
        })}
      </StyledSocialMediaContainer>
      <StyledCopyright>
        <p>
          &copy; designed with{' '}
          <span>
            <GoHeart style={{ marginBottom: '-4px' }} />
          </span>{' '}
          in MK
        </p>
      </StyledCopyright>
    </StyledContainer>
  )
}

export default Footer
