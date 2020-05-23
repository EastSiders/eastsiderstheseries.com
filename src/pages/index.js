import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
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
    "featured featured featured side2"
    "featured featured featured .";

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "featured featured"
      "featured featured"
      "side1    side2";
  }
`

const EmmyWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header header header header header header header header"
    "image blurb blurb blurb blurb blurb blurb blurb";

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "image"
      "blurb";
  }

  h1 {
    grid-area: header;
  }

  div.image {
    grid-area: image;
  }

  div.blurb {
    grid-area: blurb;
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

const ShareButtons = styled(Container)`
  text-align: center;

  a.ui.button {
    margin: 0.5em;
  }

  a.ui.button:first-child {
    margin-left: 0;
  }

  a.ui.button:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) {
    a.ui.button {
      margin: 0.25em;
    }
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
      emmyPic: file(relativePath: { eq: "emmy_nominated.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
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
          <EmmyWrapper>
            <Header as="h1">8 Daytime Emmy Nomintations</Header>
            <Image
              fluid={data.emmyPic.childImageSharp.fluid}
              className="ui image rounded"
              alt="Nominated for 8 Daytime Emmys"
            />
            <div className="blurb">
              <p>
                We are honored to have received 8 Daytime Emmy nominations for
                the final season of EastSiders:{" "}
              </p>
              <ul>
                <li>Outstanding Digital Daytime Drama</li>
                <li>Outstanding Writing</li>
                <li>Outstanding Supporting Actor: Willam</li>
                <li>Outstanding Supporting Actor: Leith Burke</li>
                <li>Outstanding Guest Star: Lin Shaye</li>
                <li>Outstanding Makeup</li>
                <li>Outstanding Costume Design</li>
                <li>Outstanding Casting</li>
              </ul>
              <p>
                Congrats to all!{" "}
                <span role="img" aria-label="trophy emoji">
                  🏆
                </span>
              </p>
            </div>
          </EmmyWrapper>
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
          <ShareButtons>
            <Button
              as="a"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Watch the trailer for Eastsiders Season 4 available on @Netflix beginning December 1."
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
          </ShareButtons>
          <p style={{ paddingTop: "0.5em" }}>
            The fourth and final season of Eastsiders is available to watch on
            Netflix. Get a glimpse by watching the Season 4 trailer above. Share
            with your friends using the provided social sharing buttons.
            <br />
            <br />
            All 3 seasons of Eastsiders are available to{" "}
            <OutboundLink href={featuredSeason.stream[0].url}>
              watch on Netflix
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
