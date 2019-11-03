/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Merch implements Node @dontInfer {
      id: ID!
      name: String!
      price: Float!
      thumbnail: String!
      url: String!
    }
  `)
}
