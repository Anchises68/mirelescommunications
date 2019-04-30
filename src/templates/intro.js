import React from "react"
import { graphql } from "gatsby"

import TemplateWrapper from "../components/wrapper"

export default function IntroTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <TemplateWrapper>
      <div className="jumbotron" style={{marginTop:"30px"}}>
        <div className="container">
          <h1 className="title is-uppercase has-text-weight-light">{frontmatter.title}</h1>
            <div
              className="blog-post-content has-text-weight-light"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
