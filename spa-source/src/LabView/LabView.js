import React, { Component } from "react";
import brace from "brace";
import marked from "marked";
import { Link } from "react-router-dom";
import AceEditor from "react-ace";
import { Row, Col, Button } from "reactstrap";
import Footer from "../Footer/Footer";
import styles from "./LabView.module.css";
import "brace/mode/python";
import "brace/theme/monokai";
import "brace/theme/textmate";

import axios from "axios";

import createHistory from "history/createBrowserHistory";

class LabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: " ",
      code: " "
    };
  }

  componentDidMount() {
    const ip = `http://127.0.0.1:8000/api/`;
    axios
      .get(ip + /*this.props.labID + `/`*/ +this.props.classID + `/`)
      .then(res => {
        const content = unescape(res.data.content);
        const code = res.data.name;
        this.setState({ code });
        this.setState({ content });
      });
  }

  render() {
    const history = createHistory();
    const style = {
      fontSize: "14px !important",
      border: "1px solid lightgray",
      width: "100%",
      height: "100%"
    };
    return (
      <div>
        <div>
          <Row>
            <Col xs={6} md={6}>
              <article
                dangerouslySetInnerHTML={{ __html: marked(this.state.content) }}
              />
            </Col>
            <Col xs={6} md={6}>
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
                value={this.state.code}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2
                }}
              />
            </Col>
          </Row>
        </div>
        <nav class="navbar fixed-bottom navbar-expand-md navbar-light bg-light">
          <Link to="/" class="nav-link">
            <button type="button" class="btn btn-primary">
              Back
            </button>
          </Link>
          <a
            href={`/editor/${this.props.labID}/${parseInt(this.props.classID) +
              1}`}
            class="nav-link"
          >
            <button type="button" class="btn btn-primary">
              Next
            </button>
          </a>
        </nav>
      </div>
    );
  }
}

export default LabView;
