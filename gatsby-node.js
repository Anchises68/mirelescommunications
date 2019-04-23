const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const introPageTemplate = path.resolve(`src/templates/intro.js`)
  const projectsPageTemplate = path.resolve('src/templates/projects.js')
  const aboutPageTemplate = path.resolve('src/templates/about.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: introPageTemplate,
        context: {},
      })
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectsPageTemplate,
        context: {},
      })
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutPageTemplate,
        context: {},
      })
    })
  })
}
