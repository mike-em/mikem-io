import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const StyledBlob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: '';
    display: block;
    min-height: ${({ size }) => (size ? size : '380px')};
    min-width: ${({ size }) => (size ? size : '380px')};
    background-color: ${({ blobBcg }) => (blobBcg ? blobBcg : '#fff')};
    background-image: ${({ icon }) => (icon ? `url(${icon})` : `null`)};
    background-repeat: no-repeat;
    background-size: ${({ iconSize }) => (iconSize ? iconSize : '170px')};
    background-position: center;
    transform-origin: 50% 50%;
    animation: ${p => BlobAnimation(p)} 10s linear infinite;
  }
`

const Blob = ({ children, blobBcg, icon, size, iconSize }) => {
  return (
    <StyledBlob blobBcg={blobBcg} icon={icon} size={size} iconSize={iconSize}>
      {children}
    </StyledBlob>
  )
}

export default Blob
