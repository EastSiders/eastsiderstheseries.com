import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soundtrack from "../components/soundtrack"

import { Container } from "semantic-ui-react"

const WatchPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSongsJson(filter: { season: { eq: 1 } }) {
        nodes {
          id
          season
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
  `)
  const songs = data.allSongsJson.nodes
  return (
    <Layout>
      <SEO title="Watch" />
      <h1>Watch Season 4</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Container>
        <Soundtrack songs={songs} />
      </Container>
    </Layout>
  )
}

export default WatchPage
