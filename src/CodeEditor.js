import React from "react";
import axios from "axios";
import { Box, Button, Text } from "grommet";
import AceEditor from "react-ace";
import ShowContent from "./ShowContent";
import "brace/theme/textmate";
import Editor from "./Editor";
import { isNullOrUndefined } from "util";
import marked from "marked";

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      num: 8,
      snippet: "",
      returnValue: "",
      content: "",
      defaultCode: ""
    };
    this.apiUrl = "http://52.151.66.189/api/";
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(this.apiUrl + this.state.num).then(res => {
      console.log(res);
      this.setState({ content: res.data.content, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.num !== prevState.num) {
      this.setState({ isLoading: true });
      console.log("CHANGE: now id is " + this.state.num);
      axios.get(this.apiUrl + this.state.num).then(res => {
        this.setState({ content: res.data.content, isLoading: false });
      });
    }
    if (this.state.snippet !== prevState.snippet) {
      console.log("CHANGE: computing " + this.state.snippet);
      axios
        .get(this.apiUrl + "test/?model_input=" + this.state.snippet)
        .then(res => {
          this.setState({ returnValue: res.data.complex_result });
        });
    }
  }

  computeOutput(snippet) {
    this.setState({ snippet: snippet });
  }

  handlePrev() {
    var newNum = this.state.num - 1;
    this.setState({ num: newNum });
  }

  handleNext() {
    var newNum = this.state.num + 1;
    this.setState({ num: newNum });
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <div>
            <Box
              direction="row"
              flex={true}
              wrap
              justify="center"
              pad="xlarge"
              gap="large"
            >
              <Box direction="row-responsive" justify="center" overflow="auto">
                <ShowContent content={this.state.content} />
              </Box>
              <Box direction="row-responsive" justify="center" overflow="auto">
                <Editor computeOutput={this.computeOutput.bind(this)} />
              </Box>
            </Box>

            <br />
            <Box
              tag="footer"
              direction="row"
              justify="end"
              pad="medium"
              border={{ side: "top" }}
              gap="small"
              flex={false}
            >
              <Button label="-" onClick={this.handlePrev.bind(this)} />
              <Button label="+" onClick={this.handleNext.bind(this)} />
            </Box>

            <br />
            {this.state.returnValue}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
export default CodeEditor;
