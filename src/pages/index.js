import React from "react"
//import { Link } from "gatsby"
import { Container, Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Countdown from "../components/countdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container textAlign="center">
      <Header as="h2">
        The 4th and Final Season Available to Steam on Netflix December 1.{" "}
      </Header>
      <Countdown date="12/01/2019" />
    </Container>
  </Layout>
)

export default IndexPage
