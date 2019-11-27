import React from "react"
import { Table } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Social from "./social"

const CastList = ({ cast }) => (
  <Table basic="very" compact="very">
    <Table.Body>
      {cast.map(({ id, imdb, name, character, social }) => {
        return (
          <Table.Row key={id}>
            <Table.Cell>{character}</Table.Cell>
            <Table.Cell>
              <OutboundLink href={imdb} target="_blank" rel="noopener">
                {name}
              </OutboundLink>
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
