import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Header, List } from "semantic-ui-react"

const SeasonsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      prevSeasons: allSeasonsJson(
        filter: { featured: { ne: true } }
        sort: { fields: season, order: ASC }
      ) {
        nodes {
          id
          season
          year
        }
      }
      featuredSeason: seasonsJson(featured: { eq: true }) {
        id
        season
        year
        imdb
        stream {
          source
          url
        }
      }
    }
  `)
  const {
    featuredSeason,
    prevSeasons: { nodes: prevSeasons },
  } = data
  return (
    <Layout>
      <SEO title="Seasons" />
      <Container>
        <Header as="h1">Watch Season {featuredSeason.season}</Header>
        <Header as="h2">
          Stream on{" "}
          <a href={featuredSeason.stream[0].url}>
            {featuredSeason.stream[0].source}
          </a>
        </Header>
        <Header as="h3">Previous Seasons</Header>
        <List horizontal>
          {prevSeasons.map(season => {
            return (
              <List.Item
                as={Link}
                to={`seasons/${season.season}/`}
                key={season.id}
              >
                {`Season ${season.season} (${season.year})`}
              </List.Item>
            )
          })}
        </List>
      </Container>
    </Layout>
  )
}

export default SeasonsPage
