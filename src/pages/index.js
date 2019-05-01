import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"


const Home = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: file(relativePath: {eq: "images/aleks-dahlberg-255027-unsplash.jpg"}) {
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
        <Layout>
        <section className="hero is-fullheight" style={{
          backgroundImage: `url(${data.hero.childImageSharp.fluid.src})`

        }}
        css={{
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',

        }}
          >
          <div className="hero-body has-text-centered" >
            <div className="container">
              <h1 className="title has-text-light has-text-weight-light is-1">Mireles Commmunications</h1>
              <h3 className="subtitle has-text-light has-text-weight-light is-uppercase">We give your business an online voice.</h3>
                <div className="tabs has-text-weight-light is-centered" >
                  <div className="container" style={{marginTop:"40px"}}>
                    <ul>
                      <li>
                        <Link to="/" className="has-text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/intro" className="has-text-white">
                          Intro
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects" className="has-text-white">
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="has-text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="has-text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
            </div>
          </div>
        </section>
        </Layout>
      </>
    )}
  />
)

export default Home
