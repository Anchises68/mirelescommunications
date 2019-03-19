import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO =({ title, pathname, description, image }) => (
  <StaticQuery
    query={query}
     render={({
       site: {
         siteMetadata: {
           defaultTitle,
           defaultDescription,
           siteUrl,
           defaultImage,
         }
       }
     }) => {
       const seo = {
         title: title || defaultTitle,
         description: description || defaultDescription,
         image: `${siteUrl}${image || defaultImage}`,
         url: `${siteUrl}${pathname || '/'}`,
       }

       return (
         <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            {seo.url && <meta property="og:url" content={seo.url}/>}
            {seo.title && <meta property="og:title" content={seo.title}/>}
            {seo.description && (
              <meta proptery="og:description" content={seo.description}/>
            )}
            {seo.image && <meta property="og:image" content={seo.image}/>}
          </Helmet>
         </>
       )
     }}
   />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl: url
        defaultDescription: description
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  pathname: null,
  description: null,
  image: null,
}
