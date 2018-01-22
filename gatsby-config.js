module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
              'gatsby-plugin-react-helmet',
              {
                resolve: 'gatsby-plugin-typography',
                options: {
                  pathToConfigModule: 'src/utils/typography.js'
                }
              },
              {
                resolve: 'gatsby-source-filesystem',
                options: {
                  path: `${__dirname}/src/pages`,
                  name: 'pages',
                }
              },
              'gatsby-transformer-remark'
           ],
};
