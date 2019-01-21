import React, { Component } from "react";
import brace from "brace";
import marked from "marked";

import AceEditor from "react-ace";
import { Row, Col, Button } from "reactstrap";
import "brace/mode/python";
import "brace/theme/monokai";
import "brace/theme/textmate";
import "brace/mode/java";
import axios from "axios";
class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: " ",
      code: " "
    };
  }

  componentDidMount() {
    console.log(this.props.id);
    const ip = `http://127.0.0.1:8000/api/`;
    axios.get(ip + this.props.id + `/`).then(res => {
      const content = unescape(res.data.content);
      const code = res.data.name;
      this.setState({ code });
      this.setState({ content });
    });
  }

  render() {
    const style = {
      fontSize: "14px !important",
      border: "1px solid lightgray",
      width: "100%"
    };
    return (
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
    );
  }
}

export default CodeEditor;
