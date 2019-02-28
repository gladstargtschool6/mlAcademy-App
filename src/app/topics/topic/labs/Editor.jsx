import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';
import 'brace/mode/python';
import 'brace/snippets/python';
import 'brace/theme/xcode';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../../state';
import './editor/Editor.css';
import { apiUrl } from '../../../../config';

Editor.defaultProps = {
  lessonNum: 0,
  codeSnippet: `class Hei:
  def hello(var):
    output = "Hi"
    print(output)`
};

function Editor(props) {
  const { lessonNum, codeSnippet } = props;
  console.log(lessonNum);
  const [lastLessonNum, setLessonNum] = useState(0);
  const [currentCode, setCode] = useState(codeSnippet);

  useEffect(() => {
    if (lessonNum !== lastLessonNum) {
      setLessonNum(lessonNum);
      setCode(codeSnippet);
    }
  });

  function onChange(currentCode) {
    setCode(currentCode);
  }

  function computeOutput(snippet) {
    axios
      .get(`${apiUrl}test/`, {
        params: { model_input: snippet }
      })
      .then(res => {
        this.setState({ result: res.data.complex_result });
      });
  }

  const style = {
    'min-height': '40vh',
    height: '100%',
    width: '100%'
  };

  return (
    <div className="ace-editor">
      <AceEditor
        style={style}
        mode="python"
        theme="xcode"
        name="blah2"
        /*onLoad={this.onLoad}*/
        onChange={onChange}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={false}
        value={currentCode}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    </div>
  );
}
export default Editor;
