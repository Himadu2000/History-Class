import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";

class NavbarPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron />
      </div>
    );
  }
}

export default NavbarPage;
