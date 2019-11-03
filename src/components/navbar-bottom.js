import React, { Component } from "react"
import { Link } from "gatsby"
import { Icon, Menu, Responsive } from "semantic-ui-react"

export default class NavbarBottom extends Component {
  render() {
    return (
      <Responsive
        as={Menu}
        icon="labeled"
        fluid
        widths={4}
        fixed="bottom"
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Menu.Item as={Link} activeClassName="active" to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/">
          <Icon name="tv" />
          Watch
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/">
          <Icon name="shopping cart" />
          Merch
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/">
          <Icon name="ellipsis horizontal" />
          More
        </Menu.Item>
      </Responsive>
    )
  }
}
