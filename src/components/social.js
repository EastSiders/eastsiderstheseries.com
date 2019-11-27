import React from "react"
import PropTypes from "prop-types"
import { List, Icon } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Social = ({ social, color, size }) => {
  return (
    <List horizontal inverted size={size}>
      {social.map(({ name, url, icon }) => {
        return (
          <List.Item
            as={OutboundLink}
            href={url}
            target="_blank"
            rel="noopener"
            key={name}
          >
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
