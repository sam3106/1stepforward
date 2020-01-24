import React from "react";
import { Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { DropDownMenu } from "./components/drop-down-menu/drop-down-menu";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Header />
        <DropDownMenu />
      </div>
    );
  }
}

export default App;
