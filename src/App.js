import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <Router>
        <div id="container">
          <div id="header" className="sticky">
            <Header />
          </div>
          {/*<div id = "routes">
            <Routes />
    </div>*/}
          <div id="body" />
          <div id="footer">
            <Footer />
          </div>
      </div>
        </Router>
      </>
    );
  }
}

export default App;
