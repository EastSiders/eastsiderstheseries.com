import React from "react"
import { Card, Image } from "semantic-ui-react"

const numFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const MerchCard = ({ item, ...rest }) => (
  <Card href={item.url} target="_blank" {...rest}>
    <Image src={item.thumbnail} />
    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Card.Description>{numFormat.format(item.price)}</Card.Description>
    </Card.Content>
  </Card>
)

export default MerchCard
