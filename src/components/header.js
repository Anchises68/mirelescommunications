import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from "@emotion/styled"
import { css } from '@emotion/core'

const PostCardStyles = css`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const FeatureContainer = styled.div`
  position: relative;
  margin-top: -75px;
  border-radius: 3px;
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  flex-wrap: nowrap;
  background-color: #fff;
  box-shadow: rgba(39, 44, 49, 0.2) 8px 14px 38px, rgba(39, 44, 49, 0.2) 1px 3px 8px;
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.3) 8px 28px 50px, rgba(39, 44, 49, 0.3) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);



`
const FeatureContent = styled.div`
  margin: 10px;
  background-color: rgba(39, 44, 49, 0.2);
  position: relative;
  align-content: center;
  text-align: center;
  width: 50%;
  height: auto;
`

const Hero = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
`

const HeroText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 3.3rem;
  text-align: center;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = () => (
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
      <section>
        <Hero style={{backgroundImage: `url(${data.hero.childImageSharp.fluid.src})`}}>
          <HeroText>Mireles Communications</HeroText>
        </Hero>
        <FeatureContainer>
          <FeatureContent>
            <Img fluid={data.feature.childImageSharp.fluid}/>
          </FeatureContent>
        </FeatureContainer>
      </section>
      </>
    )}
  />
)

export default Header
