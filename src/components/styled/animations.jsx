import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const FadeIn = styled.div`
  animation: ${fadeIn} both;
  animation-delay: ${({ delay = 0 }) => delay}ms;
  animation-duration: ${({ duration = 1500 }) => duration}ms;
`

const shiftUp = keyframes`
  0% {
    margin-bottom: -0.5rem;
  }
  100% {
    margin-bottom: 0;
  }`

export const ShiftUp = styled.div`
  animation: ${shiftUp} both;
  animation-delay: ${({ delay = 0 }) => delay}ms;
  animation-duration: ${({ duration = 800 }) => duration}ms;
`
