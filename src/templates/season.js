import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Season from "../components/season"

export const query = graphql`
  query($seasonId: String!) {
    seasonsJson(id: { eq: $seasonId }) {
      id
      season
      imdb
      trailer {
        id
        source
      }
      year
      soundtrack {
        id
        title
        artist {
          name
          url
        }
        urls {
          type
          url
        }
      }
    }
  }
`
const SeasonTemplate = ({ data: { seasonsJson: season } }) => (
  <Layout>
    <Season {...season} />
  </Layout>
)

export default SeasonTemplate
