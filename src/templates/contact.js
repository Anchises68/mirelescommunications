import React from "react"
import { graphql } from "gatsby"

import Tabs from "../components/tabs"

export default function ContactTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <section>
      <div className="columns" style={{height: "100vw"}}>
        <div className="column is-one-third" style={{
          backgroundImage: `url(${data.image.childImageSharp.fluid.src})`
        }}>
        <Tabs/>

         </div>
        <div className="column is-two-third">
          <div className="jumbotron" style={{marginTop:"50px"}}>
            <div className="container">
              <h1 className="title">{frontmatter.title}</h1>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
         </div>
      </div>
      </div>
    </section>
  )
}

export const contactQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    image: file(relativePath: {eq: "images/aleks-dahlberg-255027-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2048 quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
