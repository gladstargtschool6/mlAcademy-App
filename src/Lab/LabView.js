import React from "react";
import axios from "axios";
import {Box, Button, Heading, Markdown} from "grommet";
import Editor from "./Editor";
import loading from "../img/loading.svg";
import * as Icons from "grommet-icons";
import {Config} from "../Config";
import {withRouter} from "react-router";

class LabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  
  goTo = route => {
    this.props.history.push(route);
  };
  
  render() {
    if (typeof (this.props.lesson) === "string") {
      return (
        
        <div>
          <Box
            height="83vh"
            direction="row"
            border={{
              color: "accent-3",
              size: "large"
            }}
            pad="medium"
            elevation="medium"
          >
            <Box pad="small" basis="2/4" overflow="auto" elevation="xsmall">
              <Heading>{this.props.lesson}</Heading>
            
            </Box>
            
            <Box pad="small" basis="2/4">
              <Editor code={this.props.lesson}/>
            </Box>
          </Box>
        </div>
      )
    } else {
      return (
        <img
          src={loading}
          alt="..."
          style={{position: "absolute", top: "30%", left: "48%"}}
        />)
    }
  }
}

export default LabView;
