/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
 
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        enableIdentityWidget: false,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        enableIdentityWidget: false,
        path: `${__dirname}/jobs`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
