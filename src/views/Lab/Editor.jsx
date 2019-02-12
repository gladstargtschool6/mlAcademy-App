import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/textmate';
import 'brace/mode/python';
import axios from 'axios';
import * as Icons from 'grommet-icons';
import { Box, Button, Heading, Text } from 'grommet';
import PropTypes from 'prop-types';
import { Config } from '../../Config';

const propTypes = {
  codeSnippet: PropTypes.string.isRequired,
  changeCode: PropTypes.func.isRequired
};

const defaultProps = {};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeSnippet: props.codeSnippet,
      result: ''
    };
    this.onChangeCode = this.onChangeCode.bind(this);
  }

  onChangeCode(newValue) {
    this.setState({
      codeSnippet: newValue
    });
    this.props.changeCode(this.state.codeSnippet);
  }

  computeOutput(snippet) {
    axios
      .get(`${Config.apiUrl}test/`, {
        params: { model_input: snippet }
      })
      .then(res => {
        this.setState({ result: res.data.complex_result });
      });
  }

  render() {
    const style = {
      fontSize: '14px !important',
      border: '1px solid lightgray',
      width: '100%',
      height: '100%'
    };

    const { codeSnippet, result } = this.state;

    return this.state.result !== '' ? (
      <Box column gap="small" height="85vh">
        <Box height="70%">
          <AceEditor
            style={style}
            mode="python"
            theme="textmate"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChangeCode}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={codeSnippet}
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
            icon={<Icons.Edit />}
            label="Submit"
            onClick={e => {
              this.computeOutput(codeSnippet);
            }}
          />
          <Heading level={3}>Output:</Heading>
          <Text>{result}</Text>
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
            onChange={this.onChangeCode}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={codeSnippet}
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
            icon={<Icons.Edit />}
            label="Submit"
            onClick={e => {
              this.computeOutput(codeSnippet);
            }}
          />
        </Box>
      </Box>
    );
  }
}

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;
