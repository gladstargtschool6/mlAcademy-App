import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./img/logo.svg";

import { Col, Row } from 'reactstrap';
import auth0Client from './Auth';
import NavBar from './NavBar/NavBar';
import ClassSelector from "./ClassSelector/ClassSelector";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Row>
          <Col xs={0} md={1} />
          <Col xs={12} md={10}>
            <Route exact path="/" exact component={Home} />
            <Route path="/editor" component={ClassSelector} />
          </Col>
          <Col xs={0} md={1} />
        </Row>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Welcome to the mlAcademy test site | This is not a production build
    </div>
  );
}

function About({ match }) {
  return (
    <div>
      <h2>About</h2>
      Wow, another learning platform
    </div>
  );
}

export default App;