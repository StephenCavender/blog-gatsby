const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const redirects = require('./redirects.json')

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode }),
    })
  }
}

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
  reporter,
}) => {
  redirects.forEach(({ fromPath, toPath }) =>
    createRedirect({
      fromPath,
      toPath,
    })
  )

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            type
          }
          internal {
            contentFilePath
          }
        }
      }
      tags: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Posts and Projects
  result.data.allMdx.nodes.forEach((node) => {
    const {
      id,
      fields: { slug },
      frontmatter: { type },
    } = node

    const template = path.resolve(`./src/templates/${type}.js`)

    createPage({
      path: path.join(`${type}s`, slug),
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id,
        slug,
      },
    })
  })

  // Tags
  result.data.tags.group.forEach((group) => {
    const template = path.resolve('./src/templates/tag.js')

    createPage({
      path: path.join('tags', group.fieldValue),
      component: template,
      context: {
        tag: group.fieldValue,
      },
    })
  })
}
