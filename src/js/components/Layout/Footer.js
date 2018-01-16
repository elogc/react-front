import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar } from "material-ui";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <AppBar className="footer-bar"
          showMenuIconButton={false} />
      </footer>
    );
  }
}

export default connect(null, null)(Footer);
