import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "redux-form-material-ui";

import { validations } from "../../services";
import user from "../../mocks/user.json";

class Profile extends React.Component {
  submit(values) {
    console.log(values, arguments);
  }
  render() {
    console.log('navigator.language',navigator.language);
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <h1>PROFILE</h1>
        <form onSubmit={handleSubmit(this.submit)}>
          <div>
            <Field
              name="email"
              type="text"
              component={TextField}
              hintText="Username"
              floatingLabelText="Username"
              validate={validations.required}
            />
          </div>
          <div>
            <Field
              name="email"
              type="text"
              component={TextField}
              hintText="Username"
              floatingLabelText="Username"
              validate={validations.required}
            />
          </div>
        <div>
            <Field
              name="picture"
              type="text"
              component={TextField}
              label="Password"
            />{" "}
          </div>

          <div>
            <RaisedButton
              type="submit"
              label="Log In"
              primary={true}
              disabled={pristine || submitting}
            />
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // shops: state.shops.shops
  };
}

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(shopActions, dispatch)
});

Profile = reduxForm({
  form: "profile",
  initialValues:user
})(Profile);

export default connect(mapStateToProps)(Profile);
