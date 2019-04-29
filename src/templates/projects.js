import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


import TemplateWrapper from "../components/wrapper"

export default function ProjectsTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <TemplateWrapper>
      <div className="jumbotron" style={{marginTop:"50px"}}>
        <div className="container">
          <h1 className="title">{frontmatter.title}</h1>
          <h1>what is this</h1>
          <h1 className="title">{frontmatter.projectOne}</h1>
          <h1 className="title">{frontmatter.projects.example1.title}</h1>
          <Img fluid={frontmatter.image.childImageSharp.fluid}/>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          <div className="columns">
            <div className="column">
              <h1>{frontmatter.projects.example1.title}</h1>

            </div>

          </div>
        </div>
      </div>
    </TemplateWrapper>
  )
}

export const projectsQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        projectOne
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        projects {
          example1 {
            title
          }
          example2 {
            title
          }
        }
      }
    }
  }
`
