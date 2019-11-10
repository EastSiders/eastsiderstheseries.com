import React from "react"
import { Header, Icon } from "semantic-ui-react"
import styled from "styled-components"

import Details from "./season-details"
import Soundtrack from "./soundtrack"
import Press from "./press"
import CastList from "./castlist"

const Section = styled.section`
  margin-top: 1rem;
`

const Season = ({
  season,
  year,
  imdb,
  trailer,
  stream,
  purchase,
  cast,
  soundtrack,
  press,
  synopsis,
}) => {
  return (
    <>
      <Header as="h1">
        Season {season} ({year}){" "}
        <a href={imdb}>
          <Icon name="imdb" />
        </a>
      </Header>
      <Details
        season={season}
        synopsis={synopsis}
        trailer={trailer}
        stream={stream}
        purchase={purchase}
      />
      {cast && (
        <Section>
          <Header as="h2">Cast</Header>
          <CastList cast={cast} />
        </Section>
      )}
      {soundtrack && (
        <Section>
          <Header as="h2">Soundtrack</Header>
          <Soundtrack songs={soundtrack} />
        </Section>
      )}
      {press && (
        <Section>
          <Header as="h2">Press</Header>
          <Press articles={press} />
        </Section>
      )}
    </>
  )
}

export default Season
