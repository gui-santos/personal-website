import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

const FadeIn = styled.div`
  animation: ${fadeIn} both;
  animation-delay: ${({ delay = 0 }) => delay}ms;
  animation-duration: ${({ duration = 2000 }) => duration}ms;
`

const About = styled.div`
  height: calc(100vh - 2rem);
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 2rem;
`

const TextBig = styled.p`
  font-size: 1.5rem;
  margin: 0 0 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const TextSmall = styled.p`
  font-size: 0.8rem;
  margin: 0 0 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

const Link = styled.a`
  font-size: 0.8rem;
  color: #c90099;
  text-decoration: none;
  transition: color 0.5s ease-in-out;

  :hover {
    color: #ff05c3;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

const IndexPage = () => (
  <Layout>
    <About>
      <FadeIn>
        <Title>Hello,</Title>
      </FadeIn>

      <FadeIn delay={200}>
        <TextBig>
          I'm Gui Santos, a developer working with the web as a profession and
          with art as a passion.
        </TextBig>
      </FadeIn>

      <FadeIn delay={600}>
        <TextSmall>Currently living in Berlin.</TextSmall>
      </FadeIn>

      <Link href="https://www.linkedin.com/in/guigsantos/" target="_blank">
        LinkedIn
      </Link>
    </About>
  </Layout>
)

export default IndexPage
