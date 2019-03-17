import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import styled from "@emotion/styled"

import Layout from "../components/layout"

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

const TemplateWrapper = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: file(relativePath: {eq: "images/julian-bock-250960-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        feature: file(relativePath: {eq: "images/hotblonde.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <section class="hero is-medium is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <Title class="title">
                  Mireles Communications
                </Title>
                <SubTitle class="subtitle">
                  Design - Development - Distribution
                </SubTitle>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )}
  />
)

export default TemplateWrapper
