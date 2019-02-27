import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../state';
import { apiUrl } from '../../../config';
import Content from './labs/Content';
import Editor from './labs/Editor';

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
        console.log(response);
        setLessons(res.data.lessons);
        setCodeSnippets(response.map(response => response.code));
        setLoading(false);
      });
  }, []);

  function handleNext() {}

  function handlePrev() {}
  return (
    <div class=" columns is-gapless ">
      <div className="hero column is-half has-background-primary is-fullheight-with-navbar">
        <Content lesson={lessons[lessonNum]} />
      </div>
      <div className="column is-half has-background-link">
        <Editor />
      </div>
      <div class="navbar is-fixed-bottom has-background-success level">
        <div className="level-item buttons">
          <button className="button is-primary">Prev</button>
          <button className="button is-primary">Next</button>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Labs);
