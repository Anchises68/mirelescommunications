import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from "@emotion/styled"
import { jsx, css } from '@emotion/core'
import style from '../styles/backlight.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"

const Hero = css`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: 100% 75%;
  margin-bottom: 0;
  background-color: darken(#252B37, 4%);
`
const Content = styled.div`
  border-style: solid;
  margin-bottom: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  border-color: #fff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-width: 1px;
  max-width: 100%;
`

const Overlay = css`
  &:before {
    content: '';
  	position: absolute;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
  	opacity: .6;
  }
`

const Line = styled.div`
  border-left: 1px solid white;
  height: 100px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
`

const Inner = styled.div`
@include vendor('transition', (
        'max-height #{_duration(intro)} ease',
        'padding #{_duration(intro)} ease',
        'opacity #{_duration(article)} ease-in-out'
      ));
      @include vendor('transition-delay', '0.25s');
      padding: 3rem 2rem;
      max-height: 40rem;
      overflow: hidden;

      > :last-child {
        margin-bottom: 0;
      }
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

const Intro = styled.div`
  text-align: center;
  background-color: #fff;
  border-top: #666699 25px solid;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: rgba(39, 44, 49, 0.03) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;

  @media (max-width: 768px) {
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
  padding-bottom: 5px;
  background-color: #fff;
  box-shadow: rgba(39, 44, 49, 0.03) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;

`
const Work = styled.div`
  transition: all 0.5s ease;
  :hover {
    opacity: 0.6;
    box-shadow: rgba(39, 44, 49, 0.01) 8px 28px 50px, rgba(39, 44, 49, 0.01) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -2px, 0) scale(1.01);
`

const WorkTitle = styled.div`
  text-transform: uppercase;
  margin-left: 50px;
  padding-top: 25px;
`

const Contact = styled.div`
  padding: 20px 0 20px;
  margin-bottom: 30px;
`

const TemplateWrapper = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: file(relativePath: {eq: "images/dewang-gupta-1168360-unsplash.jpg"}) {
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
        <section className="hero is-fullheight"

        style={{
          backgroundImage: `url(${data.hero.childImageSharp.fluid.src})`
        }}
        css={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',

        }}
          >
          <div className="hero-body has-text-justified" >
            <div className="container">
              <div className="column is-half is-offset-3">

                <Content>
                  <Title className="has-text-weight-light">Mireles Communications</Title>
                  <SubTitle className="has-text-weight-semi-bold"> RELEASE FOR FREE UNDER THE CREATIVE COMMONS LICENSE.</SubTitle>

                </Content>


              </div>





              <div className="container has-text-centered" >


                <div class="tabs is-toggle is-centered" style={{marginRight:"auto", marginLeft:"auto"}}>
                  <ul>
                    <li>
                      <a>
                        <span>Intro</span>
                      </a>
                    </li>
                    <li>
                      <a>
                      <span>Work</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Documents</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>


          <Intro className="container">
            <div className="columns" style={{padding:"20px 30px 5px"}}>
              <div className="column is-full has-text-justified is-size-5 has-text-grey-dark" >
                <p>We give your business an online voice. </p>
                <p>As a professional freelance website development and marketing team, we have a combined 37 years experience and expertise in business, marketing and website development.</p>
                <p>You come to us for expert website design, proven marketing services and competitive rates. You will stay for our second-to-none commitment to you as our client.</p>
                <a className=" button is-primary" href="mailto:mirelescommunications@gmail.com" aria-label="Mireles Communications" >Contact Us</a>
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
          <Feature className="container has-text-centered">
            <WorkTitle className="title has-text-left has-text-grey">Work Examples</WorkTitle>
            <hr/>
            <div className="columns">
              <Work className="column "><a href="https://golivewell.com" aria-label="Go Live Well" target="_blank" rel="noopener noreferrer"><Img fluid={data.golivewell.childImageSharp.fluid} /></a></Work>
              <Work className="column "><a href="https://centurycustomcoach.com" aria-label="Century Custom Coach" target="_blank" rel="noopener noreferrer"><Img fluid={data.ccc.childImageSharp.fluid}/></a></Work>
              <Work className="column "><a href="https://theyellowsmokeshop.com" aria-label="The Yellow Smoke Shop" target="_blank" rel="noopener noreferrer"><Img fluid={data.tyss.childImageSharp.fluid}/></a></Work>
            </div>
            <p>Find more examples at<a href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer">MirelesCloud</a></p>
          </Feature>
          <Contact className="container has-background-white">
            <div className="columns">
              <div className="column is-full has-text-centered">
                <a className="button is-primary is-large" href="mailto:mirelescommunications@gmail.com" aria-label="Mireles Communications" >Contact Us</a>
              </div>
            </div>
          </Contact>
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
