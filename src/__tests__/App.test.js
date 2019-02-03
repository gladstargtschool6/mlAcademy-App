import React from "react";
import ReactDOM from "react-dom";
import App from '../App';
import renderer from "react-test-renderer";

describe("Entire App Test", () => {
  it("Renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it("Renders correctly according to first snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
