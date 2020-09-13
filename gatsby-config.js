module.exports = {
  siteMetadata: {
    title: `Bianca Gonzalez`,
    description: `Hi there, I'm Bianca! I'm a Web Developer who specializes in React. I solve problems & bring ideas to life through tech!`,
    url: `https://bfgonzalez.netlify.app`,
    image: `https://raw.githubusercontent.com/bfgonzalez/portfolio/master/public/static/thumbnail.png`,
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
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `800`],
          },
        ],
      },
    },
  ],
}
