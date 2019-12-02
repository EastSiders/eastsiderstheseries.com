import React from "react"
import styled from "styled-components"
//import Countdown from "./countdown"

//const NetflixRed = "#e50914"

const StyledHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 0.5rem;
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
    <StyledHeader>
      Watch Season 4 Now Available on{" "}
      <img
        src="/images/netflix-logo.svg"
        style={{
          display: "inline-block",
          height: "2rem",
          verticalAlign: "middle",
        }}
        alt="Netflix"
      />
    </StyledHeader>
  </section>
)

export default Announcement
