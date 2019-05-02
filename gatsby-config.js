module.exports = {
  siteMetadata: {
    title: `Mireles Communications`,
    url: `https://www.mirelescommunications.com`,
    description: `Web Development, Design, Marketing Consultant`,
    image: `/images/Molly.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mireles Communications`,
        start_url: `/`,
        theme_color: `#666699`,
        background_color: `#efeff5`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },

        ]
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
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
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
    },
    `gatsby-plugin-offline`
  ]
}
