module.exports = {
  siteMetadata: {
    title: `Eastsiders The Series`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@aydrian`,
    email: "eastsiderstv@gmail.com",
    social: [
      { name: "facebook", url: "https://www.facebook.com/EastSidersTheSeries" },
      { name: "twitter", url: "https://twitter.com/eastsidersTV" },
      { name: "instagram", url: "https://instagram.com/eastsiderstv/" },
      { name: "tumblr", url: "https://eastsiderstheseries.tumblr.com/" },
      { name: "patreon", url: "https://www.patreon.com/kitwilliamson" },
    ],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
