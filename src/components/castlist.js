import React from "react"
import { Item } from "semantic-ui-react"

const CastList = ({ cast }) => (
  <Item.Group>
    {cast.map(actor => {
      return (
        <Item key={actor.id}>
          <Item.Content>
            <Item.Header as="a" href={actor.imdb}>
              {actor.name}
            </Item.Header>
            <Item.Meta>{actor.character}</Item.Meta>
          </Item.Content>
        </Item>
      )
    })}
  </Item.Group>
)

export default CastList
