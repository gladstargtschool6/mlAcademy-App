import React from "react";
import axios from "axios";
import { Box, Button, Heading, Markdown } from "grommet";
import Editor from "./Editor";
import loading from "../loading.svg";
import * as Icons from "grommet-icons";

class LabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      num: this.props.classID,
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
          <Box
            height="83vh"
            direction="row"
            border={{
              color: "accent-3",
              size: "large"
            }}
            pad="medium"
          >
            <Box pad="small" basis="2/4" overflow="auto" elevation="xsmall">
              <Heading>{this.state.name}</Heading>
              <Markdown>{this.state.content}</Markdown>
            </Box>

            <Box pad="small" basis="2/4">
              <Editor defaultCode={this.state.defaultCode} />
            </Box>
          </Box>
        ) : (
          <Box
            height="83vh"
            direction="row"
            border={{
              color: "accent-3",
              size: "large"
            }}
            pad="medium"
          >
            <img
              src={loading}
              alt="..."
              style={{ position: "absolute", top: "30%", left: "48%" }}
            />
          </Box>
        )}

        <Box
          tag="footer"
          border={{
            side: "bottom",
            color: "accent-3",
            size: "large"
          }}
          direction="row"
          elevation="large"
          height="60px"
          justify="end"
          pad="xsmall"
          gap="small"
          flex={false}
          background="accent-3"
        >
          <Button
            icon={<Icons.FormPrevious />}
            label="Back"
            onClick={this.handlePrev.bind(this)}
            primary
          />
          <Button
            label="Next"
            icon={<Icons.FormNext />}
            margin={{ right: "10px" }}
            onClick={this.handleNext.bind(this)}
            primary
            reverse
          />
        </Box>
      </div>
    );
  }
}
export default LabView;
