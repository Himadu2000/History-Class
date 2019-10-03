import React from "react";
import NavigationTerm from "./../Navigation";
import NavigationPapers from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";

const Term = () => {
  return (
    <div>
      <NavigationTerm />
      <NavigationPapers />
      <Jumbotron />
    </div>
  );
};

export default Term;
