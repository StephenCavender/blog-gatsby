import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Card from '../components/card'

const Posts = ({ data }) => {
  return (
    <>
      <div>
        <h2 className="mb-6 text-4xl">Posts</h2>
        {/* posts by year?  */}
        {/* post tags? */}
        <ul
          className="mb-4"
          style={{
            listStyleType: 'none',
            padding: 0,
            display: 'grid',
            gap: '2rem',
          }}
        >
          {data.allMdx.nodes.map(
            ({
              id,
              excerpt,
              frontmatter: { title, featuredImage, dateModified, date },
              fields: { slug },
            }) => (
              <li key={id}>
                <Card
                  link={`/posts${slug}`}
                  title={title}
                  thumbnail={featuredImage?.path?.childImageSharp}
                  date={dateModified || date}
                  excerpt={excerpt}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default Posts

export const Head = () => <SEO />

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          dateModified(formatString: "MMMM DD, YYYY")
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
  }
`
