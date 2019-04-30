import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'

import TemplateWrapper from "../components/wrapper"

const ImageWrapper = styled.div`
  position: "absolute"
  width: 500px;
  height: auto;
  zIndex: 2;
  transition: .5s ease;
  box-shadow: 0 10px 10px -5px ;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-filter: brightness(100%);
  border-radius: 5px;
  }
`
const View = styled.p`
  background-color: rgba(51, 51, 77, 0.5);
  color: white;
  font-size: 16px;
  padding: 4px 16px;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 5px;
`
const Overlay = styled.div`
  transition: .5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  -webkit-transition: all .5s;
   -moz-transition: all .5s;
   -o-transition: all .5s;
   transition: all .5s;
  }
`

const Container = styled.div`
  position: relative;

  &:hover {
    ${ImageWrapper} {
      opacity: 0.6;
      -ms-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -o-transform: scale(1.05);
      transform: scale(1.05);
      -webkit-filter: brightness(50%);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 1s ease;
    }
    ${Overlay} {
      opacity: 1;

    }
  }
`

export default function ProjectsTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(data)
  return (
    <TemplateWrapper>
      <div className="section" style={{marginTop:"50px"}}>
        <div className="container">
          <h1 className="title">{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          <div className="columns">
            <div className="column is-one-third">
              <Container>
                <ImageWrapper className="image imghvr-fade">
                  <Img fluid={frontmatter.projects.example1.image.childImageSharp.fluid}/>
                </ImageWrapper>
                <Overlay>
                  <View>View</View>
                </Overlay>
              </Container>
            </div>
            <div className="column is-one-third">
              <Container>
                <ImageWrapper className="image imghvr-fade">
                  <Img fluid={frontmatter.projects.example2.image.childImageSharp.fluid}/>
                </ImageWrapper>
                <Overlay>
                  <View>View</View>
                </Overlay>
              </Container>
            </div>
            <div className="column is-one-third">
              <Container>
                <ImageWrapper className="image imghvr-fade">
                  <Img fluid={frontmatter.projects.example3.image.childImageSharp.fluid}/>
                </ImageWrapper>
                <Overlay>
                  <View>View</View>
                </Overlay>
              </Container>
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
        projects {
          example1 {
            title
            url
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          example2 {
            title
            url
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          example3 {
            title
            url
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
  }
`
