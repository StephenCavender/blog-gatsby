import React from 'react';
import { graphql } from 'gatsby';

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
  },
  children
}) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default Post;
