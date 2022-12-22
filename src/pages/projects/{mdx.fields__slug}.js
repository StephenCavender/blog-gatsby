import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, StoreLinks } from '../../components'

const components = {
  StoreLinks,
}

const Project = ({ data: { mdx }, children }) => {
  const featuredImg = getImage(
    mdx.frontmatter.featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  return (
    <MDXProvider components={components}>
      <GatsbyImage alt="featured image" image={featuredImg} className="w-8" />
      <p>{mdx.frontmatter.featuredImage?.caption}</p>
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
      }
    }
  }
`

export default Project

export const Head = ({ data: { mdx } }) => {
  const featuredImg = getImage(
    mdx.frontmatter.featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  return (
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      pathname={mdx.fields.slug}
      image={featuredImg}
      tags={mdx.frontmatter.tags}
    />
  )
}
