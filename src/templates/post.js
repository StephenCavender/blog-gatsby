import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, CodeBlock, Hero, Link } from '../components'

const components = {
  code: CodeBlock,
}

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: { featuredImage, modifiedDate, date, title, tags },
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
        image={featuredImg?.images?.fallback?.src}
        title={title}
        date={modifiedDate || date}
        creator={featuredImage.creator}
      />
      <div className="my-2" />
      <div className="flex items-center justify-center">
        {tags
          .map((tag) => <Link to={`/tags/${tag}`}>{tag}</Link>)
          .reduce((prev, curr) => [prev, <span>,&nbsp;</span>, curr])}
      </div>
      <div className="my-2" />
      <div className="prose prose-sm sm:prose">{children}</div>
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
        tags
        featuredImage {
          path {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          creator {
            name
            url
          }
        }
      }
    }
  }
`

export default PostTemplate

export const Head = ({
  data: {
    mdx: {
      frontmatter: { featuredImage, title, tags },
      excerpt,
      fields: { slug },
    },
  },
}) => {
  const img = getImage(featuredImage?.path?.childImageSharp?.gatsbyImageData)

  return (
    <SEO
      title={title}
      description={excerpt}
      pathname={`/posts${slug}`}
      image={img}
      tags={tags}
    />
  )
}
