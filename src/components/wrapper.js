import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import Tabs from './tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Icon = styled.li`
  margin: 0.5rem
`

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
              <h1 className="title has-text-light has-text-weight-light is-1 is-size-2-mobile">Mireles Communications</h1>
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
                <nav className="content">
                  <ul>
                    <Icon className="icon">
                      <a href="https://www.mirelescloud.com/" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas fa-lg has-text-grey-dark "/></a>
                    </Icon>
                    <Icon className="icon">
                      <a href="mailto:mirelescommunications@gmail.com" aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg has-text-grey-dark"/></a>
                    </Icon>
                    <Icon className="icon">
                      <a href="https://github.com/MirelesCloud" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fas fa-lg has-text-grey-dark"/></a>
                    </Icon>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </>
    )}
  />
)

export default TemplateWrapper
