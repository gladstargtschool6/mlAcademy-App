import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grommet';
import { withRouter } from 'react-router-dom';

const propTypes = {
  history: PropTypes.object.isRequired,
  topic: PropTypes.object.isRequired
};
const defaultProps = {};

function Topic(props) {
  const { topic, history } = props;
  return (
    <Box
      as="button"
      background="white"
      onClick={() => {
        history.push(`labs/${topic.id}`);
      }}
      round="small"
      animation="fadeIn"
      width="200px"
      height="350px"
      elevation="small"
      pad="small"
      margin="small"
      id={topic.id}
    >
      <h1>{topic.name}</h1>
      <h2>{topic.description}</h2>
    </Box>
  );
}

Topic.propTypes = propTypes;
Topic.defaultProps = defaultProps;

export default withRouter(Topic);
