import React from "react"
import { List, Icon } from "semantic-ui-react"
import styled from "styled-components"

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  svg {
    color: white;
    width: 1em;
    height: 1em;
    padding: 1.5em;
  }
`

const Social = ({ social }) => {
  return (
    <IconWrapper>
      <List horizontal inverted>
        {social.map(({ name, url, icon }) => {
          return (
            <List.Item as="a" href={url} key={name}>
              <Icon name={icon} size="large" title={name} />
            </List.Item>
          )
        })}
      </List>
    </IconWrapper>
  )
}

export default Social
