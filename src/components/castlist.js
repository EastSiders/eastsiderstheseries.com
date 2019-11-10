import React from "react"
import { Item } from "semantic-ui-react"
import Social from "./social"

const CastList = ({ cast }) => (
  <Item.Group>
    {cast.map(({ id, imdb, name, character, social }) => {
      return (
        <Item key={id}>
          <Item.Content>
            <Item.Header as="a" href={imdb}>
              {name}
            </Item.Header>
            <Item.Meta>{character}</Item.Meta>
            {social && (
              <Item.Description>
                <Social social={social} color="blue" size="mini" />
              </Item.Description>
            )}
          </Item.Content>
        </Item>
      )
    })}
  </Item.Group>
)

export default CastList
