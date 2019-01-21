import React from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import logo from "../img/logo.svg";

//import { Col, Row } from "reactstrap";
import auth0Client from "../Auth";
import NavBar from "../NavBar/NavBar";
import ClassSelector from "../ClassSelector/ClassSelector";
import LabView from "../LabView/LabView";

const Main = ({ match }) => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/editor" component={Home} />
    <Route exact path="/editor/:labID" component={Test} />
    <Route exact path="/editor/:labID/:classID" component={Lab} />
  </main>
);

const Lab = ({ match }) => (
  <LabView labID={match.params.labID} classID={match.params.classID} />
);

const Home = () => (
  <div>
    <h2>Home</h2>
    Welcome to the mlAcademy test site | This is not a production build
  </div>
);
const Test = ({ match }) => <div>{match.params.labID}</div>;

//onst Test2 = ({ match }) => <div>yeet {match.params.labID}</div>;

export default Main;
