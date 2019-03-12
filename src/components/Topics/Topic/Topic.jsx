import React from 'react';
import { withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import './Topic.scss';

Topic.defaultProps = {
  disabled: false,
  title: 'Title',
  description: 'This is the description',
  id: 20,
  imageUrl: '',
  prerequisites: []
};

function Topic(props) {
  const { title, complete, disabled, description, id, imageUrl, history, prerequisites } = props;
  function handleClick() {
    if (disabled) {
      notify.show(
        `You need to complete ${prerequisites.map(
          prerequisite => prerequisite.name
        )} to start this topic`,
        'error'
      );
    } else {
      history.push(`/labs/${id}`);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`topic-wrapper has-background-white ${disabled && `disabled`}`}
    >
      {complete && (
        <div className="status-pill complete is-family-primary has-text-white">Completed</div>
      )}
      {!disabled && !complete && (
        <div className="status-pill available is-family-primary">Available</div>
      )}
      <div className="overlay" />
      <div className="topic-image">
        <img
          src={
            imageUrl !== '' ? imageUrl : `https://assets.leetcode.com/explore/cards/recursion-i/img`
          }
          alt="topic-banner"
        />
      </div>

      <div className="topic-content">
        <p className="title is-family-secondary">{title}</p>
        <p className="subtitle is-family-primary">{description}</p>
      </div>
    </button>
  );
}
export default withRouter(Topic);
