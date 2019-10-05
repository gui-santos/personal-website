import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './global.css'
import favicon from '../images/favicon.ico'

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'charset', content: 'UTF-8' }]}
          link={[
            { rel: 'icon', type: 'image/png', href: `${favicon}` },
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Roboto+Mono:300,700&display=swap',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Page>{children}</Page>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
