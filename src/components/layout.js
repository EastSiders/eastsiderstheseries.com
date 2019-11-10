/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "semantic-ui-less/semantic.less"
import "../fonts/fonts.css"

import { Container } from "semantic-ui-react"

import Navbar from "./navbar"
import NavbarBottom from "./navbar-bottom"
import Header from "./header"
import Announcement from "./announcement"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allSocialJson {
        nodes {
          name
          url
          icon
        }
      }
      heroImages: allFile(
        filter: {
          internal: { mediaType: { regex: "/image/" } }
          relativePath: { regex: "/hero_images/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Navbar />
      <Header
        social={data.allSocialJson.nodes}
        heroImages={data.heroImages.edges}
      />
      <Announcement />
      <Container>
        {children}
        <Footer />
        <NavbarBottom />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
