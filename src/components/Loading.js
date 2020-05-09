import React from 'react'
import styled, { keyframes } from 'styled-components'

import Blob from './atoms/Blob'

const FadeOutAnimation = props => keyframes`
  0% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 500ms, opacity 500ms linear;
  }
`

const LoadingAnimation = props => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
    visibility: hidden;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  animation: ${FadeOutAnimation} 500ms 2s linear forwards;
  z-index: 9999;
`

const StyledLoadingBar = styled.div`
  width: 200px;
  height: 6px;
  background-color: transparent;
  position: absolute;
  bottom: 60px;
`

const StyledLoader = styled.div`
  width: 0%;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 117, 0, 0.4) 0%,
    rgba(255, 117, 0, 0.8) 80%,
    rgba(255, 117, 0, 1) 100%
  );
  animation: ${LoadingAnimation} 2s linear forwards;
`

const Loading = () => {
  return (
    <StyledContainer>
      <Blob size="300px">
        <StyledLoadingBar>
          <StyledLoader />
        </StyledLoadingBar>
      </Blob>
    </StyledContainer>
  )
}

export default Loading
