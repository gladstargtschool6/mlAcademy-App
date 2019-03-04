import React from 'react';
import { withRouter } from 'react-router-dom';
import './topic/Topic.scss';

Topic.defaultProps = {
  title: 'Title',
  description: 'This is the description',
  color: 'white',
  id: 20
};

function Topic(props) {
  const { title, description, color, id, history } = props;
  return (
    <button
      onClick={() => history.push(`/labs/${id}`)}
      className={`topic-wrapper has-background-${color}`}
    >
      <div className="topic-image">
        <img src="https://assets.leetcode.com/explore/cards/recursion-i/img" alt="demo image" />
      </div>

      <div className="topic-content">
        <p className="title is-family-secondary">{title}</p>
        <p className="subtitle is-family-primary">{description}</p>
      </div>
    </button>
  );
}
export default withRouter(Topic);
