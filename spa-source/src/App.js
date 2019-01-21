import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./img/logo.svg";

import { Col, Row } from "reactstrap";
import auth0Client from "./Auth";
import NavBar from "./NavBar/NavBar";
import ClassSelector from "./ClassSelector/ClassSelector";
import CodeEditor from "./CodeEditor/CodeEditor";

import { content } from "./labs.json";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" class="navbar-brand">
            <img src={logo} alt="logo" height="24px" />
          </Link>
          <div class="navbar-collapse collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/editor" class="nav-link">
                  Labs
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" exact component={Home} />
        <Route path="/editor" component={Editor} />

        {Editor}
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
function Editor({ match }) {
  var ex = "ex1";
  var data;
  if (!content[match.params.labID]) {
    data = ["# Error: Lesson Not Found", "#Error: Lesson Not Found"];
  } else {
    data = content[match.params.labID][ex];
  }

  return (
    <div>
      <CodeEditor markdown={data[0]} code={data[1]} />
      <nav class="navbar fixed-bottom navbar-expand-md navbar-light bg-light">
        <Link to="/" class="nav-link">
          <button type="button" class="btn btn-primary">
            Back
          </button>
        </Link>
        <Link to="/editor" class="nav-link">
          <button type="button" class="btn btn-primary">
            Next
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default App;
