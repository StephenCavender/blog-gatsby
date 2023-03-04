const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  siteMetadata: {
    title: 'Stephen Cavender',
    siteUrl: 'https://dev.cavender.io',
    description: 'The personal blog and website of Stephen Cavender',
    image: './images/icon.png',
    keywords: ['React', 'React Native', 'Node'],
    githubUrl: 'https://github.com/stephencavender',
    linkedInUrl: 'https://linkedin.com/in/stephencavender',
    biolinkUrl: 'https://bio.cavender.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Stephen Cavender',
        short_name: 'Stephen Cavender',
        start_url: '/',
        background_color: '#282a36',
        theme_color: '#ffb86c',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icons: [
          {
            src: 'src/images/icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'content/posts',
        ignore: isDev ? [] : ['**/drafts'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: 'content/projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/posts${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/posts${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.body }],
                })
              ),
            query: `
              {
                allMdx(
                  sort: { frontmatter: { date: DESC } }
                  filter: { frontmatter: { type: { eq: "post" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: "Steve's Blog RSS Feed",
          },
        ],
      },
    },
  ],
}
