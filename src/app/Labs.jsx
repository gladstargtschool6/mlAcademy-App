import React, { useState, useEffect } from 'react';
import { notify } from 'react-notify-toast';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { apiUrl } from '../config';
import loading from '../img/loading.svg';
import LessonContent from './labs/LessonContent';
import Editor from './labs/Editor';
import './labs/Labs.scss';

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
        params: { topic: id }
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
    history.push('/topics');
  }

  const BackButton = props =>
    typeof lessons[lessonNum - 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handlePrev()}>
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    ) : (
      <button className="button is-primary" onClick={() => handlePrev()} disabled>
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    );

  const NextButton = props =>
    typeof lessons[lessonNum + 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handleNext()}>
        Next
        <br />
        <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem' }} />
      </button>
    ) : (
      <button className="button is-success" onClick={() => handleFinish()}>
        Finish
        <i className="fas fa-check" style={{ marginLeft: '0.4rem' }} />
      </button>
    );

  return isLoading ? (
    <img src={loading} alt="..." style={{ position: 'absolute', top: '30vh', left: '48vw' }} />
  ) : (
    <div className="labs-wrapper">
      <div className="lab-content">
        <LessonContent lesson={lessons[lessonNum]} />
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
