import React from 'react'
import styled, { keyframes } from 'styled-components'

import Blob from './atoms/Blob'

const LoadingAnimation = props => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`

const StyledLoadingBar = styled.div`
  width: 200px;
  height: 6px;
  background-color: transparent;
  position: absolute;
  bottom: 100px;
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
  animation: ${LoadingAnimation} 1.2s linear forwards;
`

const Loading = () => {
  return (
    <StyledContainer>
      <Blob>
        <StyledLoadingBar>
          <StyledLoader />
        </StyledLoadingBar>
      </Blob>
    </StyledContainer>
  )
}

export default Loading
