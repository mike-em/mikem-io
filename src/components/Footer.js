import React from 'react'
import styled from 'styled-components'
import social from '../utils/social'
import AniLink from 'gatsby-plugin-transition-link'
import privacyIcon from '../images/privacy-policy.svg'
import { GoHeart } from 'react-icons/go'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.primary};
`

const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 35%;
  }

  @media ${device.desktop} {
    width: 25%;
  }
`

const StyledSocialIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  background-image: ${({ socialIcon }) => socialIcon && `url(${socialIcon})`};
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
  transition: transform 200ms ease-in-out;

  :hover {
    transform: translateY(-3px);
  }
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
            <a href={item.url} key={index} target="blank">
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
          by MikeM
        </p>
      </StyledCopyright>
    </StyledContainer>
  )
}

export default Footer
