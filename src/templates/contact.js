import React from "react"
import { graphql } from "gatsby"

import TemplateWrapper from '../components/wrapper'
import Contact from '../components/contact'

export default function ContactTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <TemplateWrapper>
      <div className="jumbotron" style={{marginTop:"50px"}}>
        <div className="container">
          <h1 className="title is-uppercase has-text-weight-light">{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Contact/>
            </div>
          </div>

        </div>
      </div>
    </TemplateWrapper>
  )
}

export const contactQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
