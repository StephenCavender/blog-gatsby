import React from 'react'
import { graphql } from 'gatsby'
import { SEO, Link } from '../components'

const TagTemplate = ({ pageContext, data }) => {
  const { edges } = data.allMdx

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Tag: {pageContext.tag}</h2>
      <ul className="list-disc columns-2">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug} className="my-2">
              <Link to={`/posts${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link className="float-right" to="/tags">
        More Tags...
      </Link>
    </>
  )
}

export const query = graphql`
  query ($tag: String) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TagTemplate

export const Head = () => <SEO title="Tags" />
