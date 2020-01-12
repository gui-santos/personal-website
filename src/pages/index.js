import React from 'react'
import styled from 'styled-components'

import { FadeIn, ShiftUp } from '../components/styled/animations'
import { Title, TextBig, TextSmall } from '../components/styled/text'
import Layout from '../components/Layout'
import Link from '../components/Link'

const Container = styled.div`
  position: relative;
  height: calc(100vh - 2rem);
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`

const FadeAndShift = ({ delay = 0, children }) => (
  <ShiftUp delay={delay}>
    <FadeIn delay={delay}>{children}</FadeIn>
  </ShiftUp>
)

function IndexPage() {
  return (
    <Layout>
      <Container>
        <FadeAndShift>
          <Title>Hello,</Title>
        </FadeAndShift>

        <FadeAndShift delay={200}>
          <TextBig>
            I'm Gui Santos, a developer with a passion for design helping to
            create great interfaces on the web
          </TextBig>
        </FadeAndShift>

        <FadeAndShift delay={400}>
          <TextSmall>Currently living in Berlin.</TextSmall>
        </FadeAndShift>

        <FadeAndShift delay={600}>
          <Link
            href="https://www.linkedin.com/in/guigsantos/?locale=en_US"
            target="_blank"
          >
            LinkedIn&#8599;
          </Link>
          {'  '}
          <Link href="https://github.com/gui-santos" target="_blank">
            GitHub&#8599;
          </Link>
        </FadeAndShift>
      </Container>
    </Layout>
  )
}

export default IndexPage
