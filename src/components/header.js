import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Social from "./social"
import Logo from "./logo"
import Hero from "./hero"

const Header = ({ social, heroImages }) => {
  const randomImage = () => {
    const randImage = heroImages[Math.floor(Math.random() * heroImages.length)]
    console.log("Random Image:", randImage)
    return randImage.node.childImageSharp.fluid
  }

  return (
    <Hero height="60vh" fluid={randomImage()}>
      <h1 style={{ fontSize: "4rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
      </h1>
      <Social social={social} />
    </Hero>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
