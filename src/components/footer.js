import React from "react"
import Logo from "./logo"

const Footer = () => (
  <footer>
    <br />
    <Logo oneColor style={{ color: "#000" }} /> © {new Date().getFullYear()},
    Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
