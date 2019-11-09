import React from "react"
import { graphql, useStaticQuery /*, Link*/ } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MerchCard from "../components/merchCard"
import { Header, Embed } from "semantic-ui-react"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 30vh;
  grid-template-columns: 2fr 2fr 1fr;
  grid-auto-flow: dense;
`

const Item = styled.div`
  &:first-child {
    grid-row-end: span 2;
    grid-column-end: span 2;
  }
`

const IndexPage = () => {
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
  const randomMerch = () => {
    const merch = data.allMerchJson.nodes
    return merch[Math.floor(Math.random() * merch.length)]
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Item>
          <Header>Season 4</Header>
          <Embed
            id="Q1XjIBjY-3E"
            source="youtube"
            autoplay={false}
            defaultActive
          />
        </Item>
        <Item>
          <Header>Merch</Header>
          <MerchCard item={randomMerch()} fluid />
        </Item>
        <Item>
          <Header>Patreon</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            nisl suscipit adipiscing bibendum. Faucibus pulvinar elementum
            integer enim neque volutpat ac.
          </p>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
