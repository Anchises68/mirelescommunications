import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'

import TemplateWrapper from "../components/wrapper"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Icon = styled.li`
  margin: 0.5rem
`

export default function IntroTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <TemplateWrapper>
      <div className="section">
        <div className="container">
          <h1 className="title is-uppercase has-text-weight-light">{frontmatter.title}</h1>
            <div
              className="blog-post-content has-text-weight-light"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
       </div>
       <div className="section">
         <div className="container">
           <div className="columns">
             <div className="column is-half">
               <div className="card">
                 <div className="card-image" >
                   <figure className="image" style={{margin:"0"}}>
                     <Img fluid={frontmatter.alex.image.childImageSharp.fluid} />
                   </figure>
                 </div>

                 <div className="card-content">
                   <div className="media">
                     <div className="media-content">
                       <p className="title is-4">{frontmatter.alex.name}</p>
                       <p className="subtitle is-6">{frontmatter.alex.title}</p>

                     </div>
                   </div>
                   <div className="card-footer">
                     <div className="card-footer-item">
                       <nav className="content">
                         <ul>
                           <Icon className="icon">
                             <a href={frontmatter.alex.url} aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas fa-lg has-text-grey-dark "/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.alex.email} aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.alex.linkedin} aria-label="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.alex.github} aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.alex.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                         </ul>
                       </nav>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="column is-half">
               <div className="card">
                 <div className="card-image">
                   <figure className="image" style={{margin:"0"}}>
                     <Img fluid={frontmatter.molly.image.childImageSharp.fluid}/>
                   </figure>
                 </div>
                 <div className="card-content">
                   <div className="media">
                     <div className="media-content">
                       <p className="title is-4">{frontmatter.molly.name}</p>
                       <p className="subtitle is-6">{frontmatter.molly.title}</p>
                     </div>
                   </div>
                   <div className="card-footer">
                     <div className="card-footer-item">
                       <nav className="content">
                         <ul>
                           <Icon className="icon">
                             <a href={frontmatter.molly.url} aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas fa-lg has-text-grey-dark "/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.molly.email} aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                           <Icon className="icon">
                             <a href={frontmatter.molly.linkedin} aria-label="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-lg has-text-grey-dark"/></a>
                           </Icon>
                         </ul>
                       </nav>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </TemplateWrapper>
  )
}

export const introQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        molly {
          name
          title
          url
          linkedin
          email
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        alex {
          name
          title
          url
          git
          linkedin
          email
          twitter
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
