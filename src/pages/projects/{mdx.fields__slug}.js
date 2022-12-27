import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, StoreLinks, Hero } from '../../components'

const components = {
  StoreLinks,
}

const Project = ({
  data: {
    mdx: {
      frontmatter: { featuredImage, title },
    },
  },
  children,
}) => {
  const featuredImg = getImage(
    featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  return (
    <MDXProvider components={components}>
      <Hero image={featuredImg.images.fallback.src} title={title} />
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
      frontmatter {
        title
        featuredImage {
          path {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`

export default Project

export const Head = ({
  data: {
    mdx: {
      frontmatter: { featuredImage, title, tags },
      excerpt,
      fields: { slug },
    },
  },
}) => {
  const featuredImg = getImage(
    featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  return (
    <SEO
      title={title}
      description={excerpt}
      pathname={slug}
      image={featuredImg}
      tags={tags}
    />
  )
}
