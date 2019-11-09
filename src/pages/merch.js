import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { Link } from "gatsby"
import { Card, Image } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const numFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const MerchPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMerchJson {
        nodes {
          id
          name
          price
          thumbnail
          url
        }
      }
    }
  `)

  const merch = data.allMerchJson.nodes

  return (
    <Layout>
      <SEO title="Merch" />
      <h1>The Merch Table</h1>
      <p>
        Merch available from{" "}
        <a href="https://www.dragqueenmerch.com/collections/eastsiders">
          DRAGQUEENMERCH.COM
        </a>
        .
      </p>
      <Card.Group centered>
        {merch.map(item => {
          return (
            <Card key={item.id} href={item.url} target="_blank">
              <Image src={item.thumbnail} />
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>
                  {numFormat.format(item.price)}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </Layout>
  )
}

export default MerchPage
