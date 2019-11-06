import React, { Component } from "react"
import { Link } from "gatsby"
import { Icon, Menu, Responsive } from "semantic-ui-react"

const menuStyle = {
  backgroundColor: "#156592",
}

export default class NavbarBottom extends Component {
  render() {
    return (
      <Responsive
        as={Menu}
        icon="labeled"
        inverted
        fluid
        widths={4}
        fixed="bottom"
        maxWidth={Responsive.onlyTablet.maxWidth}
        style={menuStyle}
        size="mini"
      >
        <Menu.Item as={Link} activeClassName="active" to="/">
          <Icon name="home" />
          HOME
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/seasons">
          <Icon name="tv" />
          WATCH
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/merch">
          <Icon name="shopping cart" />
          MERCH
        </Menu.Item>
        <Menu.Item as={Link} activeClassName="active" to="/more">
          <Icon name="ellipsis horizontal" />
          MORE
        </Menu.Item>
      </Responsive>
    )
  }
}
