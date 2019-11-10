import React from "react"
import styled from "styled-components"
import Countdown from "./countdown"

const NetflixRed = "#e50914"

const StyledHeader = styled.h1`
  margin: 0;
  padding: 0.5rem;
  color: #fff !important;
  background-color: #000;
  text-align: center;
`

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  color: #fff;
  background-color: ${NetflixRed};
`

/*const NetflixLogo = styled.span`
  color: ${NetflixRed};
`*/

const Announcement = () => (
  <section>
    <StyledHeader>
      Watch Season 4 on{" "}
      <img
        src="/images/netflix-logo.svg"
        style={{
          display: "inline-block",
          height: "2rem",
          verticalAlign: "middle",
        }}
        alt="Netflix"
      />{" "}
      December 1
    </StyledHeader>
    <CountdownWrapper>
      <Countdown date="12/01/2019" />
    </CountdownWrapper>
  </section>
)

export default Announcement
