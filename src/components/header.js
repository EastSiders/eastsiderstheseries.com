import React, { useState } from "react"
import PropTypes from "prop-types"
import Social from "./social"
import Logo from "./logo"
import Hero from "./hero"
import { Responsive } from "semantic-ui-react"

const Header = ({ social, heroImages }) => {
  const [width, setWidth] = useState()
  const randomImage = () => {
    const randImage = heroImages[Math.floor(Math.random() * heroImages.length)]
    return randImage.node.childImageSharp.fluid
  }
  console.log(width, Responsive.onlyTablet.minWidth)
  return (
    <Responsive
      as={Hero}
      height={width >= Responsive.onlyTablet.minWidth ? "60vh" : "30vh"}
      fluid={randomImage()}
      fireOnMount
      onUpdate={(e, { width }) => setWidth(width)}
    >
      <h1 style={{ fontSize: "10vw" }}>
        <Logo style={{ textShadow: "1px 1px 2px grey" }} />
      </h1>
      <Social social={social} />
    </Responsive>
  )
}

Header.propTypes = {
  social: PropTypes.array,
  heroImages: PropTypes.array,
}

export default Header
