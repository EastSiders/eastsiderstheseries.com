import React from "react"
import PropTypes from "prop-types"
import Social from "./social"
import Logo from "./logo"
import Hero from "./hero"

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
      <Social social={social} />
    </Hero>
  )
}

Header.propTypes = {
  social: PropTypes.array,
  heroImages: PropTypes.array,
}

export default Header
