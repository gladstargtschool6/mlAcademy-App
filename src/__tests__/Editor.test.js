import React from "react";
import ReactDOM from "react-dom";
import Editor from '../LabView/Editor';
import renderer from "react-test-renderer";

describe("Editor Component Test", () => {
  it("Renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor />, div);
  });

  it("Renders correctly according to first snapshot", () => {
    const tree = renderer.create(<Editor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
