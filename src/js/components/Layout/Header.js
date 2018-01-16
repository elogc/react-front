import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar, IconButton,IconMenu } from "material-ui";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import SocialPerson from "material-ui/svg-icons/social/person";

import {navigate} from "../../services/NavigationService"
const Login = (props) => (
    <IconButton onClick={navigate('login')}>
      <SocialPerson />
    </IconButton>
);

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><SocialPerson /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {/* <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" /> */}
  </IconMenu>
);



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true
    };
  }



  render() {
    return (
      <header>
        <AppBar
          title="WYG"
          onLeftIconButtonTouchTap={this.props.handleToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          style={{ position: "fixed" }}
        />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    //user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: {
    //   ui: bindActionCreators(uiActionCreators, dispatch)
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
