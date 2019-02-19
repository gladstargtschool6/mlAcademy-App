import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grommet';
import { withRouter } from 'react-router-dom';

const propTypes = {
  history: PropTypes.object.isRequired,
  theory: PropTypes.bool,
  topic: PropTypes.object.isRequired
};
const defaultProps = {
  theory: false
};

function Topic(props) {
  const { topic, theory, history } = props;
  const style = !theory
    ? { 'background-image': 'linear-gradient(to bottom right, #3BB273, #26724A)', color: 'white' }
    : { 'background-image': 'linear-gradient(to bottom right, #48A9A6, #00739D)', color: 'white' };
  return (
    <Box
      as="button"
      style={style}
      onClick={() => {
        history.push(`labs/${topic.id}`);
      }}
      round="small"
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
