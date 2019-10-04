import React from 'react'
import styled from 'styled-components'

import { FadeIn } from '../components/styled/animations'
import { Title, TextBig, TextSmall } from '../components/styled/text'
import Layout from '../components/Layout'
import Link from '../components/Link'

const Container = styled.div`
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

function IndexPage() {
  return (
    <Layout>
      <Container>
        <FadeIn>
          <Title>Hello,</Title>
        </FadeIn>

        <FadeIn delay={200}>
          <TextBig>
            I'm Gui Santos, a developer with a passion for design working with
            the web.
            {/* as a profession and with art as a passion. */}
          </TextBig>
        </FadeIn>

        <FadeIn delay={600}>
          <TextSmall>Currently living in Berlin.</TextSmall>
        </FadeIn>

        <FadeIn delay={1000}>
          <Link href="https://www.linkedin.com/in/guigsantos/" target="_blank">
            LinkedIn
          </Link>
        </FadeIn>
      </Container>
    </Layout>
  )
}

export default IndexPage
