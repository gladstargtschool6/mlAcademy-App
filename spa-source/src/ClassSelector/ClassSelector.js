import React from "react";
import { Route, Link } from "react-router-dom";

import CodeEditor from "../CodeEditor/CodeEditor";
//import { MatchingBraceOutdent } from "brace/mode/java";
/*<li>
          <Link to={`${match.url}/3`}>Lab 3 - Hello World</Link>
        </li>*/
const ClassSelector = ({ match }) => (
  <div>
    <Link to={`${match.url}/1`}>Lab 1 - Hello World</Link>
    <Route path="/learn/editor/:labID" component={Editor} />
    <Route exact path="learn/editor" render={() => <h3>Error</h3>} />
  </div>
);

function Editor({ match }) {
  var ex = "1";
  var data;
  if (match.params.labID < 1)
    return (
      <div>
        asdfji
        <CodeEditor id={0} />
      </div>
    );
  else {
    return (
      <div>
        asfojwoi
        <CodeEditor id={match.params.labID} />
      </div>
    );
  }
}

export default ClassSelector;
