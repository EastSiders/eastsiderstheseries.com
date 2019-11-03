import React from "react"
import { List } from "semantic-ui-react"

const Footer = ({ social }) => (
  <footer>
    <List horizontal size="large">
      {social.map(item => {
        return (
          <List.Item as="a" href={item.url} icon={item.name} key={item.name} />
        )
      })}
    </List>
    <br />© {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
