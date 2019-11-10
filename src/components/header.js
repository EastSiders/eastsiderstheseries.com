import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Social from "./social"
import Logo from "./logo"
import Hero from "./hero"

const SocialWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
  margin: 0 auto;
  svg {
    color: white;
    width: 1em;
    height: 1em;
    padding: 1.5em;
  }
`

const Header = ({ social, heroImages }) => {
  const randomImage = () => {
    const randImage = heroImages[Math.floor(Math.random() * heroImages.length)]
    return randImage.node.childImageSharp.fluid
  }

  return (
    <Hero height={"calc(100vw * (1/3))"} fluid={randomImage()}>
      <h1 style={{ fontSize: "10vw" }}>
        <Logo style={{ textShadow: "1px 1px 2px grey" }} />
      </h1>
      <SocialWrapper>
        <Social social={social} />
      </SocialWrapper>
    </Hero>
  )
}

Header.propTypes = {
  social: PropTypes.array,
  heroImages: PropTypes.array,
}

export default Header
