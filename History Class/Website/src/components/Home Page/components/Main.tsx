import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./components/Carousel";
import Jumbotron from "./components/Jumbotron";
import Jumbotron2 from "./components/Jumbotron2";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Carousel />
          <Jumbotron />
          <Jumbotron2 />
        </div>
      </Router>
    );
  }
}

export default Homepage;
