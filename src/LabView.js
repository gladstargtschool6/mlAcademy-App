import React from "react";
import axios from "axios";
import { Box, Button, Grid, Heading, Markdown, Text } from "grommet";
import AceEditor from "react-ace";
import ShowContent from "./ShowContent";
import "brace/theme/textmate";
import Editor from "./Editor";
import { isNullOrUndefined } from "util";
import marked from "marked";
import loading from "./loading.svg";
import { timeout } from "q";

class LabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      num: 8,
      snippet: "",
      returnValue: "",
      content: "",
      name: "",
      defaultCode: ""
    };
    this.apiUrl = "http://52.151.66.189/api/";
  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(this.apiUrl + this.state.num).then(res => {
      this.sleep(100).then(() => {
        this.setState({
          content: res.data.content,
          name: res.data.name,
          defaultCode: res.data.code,
          isLoading: false
        });
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.num !== prevState.num) {
      this.setState({ isLoading: true });
      axios.get(this.apiUrl + this.state.num).then(res => {
        this.sleep(300).then(() => {
          this.setState({
            content: res.data.content,
            name: res.data.name,
            defaultCode: res.data.code,
            isLoading: false
          });
        });
      });
    }
    if (this.state.snippet !== prevState.snippet) {
      console.log("Computing " + this.state.snippet);
      axios
        .get(this.apiUrl + "test/", {
          params: { model_input: this.state.snippet }
        })
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
            <Heading>{this.state.name}</Heading>
            <br />
            <Markdown>{this.state.content}</Markdown>

            <Editor
              defaultCode={this.state.defaultCode}
              computeOutput={this.computeOutput.bind(this)}
            />
            {this.state.returnValue !== "" ? (
              <div>
                <h2>Result:</h2>
                <br />
                {this.state.returnValue}
              </div>
            ) : (
              <div />
            )}
            <br />
            <Box
              tag="footer"
              direction="row"
              justify="end"
              pad="medium"
              gap="small"
              flex={false}
              background="brand"
            >
              <Button label="Back" onClick={this.handlePrev.bind(this)} />
              <Button label="Next" onClick={this.handleNext.bind(this)} />
            </Box>
          </div>
        ) : (
          <img
            src={loading}
            alt="..."
            style={{ position: "absolute", top: "30vh", left: "50vw" }}
          />
        )}
      </div>
    );
  }
}
export default LabView;
