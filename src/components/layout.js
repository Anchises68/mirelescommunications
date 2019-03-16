import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'



const Layout = ({children}) => (
  <div >

    <StaticQuery
      query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "images/home/header.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
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

          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              width: '100%',
              height: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'absolute',
            }}
          />

          <Header image={data.site.siteMetadata.title}/>


        </>
      )}
    />
    <div className="main-container mb-5">
      {children}
    </div>



  </div>

)

export default Layout
