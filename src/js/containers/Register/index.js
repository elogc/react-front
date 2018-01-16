import React, { Component } from "react";
import { connect } from 'react-redux'
import { Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "redux-form-material-ui";
import { validations } from "../../services";
import * as authActions from '../../redux/Auth/auth.actions';

export class Register extends Component {
  submit(values) {
    console.log('submit',values);
    this.props.dispatch(authActions.register(values));
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="Register">
        <h1>Register</h1>

        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div>
            <Field
              name="email"
              type="text"
              component={TextField}
              hintText="email"
              floatingLabelText="email"
              validate={validations.required}
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              component={TextField}
              hintText="Password"
              floatingLabelText="Password"
            />
          </div>

          <div>
            <RaisedButton
              type="submit"
              label="Register"
              primary={true}
              disabled={pristine || submitting}
            />
          </div>
        </form>
      </div>
    );
  }
}

Register = reduxForm({ form: "register" })(Register);

export default connect()(Register);
