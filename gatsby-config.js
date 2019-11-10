module.exports = {
  siteMetadata: {
    title: `Eastsiders The Series`,
    description: `Chronicalling infidelity and substance abuse of a gay couple living in Silver Lake, Los Angeles.`,
    author: `@aydrian`,
    email: "eastsiderstv@gmail.com",
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
        name: `Eastsiders The Series`,
        short_name: `Eastsiders`,
        start_url: `/`,
        background_color: `#156592`,
        theme_color: `#156592`,
        display: `minimal-ui`,
        icon: `src/images/eastsiders-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
