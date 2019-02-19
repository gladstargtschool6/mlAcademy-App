import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Diagram, Stack } from 'grommet';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Config } from '../../Config';
import TopicsDiagram from './TopicsDiagram';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

function createConnections(topics) {
  const connections = [];
  topics.forEach(topic => {
    if (topic.prerequisites.length !== 0) {
      const { prerequisites } = topic;
      prerequisites.forEach(prerequisite => {
        connections.push({
          fromTarget: `${prerequisite.id}`,
          toTarget: `${topic.id}`,
          thickness: 'small',
          color: '#333333',
          type: 'curved'
        });
      });
    }
  });
  return connections;
}

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      connections: []
    };
  }

  componentDidMount() {
    axios.get(`${Config.apiUrl}topics`).then(res => {
      this.setState({
        connections: createConnections(res.data.topics),
        topics: res.data.topics
      });
    });
  }

  render() {
    const { connections, topics } = this.state;
    const { history } = this.props;

    return (
      <Box
        style={{
          'background-image': 'linear-gradient(to right bottom, #F2F2F2, #F2F2F2)',
          color: 'white'
        }}
        direction="row-responsive"
        pad="small"
        gap="small"
        fill
        animation="fadeIn"
        wrap
        height="100%"
        justify="start"
        align="center"
        overflow="scroll"
      >
        <Stack guidingChild={1}>
          <Diagram connections={connections} />
          <Box direction="row-responsive">
            {topics.length !== 0 && <TopicsDiagram topics={topics} />}
          </Box>
        </Stack>
      </Box>
    );
  }
}

Topics.propTypes = propTypes;
Topics.defaultProps = defaultProps;

export default withRouter(Topics);
