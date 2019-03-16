import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/contact.css'
import { graphql } from 'gatsby'



//import Section from "../components/test"
import Layout from "../components/layout"
import Services from '../components/services'
import Intro from '../components/intro'


import StoreMap from '../components/contact'
import Gallery from '../components/gallery'
import Footer from '../components/footer'
import Top from '../components/top-button'
//import Playground from '../components/playground'


const TemplateWrapper = ({data}) => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />

    {/*<Test imageHair={data.imageHair.childImageSharp}/>*/}

    <Layout>
      <Intro/>
      <Services/>
      <Gallery images={data.imageGallery.edges}/>
      <StoreMap/>
      <Footer/>
    </Layout>
    <Top/>
  </div>
)

export default TemplateWrapper

export const pageQuery = graphql`
  query testQuery {
    imageHair: file(relativePath: {eq: "images/hair9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageGallery: allFile(filter: {absolutePath: {regex: "\/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
