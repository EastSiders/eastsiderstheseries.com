import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { Header, Embed, Responsive } from "semantic-ui-react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MerchCard from "../components/merchCard"
import Patreon from "../components/patreon"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "featured featured featured side1"
    "featured featured featured side2";

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "featured featured"
      "featured featured"
      "side1    side2";
  }
`

const Featured = styled.div`
  grid-area: featured;
`

const Side1 = styled.div`
  grid-area: side1;
`

const Side2 = styled.div`
  grid-area: side2;
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
      featuredSeason: seasonsJson(featured: { eq: true }) {
        id
        season
        year
        synopsis
        imdb
        trailer {
          id
          source
        }
        stream {
          source
          url
        }
      }
    }
  `)
  const { featuredSeason } = data
  const randomMerch = () => {
    const merch = data.allMerchJson.nodes
    return merch[Math.floor(Math.random() * merch.length)]
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Featured>
          <Header>Season {featuredSeason.season}</Header>
          <Embed
            id={featuredSeason.trailer.id}
            source={featuredSeason.trailer.source}
            placeholder={`/images/season-${featuredSeason.season}-cover.png`}
            onClick={e => {
              trackCustomEvent({
                // string - required - The object that was interacted with (e.g.video)
                category: "Trailer",
                // string - required - Type of interaction (e.g. 'play')
                action: "Play",
                // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                label: `Season ${featuredSeason.season}`,
              })
            }}
          />
          <p>{featuredSeason.synopsis}</p>
        </Featured>
        <Side1>
          <Header>Merch</Header>
          <MerchCard item={randomMerch()} fluid />
          <p>
            Check out the <Link to="/merch/">Merch Table</Link>.
          </p>
        </Side1>
        <Side2>
          <Header>Patreon</Header>
          <Patreon />
        </Side2>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
