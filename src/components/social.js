import React from "react"
import { List, Icon } from "semantic-ui-react"

const Social = ({ social }) => {
  return (
    <List horizontal inverted>
      {social.map(({ name, url, icon }) => {
        return (
          <List.Item as="a" href={url} key={name}>
            <Icon name={icon} size="large" title={name} />
          </List.Item>
        )
      })}
    </List>
  )
}

export default Social
