module.exports = {
  siteMetadata: {
    title: `Mireles Communications`,
    siteUrl: `https://www.mirelescommunications.com`,
    description: `Mireles Communications Landing Page`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mireles Communications`,
        start_url: `/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
   resolve: `gatsby-source-filesystem`,
   options: {
     name: `images`,
     path: `${__dirname}/src/images/`,

   }
  },
  {
 resolve: `gatsby-source-filesystem`,
 options: {
   name: `gallery`,
   path: `${__dirname}/src/images/gallery`,

  }
 },
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }

  ]
}
