import React from "react";
import { Wrapper, CustomButton } from "./sign-in.style";
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
          <br /> <br />
          <div>
            <input type="submit" value="Submit" />
            <CustomButton>Google Sign In</CustomButton>
          </div>
        </form>
      </Wrapper>
    );
  }
}

export default SignIn;
