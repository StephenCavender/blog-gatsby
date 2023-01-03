import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, StoreLinks } from '../components'

const components = {
  StoreLinks,
}

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { header },
    },
  },
  children,
}) => {
  const headerImg = getImage(header?.childImageSharp?.gatsbyImageData)

  return (
    <MDXProvider components={components}>
      <GatsbyImage image={headerImg} className="rounded-md" />
      {children}
    </MDXProvider>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      excerpt
      frontmatter {
        title
        tags
        teaser {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        header {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`

export default ProjectTemplate

export const Head = ({
  data: {
    mdx: {
      frontmatter: { teaser, title, tags },
      excerpt,
      fields: { slug },
    },
  },
}) => {
  const img = getImage(teaser?.childImageSharp?.gatsbyImageData)

  return (
    <SEO
      title={title}
      description={excerpt}
      pathname={`/projects${slug}`}
      image={img}
      tags={tags}
    />
  )
}
