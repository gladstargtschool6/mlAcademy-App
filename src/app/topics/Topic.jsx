import React from 'react';
import { withRouter } from 'react-router-dom';
import './topic/Topic.css';

Topic.defaultProps = {
  title: 'Title',
  description: 'This is the description',
  color: 'light',
  id: 20
};

function Topic(props) {
  const { title, description, color, id } = props;
  return (
    <div className="topic-wrapper">
      <button
        onClick={e => props.history.replace(`/labs/${id}`)}
        class={`card card-shadow has-background-${color}`}
      >
        <div class="card-content">
          <p class="title">{title}</p>
          <p class="subtitle">{description}</p>
        </div>
      </button>
    </div>
  );
}
export default withRouter(Topic);
