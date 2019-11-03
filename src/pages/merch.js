import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <h1>Buy Merch</h1>
      <p>
        Merch available from{" "}
        <a href="https://www.dragqueenmerch.com/collections/eastsiders">
          DRAGQUEENMERCH.COM
        </a>
        .
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ul>
          {merch.map(item => {
            return (
              <li key="item.id">
                <a href="{item.url}">{item.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default MerchPage
