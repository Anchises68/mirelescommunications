import React from "react"
import { graphql } from "gatsby"

import TemplateWrapper from '../components/wrapper'

export default function AboutTemplate({
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
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }

  }
`
