import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../state';
import { apiUrl } from '../../../config';
import Content from './labs/Content';
import Editor from './labs/Editor';
import './labs/Labs.css';
import Maxwidth from './labs/MaxWidth';

Labs.defaultProps = {
  id: 20
};

function Labs(props) {
  const { id } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [lessonNum, setLessonNum] = useState(0);
  const [isLoading, setLoading] = useGlobalState('loading');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}lessons/`, {
        params: { topic: props.id }
      })
      .then(res => {
        const response = res.data.lessons;
        setLessons(res.data.lessons);
        setCodeSnippets(response.map(response => response.code));
        setLoading(false);
      });
  }, []);

  function handleNext() {
    setLessonNum(lessonNum + 1);
  }

  function handlePrev() {
    setLessonNum(lessonNum - 1);
  }

  const BackButton = props =>
    typeof lessons[lessonNum - 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handlePrev()}>
        Prev
      </button>
    ) : (
      <button className="button is-primary" onClick={() => handlePrev()} disabled>
        Prev
      </button>
    );

  const NextButton = props =>
    typeof lessons[lessonNum + 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handleNext()}>
        Next
      </button>
    ) : (
      <button className="button is-primary" onClick={() => handleNext()} disabled>
        Next
      </button>
    );

  return (
    !isLoading && (
      <div>
        <div className="lab-content">
          <Content lesson={lessons[lessonNum]} />
        </div>
        <div className="lab-editor">
          <Editor codeSnippet={codeSnippets[lessonNum]} lessonNum={lessonNum} />
        </div>

        <div class="navbar is-fixed-bottom has-background-light level">
          <div className="level-item buttons">
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>
    )
  );
}
export default withRouter(Labs);
