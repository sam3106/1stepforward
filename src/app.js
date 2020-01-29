import React from "react";
import Header from "./components/Header/Header";
import { DropDownMenu } from "./components/drop-down-menu/drop-down-menu";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={DropDownMenu} />

          <Route exact path="/sign-in-sign-up" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
