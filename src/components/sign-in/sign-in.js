import React from "react";
import { Wrapper } from "./sign-in.style";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <br />
          Email:
          <br />
          <input type="email" name="email" />
          <br />
          Password:
          <br />
          <input type="password" name="password" />
        </form>
      </Wrapper>
    );
  }
}

export default SignIn;
