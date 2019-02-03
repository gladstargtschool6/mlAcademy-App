import React from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "brace/theme/textmate";
import { Button } from "grommet";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    computeOutput: PropTypes.func.isRequired
  };

  render() {
    let input;
    const style = {
      fontSize: "14px !important",
      border: "1px solid lightgray",
      width: "100%",
      height: "100%"
    };

    const { computeOutput } = this.props.computeOutput;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          computeOutput(input.value);
          input.value = "";
        }}
      >
        <AceEditor
          style={style}
          mode="python"
          theme="textmate"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.props.default}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <input
          className="form-control col-md-12"
          ref={node => {
            input = node;
          }}
        />
        <br />
        <Button label="Submit" />
      </form>
    );
  }
}
export default Editor;
