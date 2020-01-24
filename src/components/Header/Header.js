import React from "react";
import { HeaderLink, DivWrapper } from "./header.styles";
const Header = () => (
  <DivWrapper>
    {
      // add if function to 1step link so it changes based on signin or not signed in. sign in goes to homepage not sign in goes to landing page
    }
    <HeaderLink sides="Left" to="/">
      1Step Forward
    </HeaderLink>
    <HeaderLink sides="Right" to="/sign-in-sign-up">
      Sign-in/Sign-up
    </HeaderLink>
  </DivWrapper>
);

export default Header;
