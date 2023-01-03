import React from 'react'
import { Link, graphql } from 'gatsby'
import { SEO } from '../components/seo'

const compare = (a, b) => b.totalCount - a.totalCount

const Tags = ({ data }) => {
  const groups = data.allMdx.group.sort(compare)

  return (
    <>
      <h1>Tags</h1>
      <div className="">
        <ul className="columns-3">
          {groups.map((group) => (
            <li key={group.tag}>
              <Link className="text-xl" to={group.tag}>
                {group.tag} ({group.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
