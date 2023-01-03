import React from 'react'
import { graphql, Link } from 'gatsby'
import { SEO } from '../components'

const TagTemplate = ({ pageContext, data }) => {
  const { edges } = data.allMdx

  return (
    <>
      <h1>Tag: {pageContext.tag}</h1>
      <ul className="columns-2">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
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
