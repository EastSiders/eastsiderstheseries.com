import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 30vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: dense;
`

const Item = styled.div`
  background-color: skyblue;
  &:first-child {
    grid-row-end: span 2;
    grid-column-end: span 2;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Item>Something about Season 4</Item>
      <Item>Random Merch Item</Item>
      <Item>Patreon</Item>
    </Wrapper>
  </Layout>
)

export default IndexPage
