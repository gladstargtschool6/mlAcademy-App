import React from "react";
import ReactDOM from "react-dom";
import LabView from '../LabView/LabView';
import renderer from "react-test-renderer";

describe("LabView Component Test", () => {
  it("LabView renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LabView />, div);
  });

  it("LabView renders correctly according to first snapshot", () => {
    const tree = renderer.create(<LabView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
