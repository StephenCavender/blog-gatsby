const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
  actions: { createPage },
  reporter,
}) => {
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
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  result.data.allMdx.nodes.forEach((node) => {
    const {
      id,
      fields: { slug },
      frontmatter: { type, title },
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
}
