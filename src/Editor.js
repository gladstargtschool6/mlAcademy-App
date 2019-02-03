import React from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "brace/theme/textmate";
import "brace/mode/python";
import { Box, Button } from "grommet";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultCode
    };
    this.onChange = this.onChange.bind(this);
  }
  static propTypes = {
    computeOutput: PropTypes.func.isRequired
  };

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    let input;
    const style = {
      fontSize: "14px !important",
      border: "1px solid lightgray",
      width: "100%",
      height: "90vh"
    };
    return (
      <Box pad="small" gap="small">
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
          value={this.state.value}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <Button
          label="Submit"
          onClick={e => {
            this.props.computeOutput(this.state.value);
          }}
        />
      </Box>
    );
  }
}
export default Editor;
