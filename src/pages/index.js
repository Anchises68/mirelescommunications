import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from "@emotion/styled"
import { css } from '@emotion/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

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
const Intro = styled.div`
  text-align: center;
  background-color: #fff;
  border-top: #666699 25px solid;
  margin-top: -75px;
  margin-bottom: 50px;
  box-shadow: rgba(39, 44, 49, 0.03) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;

  @media (max-width: 600px) {
    margin-top: 50px;
  }
`
const Mug = styled.div`
  transition: all 0.5s ease;
  :hover {
    box-shadow: rgba(39, 44, 49, 0.06) 8px 28px 50px, rgba(39, 44, 49, 0.06) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -2px, 0) scale(1.05);
`

const Feature = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: rgba(39, 44, 49, 0.03) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;

`
const WorkTitle = styled.div`
  text-transform: uppercase;
  margin-left: 50px;
  padding-top: 25px;
`

const Work = styled.div`
  transition: all 0.5s ease;
  :hover {
    opacity: 0.6;
    box-shadow: rgba(39, 44, 49, 0.01) 8px 28px 50px, rgba(39, 44, 49, 0.01) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -2px, 0) scale(1.01);

`

const Overlay = styled.div`
  visibility: hidden;
  :hover {
    visibility: visible;
    opacity: 1;
  }
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
          <Intro className="container">
            <div className="columns" style={{padding:"20px 30px 5px"}}>
              <div className="column is-full has-text-justified is-size-5 has-text-grey-dark" >
                <p>We give your business an online voice. </p>
                <p>As a professional freelance website development and marketing team, we have a combined 37 years experience and expertise in business, marketing and website development.</p>
                <p>You come to us for expert website design, proven marketing services and competitive rates. You will stay for our second-to-none commitment to you as our client.</p>
                <a class="button is-primary" href="mailto:mirelescommunications@gmail.com" aria-label="Mireles Communications" >Contact Us</a>
              </div>
            </div>
          </Intro>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <Mug className="card">
                  <div className="card-image">
                    <figure className="image">
                        <Img fluid={data.Alex.childImageSharp.fluid}/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">Alex Mireles</p>
                      <p className="subtitle">Web Developer</p>
                      <span className="icon">
                        <a href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} className="fas fa-lg "/></a>
                      </span>
                      <span className="icon">
                        <a href="mailto:mirelescloud@gmail.com" aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg "/></a>
                      </span>
                      <span className="icon">
                        <a href="https://www.linkedin.com/in/alex-mireles-0a79999a/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-lg "/></a>
                      </span>
                      <span className="icon">
                        <a href="https://github.com/MirelesCloud" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fas fa-lg "/></a>
                      </span>
                      <span className="icon">
                        <a href="https://twitter.com/AlexMireles310" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fas fa-lg "/></a>
                      </span>
                      <br/>
                    </div>
                  </div>
                </Mug>
              </div>
              <div className="column is-half">
                <Mug className="card">
                  <div className="card-image">
                    <figure className="image">
                        <Img fluid={data.Molly.childImageSharp.fluid}/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">Molly Riter Mireles</p>
                      <p className="subtitle">Marketing Consultant - Content Creator</p>
                        <span className="icon">
                          <a href="https://mollymireles.com" aria-label="Molly Mireles" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} className="fas fa-lg "/></a>
                        </span>
                        <span className="icon">
                          <a href="mailto:mirelescommunications@gmail.com" aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg "/></a>
                        </span>
                        <span className="icon">
                          <a href="https://www.linkedin.com/in/molly-riter-mireles-0a19bb6/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-lg "/></a>
                        </span>
                      <br/>
                    </div>
                  </div>
                </Mug>
              </div>
            </div>
          </div>
          <div className="container" style={{paddingTop:"30px"}}>
            <hr/>
          </div>
          <Feature className="container">
            <WorkTitle className="title has-text-left has-text-grey">Work Examples</WorkTitle>
            <div className="columns">
              <Work className="column ">
                <a href="https://golivewell.com" aria-label="Go Live Well" target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.golivewell.childImageSharp.fluid} />
                </a>
                <Overlay>
                  <FontAwesomeIcon icon={faLink} className="fa-2x" style={{color:"#000"}}/>
                </Overlay>
              </Work>
              <Work className="column "><a href="https://centurycustomcoach.com" aria-label="Century Custom Coach" target="_blank" rel="noopener noreferrer"><Img fluid={data.ccc.childImageSharp.fluid}/></a></Work>
              <Work className="column "><a href="https://theyellowsmokeshop.com" aria-label="The Yellow Smoke Shop" target="_blank" rel="noopener noreferrer"><Img fluid={data.tyss.childImageSharp.fluid}/></a></Work>
            </div>
          </Feature>
          <div className="container has-background-white" style={{marginTop:"30px", marginBottom:"30px", padding:"10px"}}>
            <div className="columns">
              <div className="column is-full has-text-centered">

                <a class="button is-primary is-large" href="mailto:mirelescommunications@gmail.com" aria-label="Mireles Communications" >Contact Us</a>


              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                <strong>Mireles Communications</strong> by <a href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer" style={{color:"#666699"}}>MirelesCloud</a>
              </p>
            </div>
          </footer>
        </Layout>
      </>
    )}
  />
)




export default TemplateWrapper
