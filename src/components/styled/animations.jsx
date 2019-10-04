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
  animation-duration: ${({ duration = 2000 }) => duration}ms;
`