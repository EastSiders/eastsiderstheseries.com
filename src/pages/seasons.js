import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Header, List } from "semantic-ui-react"

const SeasonsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSeasonsJson {
        nodes {
          id
          season
          year
        }
      }
    }
  `)
  const seasons = data.allSeasonsJson.nodes
  return (
    <Layout>
      <SEO title="Seasons" />
      <Container>
        <Header as="h1">Watch Season 4</Header>
        <Header as="h3">All Seasons</Header>
        <List horizontal>
          {seasons.map(season => {
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
