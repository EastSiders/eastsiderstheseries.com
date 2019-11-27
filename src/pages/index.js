import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Header,
  Embed,
  Responsive,
  Button,
  Icon,
  Container,
} from "semantic-ui-react"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"

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
          <Header as="h1">
            Watch the Season {featuredSeason.season} Trailer
          </Header>
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
          <Container style={{ paddingTop: "0.5em" }}>
            <Button
              as="a"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Watch the trailer for Eastsiders Season 4 available to stream on @Netflix beginning December 1."
              )}&url=${encodeURIComponent(
                "https://www.youtube.com/watch?v=hdoeDtY6XQc"
              )}&via=${"eastsiderstv"}`}
              target="_blank"
              rel="noopener"
              onClick={e => {
                trackCustomEvent({
                  // string - required - The object that was interacted with (e.g.video)
                  category: "Trailer",
                  // string - required - Type of interaction (e.g. 'play')
                  action: "Share on Twitter",
                  // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                  label: `Season ${featuredSeason.season}`,
                })
              }}
              color="twitter"
              size="tiny"
            >
              <Icon name="twitter" /> Share on Twitter
            </Button>
            <Button
              as="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                "https://www.facebook.com/EastSidersTheSeries/videos/1168035630252433/"
              )}`}
              target="_blank"
              rel="noopener"
              onClick={e => {
                trackCustomEvent({
                  // string - required - The object that was interacted with (e.g.video)
                  category: "Trailer",
                  // string - required - Type of interaction (e.g. 'play')
                  action: "Share on Facebook",
                  // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                  label: `Season ${featuredSeason.season}`,
                })
              }}
              color="facebook"
              size="tiny"
            >
              <Icon name="facebook" /> Share on Facebook
            </Button>
            <Button
              as="a"
              href="https://www.youtube.com/watch?v=hdoeDtY6XQc"
              target="_blank"
              rel="noopener"
              onClick={e => {
                trackCustomEvent({
                  // string - required - The object that was interacted with (e.g.video)
                  category: "Trailer",
                  // string - required - Type of interaction (e.g. 'play')
                  action: "View on YouTube",
                  // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                  label: `Season ${featuredSeason.season}`,
                })
              }}
              color="youtube"
              size="tiny"
            >
              <Icon name="youtube" /> View on YouTube
            </Button>
          </Container>
          <p style={{ paddingTop: "0.5em" }}>
            The fourth and final season of Eastsiders will be released on
            December 1 for Streaming on Netflix. Until then, get a glimpse of
            whats coming by watching the Season 4 trailer above. Share with your
            friends using the provided social sharing buttons.
            <br />
            <br />
            All 3 seasons of Eastsiders are available to{" "}
            <OutboundLink href={featuredSeason.stream[0].url}>
              stream on Netflix
            </OutboundLink>
            . Catch up or rewatch all the episodes.
          </p>
        </Featured>
        <Side1>
          <Header>Merch</Header>
          <MerchCard item={randomMerch()} fluid />
          <p>
            Check out the <Link to="/merch/">Merch Table</Link> for more items.
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
