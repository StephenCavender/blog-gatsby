import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, CodeBlock, Hero } from '../../components'

const components = {
  code: CodeBlock,
}

const Post = ({
  data: {
    mdx: {
      frontmatter: { featuredImage, modifiedDate, date, title },
    },
  },
  children,
}) => {
  const featuredImg = getImage(
    featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  return (
    <MDXProvider components={components}>
      <Hero
        image={featuredImg.images.fallback.src}
        title={title}
        date={modifiedDate || date}
        caption={featuredImage.caption}
        captionUrl={featuredImage.captionUrl}
      />
      {children}
    </MDXProvider>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        dateModified(formatString: "MMMM Do, YYYY")
        featuredImage {
          path {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          caption
          captionUrl
        }
      }
    }
  }
`

export default Post

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
