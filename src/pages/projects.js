import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Card from '../components/card'

const Projects = ({ data }) => {
  return (
    <>
      <div>
        <h2 className="mb-6 text-4xl">Projects</h2>
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
            ({ id, excerpt, frontmatter, fields: { slug } }) => (
              <li key={id}>
                <Card
                  link={`/projects${slug}`}
                  title={frontmatter.title}
                  thumbnail={frontmatter.featuredImage?.path?.childImageSharp}
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

export default Projects

export const Head = () => <SEO />

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { project: { eq: true } } }) {
      nodes {
        id
        excerpt(pruneLength: 100)
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
            caption
          }
        }
      }
    }
  }
`
