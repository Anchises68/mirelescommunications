import React from 'react'
import { StaticQuery } from 'gatsby'

import Social from './social'
import Tabs from './tabs'

const TemplateWrapper = ( {children} ) => (
  <StaticQuery
    query={graphql`
      query PageQuery {
        image: file(relativePath: {eq: "images/aleks-dahlberg-255027-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048 quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section>
          <div className="hero" style={{
            backgroundImage: `url(${data.image.childImageSharp.fluid.src})`,
            backgroundPosition: 'center',
            backgroungRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
          }}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-light has-text-weight-light">Mireles Communications</h1>
            </div>
          </div>
          </div>
          <div className="section">
            <div className="container ">
              <div className="content">
                <Tabs/>
              </div>
            </div>
            <div className="container">
              <div className="content has-text-weight-light">
                { children }
              </div>
              <div className="content has-text-centered ">
                <Social/>
              </div>
            </div>
          </div>
        </section>
      </>
    )}
  />
)

export default TemplateWrapper
