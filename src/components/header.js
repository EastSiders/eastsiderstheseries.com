import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Social from "./social"
import Logo from "./logo"
//import { Header } from "semantic-ui-react"

const Header = ({ siteTitle, social }) => (
  <header
    style={{
      background: `#156592`,
      marginBottom: `1.45rem`,
      backgroundImage: `url(${"./images/hero_images/central-park-thom-cal.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "60vh",
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: 960,
        padding: `16rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
