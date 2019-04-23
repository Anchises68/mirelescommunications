import React from 'react'
import { Link, StaticQuery } from 'gatsby'

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
       <div className="columns" style={{height: "100vw"}}>
        <div className="column is-one-third" style={{
          backgroundImage: `url(${data.image.childImageSharp.fluid.src})`
        }}>
          <div class="tabs is-toggle is-small" >
            <ul>
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/intro">
                  <span>Intro</span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column is-two-third">
          { children }
        </div>
       </div>
      </section>
      </>
    )}
  />
)

export default TemplateWrapper
