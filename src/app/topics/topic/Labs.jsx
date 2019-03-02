import React, { useState, useEffect } from 'react';
import { notify } from 'react-notify-toast';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../state';
import { apiUrl } from '../../../config';
import loading from '../../../img/loading.svg';
import Content from './labs/Content';
import Editor from './labs/Editor';
import './labs/Labs.css';
import Maxwidth from './labs/MaxWidth';

Labs.defaultProps = {
  id: 20
};

function Labs(props) {
  const { id, history } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [lessonNum, setLessonNum] = useState(0);
  const [isLoading, setLoading] = useState(true);

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

  function handleFinish() {
    notify.show('You have finished the class 🎉', 'success');
    history.replace('/topics');
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
      <button className="button is-success" onClick={() => handleFinish()}>
        Finish
      </button>
    );

  return isLoading ? (
    <img src={loading} alt="..." style={{ position: 'absolute', top: '30vh', left: '48vw' }} />
  ) : (
    <div className="labs-wrapper">
      <div className="lab-content">
        <Content lesson={lessons[lessonNum]} />
      </div>
      <div className="lab-editor">
        <Editor codeSnippet={codeSnippets[lessonNum]} lessonNum={lessonNum} />
      </div>

      <div class="navbar is-fixed-bottom has-background-grey-lighter level">
        <div className="level-item buttons">
          <BackButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}
export default withRouter(Labs);
