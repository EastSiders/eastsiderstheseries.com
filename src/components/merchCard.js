import React from "react"
import { Card, Image } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const numFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const MerchCard = ({ item, ...rest }) => (
  <Card
    as={OutboundLink}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    <Image src={item.thumbnail} alt={item.name} />
    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Card.Description>{numFormat.format(item.price)}</Card.Description>
    </Card.Content>
  </Card>
)

export default MerchCard
