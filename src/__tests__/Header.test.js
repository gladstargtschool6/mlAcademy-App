import React from "react";
import ReactDOM from "react-dom";
import Header from '../Header';
import renderer from "react-test-renderer";

describe("Editor Component Test", () => {
  it("Header renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it("Header renders correctly according to first snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
