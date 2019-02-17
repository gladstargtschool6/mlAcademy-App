import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import Topic from './Topic';

const propTypes = {
  topics: PropTypes.object.isRequired
};
const defaultProps = {};

const TopicsDiagram = props => {
  const { topics } = props;

  return topics.length > 2 ? (
    <>
      <Box direction="row-responsive" justify="center" margin="medium">
        <Topic topic={topics[0]} />
      </Box>
      <Box direction="row-responsive" justify="center" margin="medium">
        <Topic topic={topics[1]} />
        <Topic topic={topics[2]} />
      </Box>
    </>
  ) : (
    <> </>
  );
};

TopicsDiagram.propTypes = propTypes;
TopicsDiagram.defaultProps = defaultProps;

export default TopicsDiagram;
