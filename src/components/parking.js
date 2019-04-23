import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


const Parking = () => (
  <div>
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
  </div>
)
