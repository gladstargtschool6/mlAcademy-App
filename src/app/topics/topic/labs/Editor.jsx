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

  return <div>Hi</div>;
}
export default Content;
