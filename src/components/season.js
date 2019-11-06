import React from "react"
import { Container, Header, Embed, Icon } from "semantic-ui-react"
import Soundtrack from "./soundtrack"
import Press from "./press"
import CastList from "./castlist"

const Season = ({ season, year, imdb, trailer, cast, soundtrack, press }) => {
  return (
    <Container>
      <Header as="h1">
        Season {season} ({year}){" "}
        <a href={imdb}>
          <Icon name="imdb" />
        </a>
      </Header>
      <Embed
        id={trailer.id}
        source={trailer.source}
        autoplay={false}
        defaultActive
      />
      {cast && (
        <>
          <Header as="h2">Cast</Header>
          <CastList cast={cast} />
        </>
      )}
      {soundtrack && (
        <>
          <Header as="h2">Soundtrack</Header>
          <Soundtrack songs={soundtrack} />
        </>
      )}
      {press && (
        <>
          <Header as="h2">Press</Header>
          <Press articles={press} />
        </>
      )}
    </Container>
  )
}

export default Season
