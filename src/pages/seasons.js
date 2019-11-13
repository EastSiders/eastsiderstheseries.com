import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Header, List, Embed } from "semantic-ui-react"

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
        <Header as="h3">Previous Seasons</Header>
        <List horizontal>
          {prevSeasons.map(season => {
            const cover = getCoverImage(`season-${season.season}-cover.png`)
            return (
              <List.Item
                as={Link}
                to={`/seasons/${season.season}/`}
                key={season.id}
              >
                <Image
                  fluid={cover.childImageSharp.fluid}
                  alt={`Season ${season.season} Cover`}
                />
                {`Season ${season.season} (${season.year})`}
              </List.Item>
            )
          })}
        </List>
      </Container>
    </Layout>
  )
}

export default SeasonsPage
