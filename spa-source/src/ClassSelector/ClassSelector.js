import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CodeEditor from "../CodeEditor/CodeEditor";

import { content } from '../labs.json';

function ClassSelector({ match }) {
    return (
        <div>
            <h2>Select a Lab</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/lab1`}>Lab 1 - Hello World</Link>
                </li>
                <li>
                    <Link to={`${match.url}/lab2`}>Lab 2 - Hello World</Link>
                </li>
                <li>
                    <Link to={`${match.url}/lab3`}>Lab 3 - Hello World</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:labID`} component={Editor} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div >
    );
}

function Editor({ match }) {
    var ex = "ex1";
    var data;
    if (!content[match.params.labID]) {
        data =
            [
                "# Error: Lesson Not Found",
                "#Error: Lesson Not Found"
            ];
    } else {
        data = content[match.params.labID][ex];
    }

    return (
        <div>
            <CodeEditor markdown={data[0]} code={data[1]} />
        </div>
    );

}

export default ClassSelector;