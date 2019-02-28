import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useGlobalState } from '../../../../state';
import Markdown from 'markdown-to-jsx';

Content.defaultProps = {
  lesson: {
    name: 'Name',
    content: '# Title'
  }
};

function Content(props) {
  const { lesson } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);

  return (
    <div style={{ margin: '0.5rem' }}>
      <p className="is-size-3 is-family-secondary">{lesson.name}</p>
      <Markdown>{lesson.content}</Markdown>
    </div>
  );
}
export default Content;
