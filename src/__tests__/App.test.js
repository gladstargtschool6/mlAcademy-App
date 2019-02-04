import React from "react";
import ReactDOM from "react-dom";
import App from '../App';
import { StaticRouter } from 'react-router';
import renderer from "react-test-renderer";

describe("Entire App Test", () => {
  const context = {};

  it("Entire app renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StaticRouter location="location" context={context}>
        <App />
      </StaticRouter>, div);
  });

  it("Entire app renders correctly according to first snapshot", () => {
    const component = renderer.create(
      <StaticRouter location="location" context={context}>
        <App />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
