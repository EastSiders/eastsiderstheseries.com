import React from "react"
import styled from "styled-components"
//import Countdown from "./countdown"

//const NetflixRed = "#e50914"

const StyledHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0.5rem;
  color: #fff !important;
  background-color: #000;
  text-align: center;
`
const StyledSubHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 0.5rem;
  padding-top: 0;
  color: #fff !important;
  background-color: #000;
  text-align: center;
`

/*const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  color: #fff;
  background-color: ${NetflixRed};
`*/

/*const NetflixLogo = styled.span`
  color: ${NetflixRed};
`*/

const Announcement = () => (
  <section style={{ marginBottom: "1rem" }}>
    <StyledHeader>8 Daytime Emmy Nomintations.</StyledHeader>
    <StyledSubHeader>
      Watch Season 4 on{" "}
      <img
        src="/images/netflix-logo.svg"
        style={{
          display: "inline-block",
          height: "1.4rem",
          verticalAlign: "middle",
        }}
        alt="Netflix"
      />
    </StyledSubHeader>
  </section>
)

export default Announcement
