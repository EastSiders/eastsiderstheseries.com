import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Season from "../components/season"
import { Breadcrumb } from "semantic-ui-react"

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
      synopsis
      cast {
        id
        name
        character
        imdb
      }
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
      press {
        id
        title
        source
        date(formatString: "MMMM DD, YYYY")
        url
      }
    }
  }
`
const SeasonTemplate = ({ data: { seasonsJson: season } }) => (
  <Layout>
    <Breadcrumb>
      <Breadcrumb.Section as={Link} to="/seasons" link>
        Seasons
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>
        {season.season} ({season.year})
      </Breadcrumb.Section>
    </Breadcrumb>
    <Season {...season} />
  </Layout>
)

export default SeasonTemplate
