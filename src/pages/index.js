import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const About = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`

const Title = styled.h1`
  margin-top: 0;
`

const Paragraph = styled.p`
  font-size: 2rem;
  margin: 0;
`

const IndexPage = () => (
  <Layout>
    <About>
      <Title>Hello,</Title>
      <Paragraph>
        I'm Gui Santos, a developer focused in the web and a design enthusiast
      </Paragraph>
      <Paragraph>currently living in Berlin.</Paragraph>
    </About>
  </Layout>
)

export default IndexPage
