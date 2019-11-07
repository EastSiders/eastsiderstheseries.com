import React from "react"
//import { Link } from "gatsby"
import { Grid, Placeholder } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
