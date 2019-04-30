import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import TemplateWrapper from '../components/wrapper'
import Social from '../components/social'

export default function AboutTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <TemplateWrapper>
      <div className="jumbotron" style={{marginTop:"50px"}}>
        <div className="container">
          <h1 className="title is-uppercase has-text-weight-light">{frontmatter.title}</h1>

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
                     <Social social={data.markdownRemark.frontmatter.alex.email}/>
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
                     <Social />
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

export const aboutQuery = graphql`
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
