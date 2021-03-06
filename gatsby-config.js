require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Bianca Gonzalez`,
    description: `Hi there, I'm Bianca! I'm a Web Developer who specializes in React. I solve problems & bring ideas to life through tech!`,
    url: `https://bfgonzalez.netlify.app`,
    image: `https://bfgonzalez.netlify.app/static/thumbnail.png`,
    author: `@bfgonzalez`,
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
        image: `src/images/thumbnail.png`,
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Poppins\:400, 800`,
    //       },
    //     ],
    //     display: `block`,
    //   },
    // },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
