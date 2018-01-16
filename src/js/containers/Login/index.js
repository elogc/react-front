import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "redux-form-material-ui";
import { validations } from "../../services";

export class Login extends Component {
  submit(values) {
    console.log(values, arguments);
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="login">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit(this.submit)}>
          <div>
            <Field
              name="username"
              type="text"
              component={TextField}
              hintText="Username"
              floatingLabelText="Username"
              validate={validations.required}
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
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

Login = reduxForm({ form: "login" })(Login);

export default Login;
