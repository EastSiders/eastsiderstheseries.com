/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import NavbarBottom from "./navbar-bottom"
import Header from "./header"
import Footer from "./footer"
//import "./layout.css"
import "../fonts/fonts.css"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
        <Footer social={data.site.siteMetadata.social} />
        <NavbarBottom />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
