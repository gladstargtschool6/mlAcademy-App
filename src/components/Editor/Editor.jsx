import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';
import 'brace/mode/python';
import 'brace/snippets/python';
import 'brace/theme/xcode';
import './Editor.scss';
import { apiUrl } from 'getConfig';

Editor.defaultProps = {
  lessonNum: 0,
  codeSnippet: ``
};

function Editor(props) {
  const { lessonNum, codeSnippet } = props;
  const [result, setResult] = useState(``);
  const [lastLessonNum, setLessonNum] = useState(0);
  const [currentCode, setCode] = useState(codeSnippet);

  useEffect(() => {
    if (lessonNum !== lastLessonNum) {
      setLessonNum(lessonNum);
      setCode(codeSnippet);
      setResult(``);
    }
  });

  function onChange(currentCode) {
    setCode(currentCode);
  }

  function computeOutput() {
    axios
      .get(`${apiUrl}test/`, {
        params: { model_input: currentCode }
      })
      .then(res => {
        setResult(res.data.complex_result !== '' ? res.data.complex_result : 'No result');
      });
  }

  function hasResult() {
    return result !== ``;
  }

  const style = {
    'min-height': '40vh',
    height: '100%',
    width: '100%'
  };

  return hasResult() ? (
    <>
      <div className="ace-editor-has-result">
        <AceEditor
          style={style}
          mode="python"
          theme="xcode"
          name="blah2"
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

      <div className="result-window has-background-light">
        <p className="is-size-4">Result:</p>
        <p className="is-family-code">{result}</p>
      </div>
      <div className="submit-button-wrapper has-background-light">
        <button
          className="button is-info submit-button"
          onClick={computeOutput}
          style={{ width: '10rem' }}
        >
          Submit
          <i className="fas fa-edit" style={{ marginLeft: '0.4rem' }} />
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="ace-editor">
        <AceEditor
          style={style}
          mode="python"
          theme="xcode"
          name="blah2"
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
      <div className="submit-button-wrapper">
        <button
          className="button is-info submit-button"
          onClick={computeOutput}
          style={{ width: '10rem' }}
        >
          Submit
          <i className="fas fa-edit" style={{ marginLeft: '0.4rem' }} />
        </button>
      </div>
    </>
  );
}
export default Editor;
