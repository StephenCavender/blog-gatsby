import React from 'react'
import { graphql } from 'gatsby'
import { SEO, Link } from '../components'

const compare = (a, b) => b.totalCount - a.totalCount

const Tags = ({ data }) => {
  const groups = data.allMdx.group.sort(compare)

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Tags</h2>
      <ul className="list-disc columns-3 space-y-2">
        {groups.map((group) => (
          <li key={group.tag}>
            <Link className="text-xl" to={group.tag}>
              {group.tag} ({group.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  query {
    allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

export default Tags

export const Head = () => <SEO title="Tags" />
