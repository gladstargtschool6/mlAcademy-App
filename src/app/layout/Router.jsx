import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Topics from "../Topics";
import Signup from "../Signup";
import Login from "../Login";

const NotFound = () => (
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 style={{ "font-size": "80pt", fontFamily: "Poppins" }}>404.</h1>
      </div>
    </div>
  </section>
);

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={Topics} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);
export default Router;
