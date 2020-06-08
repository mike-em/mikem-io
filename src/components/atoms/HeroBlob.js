import React from 'react'
import styled, { keyframes } from 'styled-components'
import { device } from '../../utils/device'

const BlobAnimation = props => keyframes`
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }

  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }

  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }

  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }

  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }

  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }

  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
`

const StyledBlob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: '';
    display: block;
    min-height: 250px;
    min-width: 250px;
    background-color: ${({ theme }) => theme.color.primary};
    transform-origin: 50% 50%;
    animation: ${p => BlobAnimation(p)} 10s linear infinite;
    -webkit-animation: ${p => BlobAnimation(p)} 10s linear infinite;
    -moz-animation: ${p => BlobAnimation(p)} 10s linear infinite;
    -o-animation: ${p => BlobAnimation(p)} 10s linear infinite;

    @media ${device.tablet} {
      min-height: 300px;
      min-width: 300px;
    }

    @media ${device.xl} {
      min-height: 400px;
      min-width: 400px;
    }
  }
`

const HeroBlob = () => {
  return <StyledBlob />
}

export default HeroBlob
