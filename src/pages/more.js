import React from "react"
import { useStaticQuery, graphql /*, Link*/ } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const Section = styled.section`
  margin-top: 1em;
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
      <h1>More Stuff</h1>
      <Section>
        <Header as="h2">About</Header>
        <Image
          fluid={data.groupPic.childImageSharp.fluid}
          className="ui left floated image rounded"
          style={{ width: "40vw" }}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          maecenas volutpat blandit aliquam etiam erat. Amet commodo nulla
          facilisi nullam vehicula ipsum a arcu cursus. Faucibus pulvinar
          elementum integer enim. Penatibus et magnis dis parturient montes
          nascetur. Eget aliquet nibh praesent tristique magna sit amet. Tempor
          id eu nisl nunc mi ipsum faucibus vitae aliquet. Semper viverra nam
          libero justo. Molestie ac feugiat sed lectus vestibulum mattis
          ullamcorper velit sed. Sollicitudin nibh sit amet commodo nulla.
          Aliquam purus sit amet luctus venenatis lectus magna fringilla. Amet
          purus gravida quis blandit turpis cursus in. Odio aenean sed
          adipiscing diam donec adipiscing tristique risus.
          <br />
          Nisi lacus sed viverra tellus in hac. Sociis natoque penatibus et
          magnis dis parturient montes nascetur. Nunc eget lorem dolor sed
          viverra ipsum nunc aliquet bibendum. Ornare lectus sit amet est.
          Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget.
          Vitae proin sagittis nisl rhoncus mattis rhoncus. Cras fermentum odio
          eu feugiat pretium. At tellus at urna condimentum mattis pellentesque
          id nibh tortor. Condimentum lacinia quis vel eros. Sit amet volutpat
          consequat mauris nunc congue nisi vitae suscipit. Sapien faucibus et
          molestie ac. Placerat duis ultricies lacus sed turpis tincidunt id
          aliquet risus.
          <br />
          Sit amet facilisis magna etiam tempor orci. Non diam phasellus
          vestibulum lorem. Non blandit massa enim nec. Egestas tellus rutrum
          tellus pellentesque eu. Nibh nisl condimentum id venenatis a. Sed arcu
          non odio euismod lacinia at quis risus. Commodo sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend. Tempor nec feugiat
          nisl pretium fusce id velit ut tortor. Sapien nec sagittis aliquam
          malesuada bibendum arcu vitae elementum. Nec nam aliquam sem et tortor
          consequat id. Metus dictum at tempor commodo ullamcorper a.
          Ullamcorper malesuada proin libero nunc consequat interdum varius sit
          amet. Adipiscing diam donec adipiscing tristique risus nec. Diam
          maecenas sed enim ut sem viverra aliquet eget. Nunc sed velit
          dignissim sodales ut eu sem. Quam id leo in vitae. Ultrices mi tempus
          imperdiet nulla malesuada pellentesque. Amet tellus cras adipiscing
          enim eu.
        </p>
      </Section>
      <Section>
        <Header as="h2">Contact Us</Header>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default MorePage
