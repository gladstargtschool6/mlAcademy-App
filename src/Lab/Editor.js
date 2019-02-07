import React from "react";
import AceEditor from "react-ace";
import "brace/theme/textmate";
import "brace/mode/python";
import axios from "axios";
import {Config} from "../Config";
import * as Icons from "grommet-icons";
import {Box, Button, Heading, Text} from "grommet";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.code,
      snippet: "",
      result: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({value: this.props.code});
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.snippet !== prevState.snippet) {
      axios
        .get(Config.apiUrl + "test/", {
          params: {model_input: this.state.snippet}
        })
        .then(res => {
          this.setState({result: res.data.complex_result});
        });
    }
  }
  
  computeOutput(snippet) {
    this.setState({snippet: snippet});
  }
  
  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }
  
  render() {
    const style = {
      fontSize: "14px !important",
      border: "1px solid lightgray",
      width: "100%",
      height: "100%"
    };
    return this.state.result !== "" ? (
      <Box column gap="small" height="80vh">
        <Box height="70%">
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
        </Box>
        <Box height="30%" overflow="auto">
          <Button
            color="accent-1"
            primary
            icon={<Icons.Edit/>}
            label="Submit"
            onClick={e => {
              this.computeOutput(this.state.value);
            }}
          />
          <Heading level={3}>Output:</Heading>
          <Text>{this.state.result}</Text>
        </Box>
      </Box>
    ) : (
      <Box column gap="small" height="80vh">
        <Box height="100%" elevation="xsmall">
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
        </Box>
        <Box>
          <Button
            color="accent-1"
            primary
            icon={<Icons.Edit/>}
            label="Submit"
            onClick={e => {
              this.computeOutput(this.state.value);
            }}
          />
        </Box>
      </Box>
    );
  }
}

export default Editor;
