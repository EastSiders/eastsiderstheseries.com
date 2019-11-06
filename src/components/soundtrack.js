import React from "react"
import { Table, Icon, List } from "semantic-ui-react"

const SongRow = ({ song }) => (
  <Table.Row>
    <Table.Cell>
      <a href={song.artist.url} target="_blank" rel="noopener noreferrer">
        {song.artist.name}
      </a>
    </Table.Cell>
    <Table.Cell>{song.title}</Table.Cell>
    <Table.Cell>
      <List horizontal>
        {song.urls.map(({ type, url }) => {
          return (
            <List.Item
              as="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={type}
            >
              <Icon name={type} title={type} />
            </List.Item>
          )
        })}
      </List>
    </Table.Cell>
  </Table.Row>
)

const Soundtrack = ({ songs }) => {
  return (
    <Table unstackable basic="very">
      <Table.Body>
        {songs.map(song => {
          return <SongRow song={song} key={song.id} />
        })}
      </Table.Body>
    </Table>
  )
}

export default Soundtrack
