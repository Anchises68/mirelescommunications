import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"


const Home = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: file(relativePath: {eq: "images/eberhard-grossgasteiger-338314-unsplash.jpg"}) {
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
          <div className="hero-head">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="container">
                <div className="navbar-menu ">

                  <Link className="navbar-item has-text-light" to="/">Home</Link>
                  <Link className="navbar-item has-text-light" to="/intro">Intro</Link>
                  <Link className="navbar-item has-text-light" to="/projects">Projects</Link>
                  <Link className="navbar-item has-text-light" to="/about">About</Link>
                  <Link className="navbar-item has-text-light" to="/contact">Contact</Link>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body has-text-centered" >
            <div className="container">
              <h1 className="title has-text-light has-text-weight-light is-size-1">Mireles Commmunications</h1>
              <h3 className="subtitle has-text-light has-text-weight-light">RELEASE FOR FREE UNDER THE CREATIVE COMMONS LICENSE</h3>
            </div>
          </div>
        </section>
        </Layout>
      </>
    )}
  />
)

export default Home
