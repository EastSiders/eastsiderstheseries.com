import React from "react"
import { useStaticQuery, graphql /*, Link*/ } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Header, Responsive } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const Section = styled.section`
  margin-top: 1em;
`
const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "image about";

  @media (max-width: ${Responsive.onlyTablet.maxWidth}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "about";
  }

  div.image {
    grid-area: image;
  }

  p {
    grid-area: about;
  }
`

const MorePage = () => {
  const data = useStaticQuery(graphql`
    query {
      groupPic: file(relativePath: { eq: "group-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="More" />
      <Section>
        <Header as="h2">About</Header>
        <Wrapper>
          <Image
            fluid={data.groupPic.childImageSharp.fluid}
            className="ui image rounded"
          />
          <p>
            "EastSiders" launched on YouTube in 2012 to a lot of love from fans
            and critics alike, with Entertainment Weekly calling the show "funny
            and heartbreaking" and Out Magazine praising it as "relatable, fresh
            and darkly funny." The show has been nominated for 8 Daytime Emmy
            Awards, including Outstanding Digital Drama Series, Outstanding
            Writing and Directing for Kit Williamson, Outstanding Actor for Van
            Hansis and Outstanding Supporting Actor for Stephen Guarino and John
            Halbach. The series won Best Web Drama at the LA Weekly Awards, Best
            Ensemble at the Indie Series Awards and was nominated for a
            Satellite Award from the International Press Academy. In 2016 the
            series found a world-wide audience on Netflix, and has now been
            subtitled in more than 30 languages.
          </p>
        </Wrapper>
      </Section>
      <Section>
        <Header as="h2">Contact Us</Header>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default MorePage
