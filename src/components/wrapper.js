import React from 'react'
import { Link, StaticQuery } from 'gatsby'

const TemplateWrapper = ( {children} ) => (
  <StaticQuery
    query={graphql`
      query PageQuery {
        image: file(relativePath: {eq: "images/eberhard-grossgasteiger-338314-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048 quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        feature: file(relativePath: {eq: "images/nathan-anderson-100058-unsplash.jpg"}) {
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
          <div className="section is-centered" style={{margin:"2rem"}}>
            <div className="container">
              <div className="content">
                <div class="tabs has-text-weight-light" >
                  <ul className="has-text-grey">
                    <li>
                      <Link to="/">
                        <span className="has-text-grey">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/intro">
                        <span className="has-text-grey">Intro</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                      <span className="has-text-grey">Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span className="has-text-grey">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <span className="has-text-grey">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="content">
                { children }
              </div>
            </div>
          </div>
        </section>
      </>
    )}
  />
)

export default TemplateWrapper
