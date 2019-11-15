import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Header, Icon, Breadcrumb, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Details from "../components/season-details"
import Soundtrack from "../components/soundtrack"
import Press from "../components/press"
import CastList from "../components/castlist"

const Section = styled.section`
  margin-top: 1rem;
`

export const query = graphql`
  query($seasonId: String!) {
    seasonsJson(id: { eq: $seasonId }) {
      id
      season
      imdb
      trailer {
        id
        source
      }
      year
      synopsis
      stream {
        source
        url
      }
      purchase {
        dvd {
          source
          url
        }
        digital {
          source
          url
        }
      }
      cast {
        id
        name
        character
        imdb
        social {
          name
          url
          icon
        }
      }
      soundtrack {
        id
        title
        artist {
          name
          url
        }
        urls {
          type
          url
        }
      }
      press {
        id
        title
        source
        date(formatString: "MMMM DD, YYYY")
        url
      }
    }
  }
`
const SeasonTemplate = ({ data: { seasonsJson } }) => {
  const {
    season,
    year,
    imdb,
    trailer,
    stream,
    purchase,
    cast,
    soundtrack,
    press,
    synopsis,
  } = seasonsJson

  const scrollTo = e => {
    e.preventDefault()
    const $menubar = document.getElementById("menubar")
    const menuHeight = $menubar.getBoundingClientRect().height
    const id = e.currentTarget.getAttribute("href").slice(1)
    const $anchor = document.getElementById(id)
    /*$anchor.scrollIntoView({
      block: "start",
      behavior: "smooth",
    })*/
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset
    window.scroll({
      top: offsetTop - menuHeight,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <SEO title={`Season ${season} (${year})`} />
      <Breadcrumb>
        <Breadcrumb.Section as={Link} to="/seasons" link>
          Seasons
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          {season} ({year})
        </Breadcrumb.Section>
      </Breadcrumb>
      <List horizontal bulleted floated="right">
        {cast && (
          <List.Item>
            <a href="#cast" onClick={scrollTo}>
              Cast
            </a>
          </List.Item>
        )}
        {soundtrack && (
          <List.Item>
            <a href="#soundtrack" onClick={scrollTo}>
              Soundtrack
            </a>
          </List.Item>
        )}
        {press && (
          <List.Item>
            <a href="#press" onClick={scrollTo}>
              Press
            </a>
          </List.Item>
        )}
      </List>
      <Header as="h1">
        Season {season} ({year}){" "}
        <a href={imdb}>
          <Icon name="imdb" />
        </a>
      </Header>
      <Details
        season={season}
        synopsis={synopsis}
        trailer={trailer}
        stream={stream}
        purchase={purchase}
      />
      {cast && (
        <Section id="cast">
          <Header as="h2">Cast</Header>
          <CastList cast={cast} />
        </Section>
      )}
      {soundtrack && (
        <Section id="soundtrack">
          <Header as="h2">Soundtrack</Header>
          <Soundtrack songs={soundtrack} />
        </Section>
      )}
      {press && (
        <Section id="press">
          <Header as="h2">Press</Header>
          <Press articles={press} />
        </Section>
      )}
    </Layout>
  )
}

export default SeasonTemplate
