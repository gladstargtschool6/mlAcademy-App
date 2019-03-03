import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Topics from '../Topics';
import Signup from '../../auth/Signup';
import Login from '../../auth/Login';
import Labs from '../Labs';

const NotFound = () => (
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 style={{ 'font-size': '80pt', fontFamily: 'Poppins' }}>404.</h1>
      </div>
    </div>
  </section>
);

const LabLoader = ({ match: { params } }) => {
  const { id } = params;
  return <Labs id={id} />;
};

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={Topics} />
    <Route path="/labs/:id" render={props => <LabLoader {...props} />} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);
export default Router;
