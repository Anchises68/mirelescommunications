import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import "../styles/style.scss"

import SEO from './SEO'

import { TypographyStyle  } from 'react-typography'
import typography from '../utils/typography'

const Layout = ({children}) => (
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
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <SEO/>
          <TypographyStyle typography={typography} />
          <div>
            {children}
          </div>
        </>
      )}
    />
)

export default Layout
