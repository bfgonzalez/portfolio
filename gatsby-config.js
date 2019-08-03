module.exports = {
  siteMetadata: {
    title: `Bianca Gonzalez`,
    description: `Hi there, I'm Bianca! I'm a self-taught Front-End Web Developer and User Interface Designer from the Philippines who loves solving problems, learning by doing and bringing ideas to life through technology! Currently, I'm an Associate IT Manager 
    at MedGrocer.`,
    author: `@bfgonzalez`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00BCD4`,
        theme_color: `#00BCD4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
