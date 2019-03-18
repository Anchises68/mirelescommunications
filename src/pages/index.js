import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from "@emotion/styled"
import { css } from '@emotion/core'

import Layout from "../components/layout"

const Hero = css`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

`

const SubTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`
const Main = styled.div`
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: -75px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  box-shadow: rgba(39, 44, 49, 0.03) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.06) 8px 28px 50px, rgba(39, 44, 49, 0.06) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -2px, 0) scale(1.02);
`
const Alex = styled.div`

`

const Feature = styled.div`
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
  background-color: #fff;
  box-shadow: rgba(39, 44, 49, 0.02) 8px 14px 38px, rgba(39, 44, 49, 0.02) 1px 3px 8px;
`

const Work = styled.div`
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.06) 8px 28px 50px, rgba(39, 44, 49, 0.06) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -2px, 0) scale(1.02);
`

const TemplateWrapper = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: file(relativePath: {eq: "images/Laptop1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048 quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        Molly: file(relativePath: {eq: "images/Molly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Alex: file(relativePath: {eq: "images/Baller.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        golivewell: file(relativePath: {eq: "images/golivewell.png"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        ccc: file(relativePath: {eq: "images/centurycustomcoach.png"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        tyss: file(relativePath: {eq: "images/smokeshop.png"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <section className="hero is-large is-bold is-dark" css={Hero} style={{
              backgroundImage: `url(${data.hero.childImageSharp.fluid.src})`
            }}>
            <div className="hero-body">
              <div className="container">
                <Title className="title">
                  Mireles Communications
                </Title>
                <SubTitle className="subtitle">
                  Web Development - Marketing
                </SubTitle>
              </div>
            </div>
          </section>
          <Main className="container is-fluid">
            <div className="columns">
              <div className="column is-half">
                <Alex><Img fluid={data.Alex.childImageSharp.fluid}/></Alex></div>
              <div className="column is-half"><Img fluid={data.Molly.childImageSharp.fluid}/></div>
            </div>
          </Main>
          <Feature className="container is-fluid is-primary">
            <div className="columns flex">
              <Work className="column "><a href="https://golivewell.com" aria-label="Go Live Well" target="_blank" rel="noopener noreferrer"><Img fluid={data.golivewell.childImageSharp.fluid}/></a></Work>
              <Work className="column "><a href="https://centurycustomcoach.com" aria-label="Century Custom Coach" target="_blank" rel="noopener noreferrer"><Img fluid={data.ccc.childImageSharp.fluid}/></a></Work>
              <Work className="column "><a href="https://theyellowsmokeshop.com" aria-label="The Yellow Smoke Shop" target="_blank" rel="noopener noreferrer"><Img fluid={data.tyss.childImageSharp.fluid}/></a></Work>
            </div>
          </Feature>
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                <strong>Mireles Communications</strong> by <a href="https://mirelescloud.com" aria-label="MirelesCloud" style={{color:"#666699"}}>MirelesCloud</a>
              </p>
            </div>
          </footer>
        </Layout>
      </>
    )}
  />
)

export default TemplateWrapper
