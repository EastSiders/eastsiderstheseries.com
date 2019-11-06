import React from "react"
import { Container, Header, Embed, Icon } from "semantic-ui-react"
import Soundtrack from "./soundtrack"

const Season = ({ season, year, imdb, trailer, soundtrack }) => {
  return (
    <Container>
      <Header as="h1">
        Season {season} ({year}){" "}
        <a href={imdb}>
          <Icon name="imdb" />
        </a>
      </Header>
      <Embed id={trailer.id} source={trailer.source} defaultActive />
      {soundtrack && (
        <>
          <Header as="h2">Soundtrack</Header>
          <Soundtrack songs={soundtrack} />
        </>
      )}
    </Container>
  )
}

export default Season
