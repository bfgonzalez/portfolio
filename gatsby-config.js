module.exports = {
  siteMetadata: {
    title: `Bianca Gonzalez`,
    description: `Hi there, I'm Bianca! I'm a self-taught Web Developer and User Interface Designer.`,
    url: `https://bfgonzalez.netlify.app`,
    image: `https://lh3.googleusercontent.com/NQ0KKSq6X7x2MT2QpY5f71YT8dJBMHj92x6Ext4Yvv6Y6ug5mW9MzemZcKn_L3QZR8HZoS-pzSb1KU5KQVcMgHdnnvUa0ujPtfMDFlw02S2WQnwtcMLkwoOV0vyIa6uXp_yLgOCSkw=w2400`,
    author: `@bfgonzalez`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bianca Gonzalez - Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#003366`,
        theme_color: `#003366`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        image: `src/images/thumbnail.png`
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
