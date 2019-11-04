import React from "react"
//import { Link } from "gatsby"
import { Grid, Placeholder } from "semantic-ui-react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Grid container>
      <Grid.Column computer="12">
        <Grid.Row>
          <Placeholder>
            <Placeholder.Image />
          </Placeholder>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column computer="4">
        <Grid.Row>
          <Placeholder>
            <Placeholder.Image />
          </Placeholder>
        </Grid.Row>
        <Grid.Row>
          <Placeholder>
            <Placeholder.Image />
          </Placeholder>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default IndexPage
