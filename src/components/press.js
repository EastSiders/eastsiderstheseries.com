import React from "react"
import { Item } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Press = ({ articles }) => {
  return (
    <Item.Group>
      {articles.map(article => {
        return (
          <Item key={article.id}>
            <Item.Content>
              <Item.Header as={OutboundLink} href={article.url}>
                {article.title}
              </Item.Header>
              <Item.Meta>
                {article.source}, {article.date}
              </Item.Meta>
            </Item.Content>
          </Item>
        )
      })}
    </Item.Group>
  )
}

export default Press
