import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import styled from "@emotion/styled"
import Layout from "../components/layout"
import Tabs from "../components/tabs"

const Content = styled.div`
  border-style: solid;
  margin-bottom: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-color: #fff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-width: 1px;
  max-width: 100%;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;

  color: #fff;
  background-postition: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin: 0;
  }
`

const SubTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;

  color: #fff;
`

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
        <section className="hero is-fullheight"

        style={{
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
              <h1 className="title has-text-light has-text-weight-light">Mireles Commmunications</h1>
              <h3 classname="subtitle has-text-white has-text-weight-light">RELEASE FOR FREE UNDER THE CREATIVE COMMONS LICENSE</h3>
              <Tabs/>
            </div>
          </div>
        </section>
        </Layout>
      </>
    )}
  />
)

export default Home
