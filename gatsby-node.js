/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SeasonsJson implements Node {
      soundtrack: [SongsJson] @link(by: "season", from: "season")
      press: [PressJson] @link(by: "season", from: "season")
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
