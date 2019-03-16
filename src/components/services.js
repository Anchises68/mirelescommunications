import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Services = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          imageHair1: file(relativePath: {eq: "images/home/hair5.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageHair2: file(relativePath: {eq: "images/home/hair3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageHair3: file(relativePath: {eq: "images/home/hair4.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container-fluid bg-light standard-border" >
            <div className="row pt-5">
              <div className="col-lg">
                <h3 className="text-center header-style">Our Services</h3>
                <hr/>
              </div>
            </div>
            <div className="row text-lg-left">
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="d-block mb-4 h-100">
                  <Img fluid={data.imageHair1.childImageSharp.fluid} className="image-filter"/>
                  <h4 className="text-center header-style mt-3">Hair Cut</h4>
                  <hr/>
                  <p className="text-justify p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="d-block mb-4 h-100">
                  <Img fluid={data.imageHair2.childImageSharp.fluid} className="image-filter"/>
                  <h4 className="text-center header-style mt-3">Coloring</h4>
                  <hr/>
                  <p className="text-justify p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="d-block mb-4 h-100">
                  <Img fluid={data.imageHair3.childImageSharp.fluid} className="image-filter"/>
                  <h4 className="text-center header-style mt-3">Skin Care</h4>
                  <hr/>
                  <p className="text-justify p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    />
  </section>

)

export default Services
