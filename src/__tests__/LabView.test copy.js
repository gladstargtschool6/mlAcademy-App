import React from "react";
import ReactDOM from "react-dom";
import LabView from '../LabView/LabView';
import renderer from "react-test-renderer";

describe("Editor Component Test", () => {
  it("Renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LabView />, div);
  });

  it("Renders correctly according to first snapshot", () => {
    const tree = renderer.create(<LabView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
