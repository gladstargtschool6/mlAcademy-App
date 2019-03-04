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
      <div className="card-content">
        <p className="title is-family-secondary">{title}</p>
        <p className="subtitle">{description}</p>
      </div>
    </button>
  );
}
export default withRouter(Topic);
