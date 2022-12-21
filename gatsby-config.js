module.exports = {
  siteMetadata: {
    title: 'Stephen Cavender',
    siteUrl: 'https://dev.cavender.io',
    description: 'The personal blog and website of Stephen Cavender',
    image: './images/icon.png',
    keywords: ['React', 'React Native', 'Node'],
    githubUrl: 'https://github.com/stephencavender',
    devUrl: 'https://dev.to/stephencavender',
    linkedInUrl: 'https://linkedin.com/in/stephencavender',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.webp',
      },
    },
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
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
}
