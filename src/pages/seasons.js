import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Header, Embed } from "semantic-ui-react"

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 1em 0em;
  padding: 0em 0em;

  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;

  @media (max-width: 700px) {
    grid-auto-flow: column;
  }
`

const StyledLi = styled.li`
  text-align: center;
`

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "main main main main sidebar";

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "sidebar";
  }
`

const Main = styled.div`
  grid-area: main;
`

const Sidebar = styled.div`
  grid-area: sidebar;
`

const SeasonsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      prevSeasons: allSeasonsJson(
        filter: { featured: { ne: true } }
        sort: { fields: season, order: ASC }
      ) {
        nodes {
          id
          season
          year
        }
      }
      featuredSeason: seasonsJson(featured: { eq: true }) {
        id
        season
        year
        imdb
        trailer {
          source
          id
        }
        synopsis
        stream {
          source
          url
        }
      }
      coverImages: allFile(
        filter: {
          internal: { mediaType: { regex: "/image/" } }
          relativePath: { regex: "/season_covers/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const {
    featuredSeason,
    prevSeasons: { nodes: prevSeasons },
    coverImages: { edges: coverImages },
  } = data

  const getCoverImage = filename => {
    const coverImage = coverImages.find(node => {
      return node.node.base === filename
    })

    return coverImage.node
  }

  return (
    <Layout>
      <SEO title="Seasons" />
      <Container>
        <Main>
          <Header as="h1">Watch Season {featuredSeason.season}</Header>
          <Header as="h2">
            Stream on{" "}
            <a href={featuredSeason.stream[0].url}>
              {featuredSeason.stream[0].source}
            </a>
          </Header>
          <Embed
            id={featuredSeason.trailer.id}
            source={featuredSeason.trailer.source}
            placeholder={`/images/season-${featuredSeason.season}-cover.png`}
          />
          <p>{featuredSeason.synopsis}</p>
          <Link to={`/seasons/${featuredSeason.season}/`}>
            More Season Details
          </Link>
        </Main>
        <Sidebar>
          <Header as="h3">Previous Seasons</Header>
          <StyledUl>
            {prevSeasons.map(season => {
              const cover = getCoverImage(`season-${season.season}-cover.png`)
              return (
                <StyledLi key={season.id}>
                  <Link to={`/seasons/${season.season}/`}>
                    <Image
                      fluid={cover.childImageSharp.fluid}
                      alt={`Season ${season.season} Cover`}
                    />
                    {`Season ${season.season} (${season.year})`}
                  </Link>
                </StyledLi>
              )
            })}
          </StyledUl>
        </Sidebar>
      </Container>
    </Layout>
  )
}

export default SeasonsPage
