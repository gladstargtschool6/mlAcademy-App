import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CodeEditor from "../CodeEditor/CodeEditor";

import { content } from "../labs.json";
import { MatchingBraceOutdent } from "brace/mode/java";

function ClassSelector({ match }) {
  return (
    <div>
      <h2>Select a Lab</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Lab 1 - Hello World</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Lab 2 - Hello World</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Lab 3 - Hello World</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:labID`} exact component={Editor} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Editor({ match }) {
  var ex = "1";
  var data;
  if (match.params.labID < 1)
    return (
      <div>
        <CodeEditor id={0} />
      </div>
    );
  else {
    return (
      <div>
        <CodeEditor id={match.params.labID} />
      </div>
    );
  }
}

export default ClassSelector;
