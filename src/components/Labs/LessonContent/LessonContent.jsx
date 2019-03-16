import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const propTypes = {
  lesson: PropTypes.object.isRequired,
};

const defaultProps = {};

function LessonContent(props) {
  const { lesson } = props;

  return (
    <div style={{ margin: '0.5rem' }}>
      <p className="is-size-3 is-family-secondary">{lesson.name}</p>
      <Markdown>{lesson.content}</Markdown>
    </div>
  );
}

LessonContent.propTypes = propTypes;
LessonContent.defaultProps = defaultProps;

export default LessonContent;
