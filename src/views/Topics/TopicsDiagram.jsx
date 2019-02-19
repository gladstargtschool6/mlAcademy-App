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
      <Box justify="start" margin="medium">
        <Topic topic={topics[3]} theory />
        <Topic topic={topics[9]} />
      </Box>
      <Box justify="start" margin="medium">
        <Topic topic={topics[4]} theory />
      </Box>
      <Box justify="start" margin="medium">
        <Topic topic={topics[5]} theory />
      </Box>
      <Box justify="start" margin="medium">
        <Topic topic={topics[6]} theory />
        <Topic topic={topics[10]} />
      </Box>
      <Box justify="start" margin="medium">
        <Topic topic={topics[7]} theory />
      </Box>
      <Box justify="start" margin="medium">
        <Topic topic={topics[8]} theory />
        <Topic topic={topics[11]} />
      </Box>
      <Box justify="end" margin="medium">
        {topics[13] && <Topic topic={topics[13]} theory />}
        <Topic topic={topics[12]} />
      </Box>
    </>
  ) : (
    <> </>
  );
};

TopicsDiagram.propTypes = propTypes;
TopicsDiagram.defaultProps = defaultProps;

export default TopicsDiagram;
