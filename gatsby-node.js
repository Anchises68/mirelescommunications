const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const introPageTemplate = path.resolve(`src/templates/intro.js`)
  const projectsPageTemplate = path.resolve('src/templates/projects.js')
  const contactPageTemplate = path.resolve('src/templates/contact.js')
  const successPageTemplate = path.resolve('src/templates/success.js')

  return graphql(`
    {
      intro: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/intro/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/projects/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      contact: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/contact/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      success: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/success/*md"}}
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

    result.data.intro.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: introPageTemplate,
        context: {},
      })
    })

    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectsPageTemplate,
        context: {},
      })
    })

    result.data.contact.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: contactPageTemplate,
        context: {},
      })
    })

    result.data.success.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: successPageTemplate,
        context: {},
      })
    })
  })
}
