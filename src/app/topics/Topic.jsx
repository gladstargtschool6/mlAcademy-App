import React from 'react';
import { withRouter } from 'react-router-dom';

Topic.defaultProps = {
  title: 'Title',
  description: 'This is the description',
  color: 'light',
  id: 20
};

function Topic(props) {
  const { title, description, color, id } = props;
  return (
    <div style={{ padding: '2em', 'max-width': '45vw', width: '300px', 'overflow-wrap': 'normal' }}>
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
