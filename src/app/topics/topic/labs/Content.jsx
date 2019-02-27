import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../../state';

Content.defaultProps = {
  lesson: []
};

function Content(props) {
  const { lesson } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);

  return (
    <div className="box" style={{ 'overflow-wrap': 'break-word' }}>
      <p className="is-size-3 is-family-secondary">{lesson.name}</p>
      <p>{lesson.content}</p>
    </div>
  );
}
export default Content;
