import React from "react"
import { Item } from "semantic-ui-react"

const CastList = ({ cast }) => (
  <Item.Group>
    {cast.map(({ id, imdb, name, character }) => {
      return (
        <Item key={id}>
          <Item.Content>
            <Item.Header as="a" href={imdb}>
              {name}
            </Item.Header>
            <Item.Meta>{character}</Item.Meta>
          </Item.Content>
        </Item>
      )
    })}
  </Item.Group>
)

export default CastList
