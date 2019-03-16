import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Topics from '../Topics/Topics';
import Labs from '../Labs/Labs';
import NotFound from './NotFound';
import Login from './Login';

const LabLoader = ({ match: { params } }) => {
  const { lessonId } = params;
  return <Labs lessonId={lessonId} />;
};
LabLoader.propTypes = {
  match: PropTypes.object.isRequired,
};

function Routes() {
  const [user, setUser] = useGlobal('user');
  function Logout() {
    localStorage.clear();
    setUser(null);
    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" render={() => (user ? <Topics /> : <Redirect to="/" />)} />
      <Route
        path="/labs/:lessonId"
        render={props => (user ? <LabLoader {...props} /> : <Redirect to="/" />)}
      />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route render={NotFound} />
    </Switch>
  );
}
export default Routes;
