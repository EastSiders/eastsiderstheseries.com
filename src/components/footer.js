import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledFooter = styled.footer`
  @media (max-width: 700px) {
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    padding-bottom: calc(58px + var(--safe-area-inset-bottom));
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
