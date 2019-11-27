import React from "react"
import { Item } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Press = ({ articles }) => (
  <Item.Group>
    {articles.map(article => {
      return (
        <Item key={article.id}>
          <Item.Content>
            <Item.Header
              as={OutboundLink}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </Item.Header>
            <Item.Meta>
              {article.source},{" "}
              <time datetime={article.date}>{article.formattedDate}</time>
            </Item.Meta>
          </Item.Content>
        </Item>
      )
    })}
  </Item.Group>
)

export default Press
