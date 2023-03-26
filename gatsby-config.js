/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: '오늘의 쌤소',
    author: 'Sam So',
    description: '오늘의 쌤소',
    image: `/thumbnail.png`,
    siteUrl: `https://samso.today`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png'
      }
    }
  ],
}
