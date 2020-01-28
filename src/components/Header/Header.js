import React from "react";
import { HeaderLink, DivWrapper } from "./header.styles";
import SignInSignUp from "../../pages/sign-in-sign-up/sign-in-sign-up";
import { Switch, Link, Route } from "react-router-dom";
const Header = () => (
  <DivWrapper>
    {
      // add if function to 1step link so it changes based on signin or not signed in. sign in goes to homepage not sign in goes to landing page
    }
    <HeaderLink side="Left" to="/">
      1Step Forward
    </HeaderLink>

    <HeaderLink  exact side="Right" to="/sign-in-sign-up">
      Sign-in/Sign-up
    </HeaderLink>


  </DivWrapper>
);

export default Header;
