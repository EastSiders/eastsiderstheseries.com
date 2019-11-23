import React from "react"
import styled from "styled-components"
import { Header, Image } from "semantic-ui-react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Patreon = () => {
  return (
    <StyledDiv>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/images/kit-patreon.png"
          avatar
          size="tiny"
          alt="Kit Williamson"
        />
        <Header as="span" size="medium" style={{ whiteSpace: "nowrap" }}>
          Kit Williamson
        </Header>
      </div>
      <p style={{ textAlign: "center" }}>
        Creating Queer TV shows, movies and web content
      </p>
      <Image
        as={OutboundLink}
        href="https://www.patreon.com/kitwilliamson"
        src="/images/become_a_patron_button.png"
        alt="Become a Patron"
        fluid
        style={{ marginBottom: ".5rem" }}
      />
    </StyledDiv>
  )
}

export default Patreon
