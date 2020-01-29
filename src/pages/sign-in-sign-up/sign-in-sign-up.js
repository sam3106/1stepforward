import React from "react";
import { Wrapper } from "./sign-in-sign-up.style";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

class SignInSignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <SignIn />
        <SignUp />
      </Wrapper>
    );
  }
}

export default SignInSignUp;
