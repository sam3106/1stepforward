import React from "react";
import { Wrapper } from "./sign-up.style";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <h2> I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form>
          First name:
          <br />
          <input type="text" name="firstname" />
          <br />
          Last name:
          <br />
          <input type="text" name="lastname" />
          <br />
          Email:
          <br />
          <input type="email" name="email" />
          <br />
          Password:
          <br />
          <input type="password" name="password" />
          <br />
          Confirm Password:
          <br />
          <input type="password" name="confirmPassword" />
        </form>
      </Wrapper>
    );
  }
}

export default SignUp;
