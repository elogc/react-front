import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as shopActions from "../../redux/Shops/shops.actions";
import CardItemShort from "../../components/Elements/CardItemShort";

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(shopActions.fetchShops());
    //this.props.dispatch({'FETCH_SHOPS_ASYNC'});
    console.log("FETCH_SHOPS_ASYNC--will mount");
  }
  render() {
    return (
      <div>
        <h1>LIST</h1>
        <div className="content-list">
          {this.props.shops &&
            this.props.shops.map((shop, i) => <CardItemShort key={i} shop={shop} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shops: state.shops.shops
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(shopActions, dispatch)
});

export default connect(mapStateToProps)(Home);
