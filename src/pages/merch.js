import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { Link } from "gatsby"
import { Card } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MerchCard from "../components/merchCard"

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
        <OutboundLink
          href="https://www.dragqueenmerch.com/collections/eastsiders"
          target="_blank"
          rel="noopener"
        >
          DRAGQUEENMERCH.COM
        </OutboundLink>
        .
      </p>
      <Card.Group centered>
        {merch.map(item => {
          return <MerchCard item={item} key={item.id} />
        })}
      </Card.Group>
    </Layout>
  )
}

export default MerchPage
