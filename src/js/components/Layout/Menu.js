import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Drawer, AppBar, MenuItem, Divider } from "material-ui";

class Menu extends Component {
  handleClickMenu = link => {
    console.log("goTo", link);
    this.props.handleToggle();
  };
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        onRequestChange={this.props.handleToggle}
      >
        <AppBar title="" />
        <Divider />
        <MenuItem onClick={this.handleClickMenu.bind(this, "item1")}>
          Menu Item
        </MenuItem>
        <MenuItem onClick={this.handleClickMenu.bind(this, "item2")}>
          Menu Item 2
        </MenuItem>
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
  return {
    // ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: {
    //   ui   : bindActionCreators(uiActionCreators, dispatch)
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
