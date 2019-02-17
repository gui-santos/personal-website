import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>
      I’m Guilherme Santos, a designer and technology enthusiast, passionate to
      build great experiences.
    </p>
    <p>Currently based in Berlin</p>
    <br />
    <p>
      project under devlopment{' '}
      <span role="img" aria-label="smile with sweat drop">
        😅
      </span>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
