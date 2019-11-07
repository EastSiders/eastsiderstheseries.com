import React from "react"
import { Container, Header, Embed, Icon } from "semantic-ui-react"
import Soundtrack from "./soundtrack"
import Press from "./press"
import CastList from "./castlist"

const ItemList = ({ name, items }) => (
  <>
    {name}:{" "}
    {items.map(item => {
      return (
        <span key={item.source}>
          <a href={item.url}>{item.source}</a>{" "}
        </span>
      )
    })}
  </>
)

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
    <Container>
      <Header as="h1">
        Season {season} ({year}){" "}
        <a href={imdb}>
          <Icon name="imdb" />
        </a>
      </Header>
      {stream && (
        <p>
          <ItemList name="Stream" items={stream} />
        </p>
      )}
      {purchase && (
        <p>
          Purchase:
          <br />
          {purchase.digital && (
            <ItemList name="Digital" items={purchase.digital} />
          )}
          {purchase.dvd && (
            <>
              <br />
              <ItemList name="DVD" items={purchase.dvd} />
            </>
          )}
        </p>
      )}
      <p style={{ whiteSpace: "pre-wrap" }}>{synopsis}</p>
      {trailer && (
        <Embed
          id={trailer.id}
          source={trailer.source}
          autoplay={false}
          defaultActive
        />
      )}
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
