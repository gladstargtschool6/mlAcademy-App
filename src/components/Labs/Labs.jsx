import React, { useGlobal, useState, useEffect } from 'reactn';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import A from 'hookrouter';

import { getLessonsForTopic, addCompletedTopic } from '../../helpers/apiLink';

import loading from '../../assets/img/loading.svg';
import LessonContent from './LessonContent/LessonContent';
import Editor from './Editor/Editor';
import './Labs.scss';

const propTypes = {
  lessonId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};
const defaultProps = {};

function Labs(props) {
  const { lessonId, history } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [lessonNum, setLessonNum] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const [user] = useGlobal('user');
  const { userIdentifier } = user;

  useEffect(() => {
    setLoading(true);
    getLessonsForTopic(lessonId).then(res => {
      const newLessons = res.data.lessons;
      setLessons(res.data.lessons);
      setCodeSnippets(newLessons.map(lesson => lesson.code));
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
    addCompletedTopic(userIdentifier, lessonId);
    history.push('/');
  }

  const BackButton = () =>
    typeof lessons[lessonNum - 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handlePrev()} type="button">
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    ) : (
      <button className="button is-primary" onClick={() => handlePrev()} disabled type="button">
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    );

  const NextButton = () =>
    typeof lessons[lessonNum + 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handleNext()} type="button">
        Next
        <br />
        <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem' }} />
      </button>
    ) : (
      <button
        className="button is-success"
        onClick={() => handleFinish(userIdentifier)}
        type="button"
      >
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

      <div className="navbar is-fixed-bottom has-background-grey-lighter level">
        <div className="level-item buttons">
          <BackButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}

Labs.propTypes = propTypes;
Labs.defaultProps = defaultProps;

export default Labs;
