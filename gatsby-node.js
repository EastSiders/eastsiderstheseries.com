/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SeasonsJson implements Node {
      soundtrack: [SongsJson] @link(by: "season", from: "season")
      press: [PressJson] @link(by: "season", from: "season")
      cast: [CastJson] @link(by: "appearsIn", from: "season")
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const result = await graphql(`
    query {
      allSeasonsJson(sort: { fields: season }) {
        nodes {
          id
          season
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading seasons", result.errors)
    return
  }

  const seasons = result.data.allSeasonsJson.nodes
  seasons.forEach(season => {
    actions.createPage({
      path: `/seasons/${season.season}`,
      component: require.resolve("./src/templates/season.js"),
      context: {
        seasonId: season.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "../../theme.config$": path.join(
          __dirname,
          "src/semantic/theme.config"
        ),
      },
    },
  })
}
