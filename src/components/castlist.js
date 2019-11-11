import React from "react"
import { Table } from "semantic-ui-react"
import Social from "./social"

const CastList = ({ cast }) => (
  <Table basic="very" compact="very">
    <Table.Body>
      {cast.map(({ id, imdb, name, character, social }) => {
        return (
          <Table.Row key={id}>
            <Table.Cell>{character}</Table.Cell>
            <Table.Cell>
              <a href={imdb}>{name}</a>
            </Table.Cell>
            {social && (
              <Table.Cell>
                <Social social={social} color="blue" size="mini" />
              </Table.Cell>
            )}
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
)

export default CastList
