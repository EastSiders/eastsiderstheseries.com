import React from "react"
import PropTypes from "prop-types"

const baseStyle = {
  fontFamily: "'ITC Stone Sans Std Bold 24796'",
  textTransform: "uppercase",
}

const Logo = ({ oneColor }) => (
  <span style={{ ...baseStyle }}>
    <span style={oneColor ? {} : { color: "#156592" }}>East</span>siders
  </span>
)

Logo.propTypes = {
  oneColor: PropTypes.bool,
  as: PropTypes.element,
}

Logo.defaultProps = {
  oneColor: false,
}

export default Logo
