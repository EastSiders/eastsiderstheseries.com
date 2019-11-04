module.exports = {
  siteMetadata: {
    title: `Eastsiders The Series`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@aydrian`,
    email: "eastsiderstv@gmail.com",
    social: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/EastSidersTheSeries",
        icon: "facebook",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/eastsidersTV",
        icon: "twitter",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/eastsiderstv/",
        icon: "instagram",
      },
      {
        name: "Tumblr",
        url: "https://eastsiderstheseries.tumblr.com/",
        icon: "tumblr",
      },
      {
        name: "Patreon",
        url: "https://www.patreon.com/kitwilliamson",
        icon: "patreon",
      },
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
        path: `${__dirname}/src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
