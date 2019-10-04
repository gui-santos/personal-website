import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 2rem;
`

export const TextBig = styled.p`
  font-size: 1.5rem;
  margin: 0 0 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const TextSmall = styled.p`
  font-size: 0.8rem;
  margin: 0 0 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`
