import React from "react"
//import { Link } from "gatsby"
import { Container, Header } from "semantic-ui-react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Countdown from "../components/countdown"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 30vh;
  grid-auto-flow: column;
  grid-template-columns: 2fr 1fr;
`

const Item = styled.div`
  background-color: skyblue;
  &:first-child {
    grid-row-end: span 2;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header as="h2" textAlign="center">
      Watch Season 4 on Netflix December 1
    </Header>
    <Container textAlign="center">
      <Countdown date="12/01/2019" />
    </Container>

    <Wrapper>
      <Item>Something about Season 4</Item>
      <Item>Random Merch Item</Item>
      <Item>Patreon</Item>
    </Wrapper>
  </Layout>
)

export default IndexPage
