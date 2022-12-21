import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from '@mdx-js/react';
import PrismSyntaxHighlight from '../../components/prism-syntax-highlight';

const components = {
  code: ({ children, className }) => {
    return className ? (
      <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>
    ) : (
      <code>{children}</code>
    )
  }
};

const Post = ({
  data: {
    mdx
  },
  children
}) => {
  let featuredImg = getImage(mdx.frontmatter.featuredImage?.path?.childImageSharp?.gatsbyImageData)
  return (
  <MDXProvider components={components}>
    <GatsbyImage image={featuredImg} className="w-8" />
    <p>{mdx.frontmatter.featuredImage?.caption}</p>
    {children}
  </MDXProvider>
)}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
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
`;

export default Post;
