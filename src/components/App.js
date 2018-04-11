import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

import { Wrapper } from "../styledComponents";
import logo from "../logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    );
  }
}

export default App;
