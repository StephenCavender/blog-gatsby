/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dev.cavender.io`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [{
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
          }
        }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "posts",
        path: "./content/posts"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images"
      },
    }
  ]
};
