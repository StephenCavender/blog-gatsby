import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { SEO, CodeBlock } from '../../components'
import Calendar from '../../svg/calendar.svg'

const components = {
  code: CodeBlock,
}

const Post = ({ data: { mdx }, children }) => {
  const featuredImg = getImage(
    mdx.frontmatter.featuredImage?.path?.childImageSharp?.gatsbyImageData
  )

  const date = mdx.frontmatter.modifiedDate || mdx.frontmatter.date

  return (
    <MDXProvider components={components}>
      <div
        className="relative h-[220px] bg-cover bg-center bg-no-repeat p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${featuredImg.images.fallback.src})`,
        }}
      >
        <h1 className="!text-2xl">{mdx.frontmatter.title}</h1>
        <div className="flex items-center text-sm">
          <Calendar height="0.875rem" />
          <time>{date}</time>
        </div>
        {/* TOOD: separate caption from link, link entire span here */}
        <span className="absolute bottom-0 right-0 my-0 mx-auto rounded-tl-lg bg-black py-0.5 px-1 text-xs opacity-50">
          test
        </span>
      </div>

      <GatsbyImage alt="featured image" image={featuredImg} className="w-8" />
      <p>{mdx.frontmatter.featuredImage?.caption}</p>
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
        }
      }
    }
  }
`

export default Post

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
