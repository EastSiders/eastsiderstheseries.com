import React from "react"
import PropTypes from "prop-types"
import { List, Icon } from "semantic-ui-react"

const Social = ({ social, color, size }) => {
  return (
    <List horizontal inverted size={size}>
      {social.map(({ name, url, icon }) => {
        return (
          <List.Item as="a" href={url} key={name}>
            <Icon name={icon || name} size="large" title={name} color={color} />
          </List.Item>
        )
      })}
    </List>
  )
}

Social.propTypes = {
  social: PropTypes.array.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Social
