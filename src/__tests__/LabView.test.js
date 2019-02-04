import React from "react";
import ReactDOM from "react-dom";
import LabView from '../LabView';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';
import renderer from "react-test-renderer";

describe("Entire App Test", () => {
  const context = {};

  it("LabView app renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StaticRouter location="location" context={context}>
        <LabView />
      </StaticRouter>, div);
  });

  it("LabView renders correctly according to first snapshot", () => {
    const component = renderer.create(
      <StaticRouter location="location" context={context}>
        <LabView />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
