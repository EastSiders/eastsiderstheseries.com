import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledFooter = styled.footer`
  @media (max-width: 700px) {
    margin-bottom: 60px;
  }
`

const Footer = () => (
  <StyledFooter>
    <br />
    <Logo oneColor style={{ color: "#000" }} /> © {new Date().getFullYear()},
    Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)

export default Footer
