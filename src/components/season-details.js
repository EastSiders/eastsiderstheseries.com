import React from "react"
import styled from "styled-components"
import { Embed } from "semantic-ui-react"

const Grid = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "trailer trailer synopsis"
    "trailer trailer synopsis"
    "trailer trailer watch";

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "trailer"
      "synopsis"
      "watch";
  }
`

const Trailer = styled.div`
  grid-area: trailer;
`

const Synopsis = styled.p`
  grid-area: synopsis;
  white-space: pre-wrap;
`

const Watch = styled.div`
  grid-area: watch;
`

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

const Details = ({ season, trailer, synopsis, stream, purchase }) => (
  <Grid>
    {trailer && (
      <Trailer>
        <Embed
          id={trailer.id}
          source={trailer.source}
          placeholder={`/images/season-${season}-cover.png`}
        />
      </Trailer>
    )}
    <Synopsis>{synopsis}</Synopsis>
    <Watch>
      <h3>Watch</h3>
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
    </Watch>
  </Grid>
)

export default Details
