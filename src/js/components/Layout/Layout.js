import React, { Component } from "react";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false };
  }
  handleToggle = () => this.setState({ openMenu: !this.state.openMenu });
  // handleToggle = () => console.log);
  render() {
    return (
      <div className="container">
        <Header handleToggle={this.handleToggle}/>
        <Menu
          handleToggle={this.handleToggle}
          open={this.state.openMenu} />
        <div className="wrapper">
          <div className="content">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
