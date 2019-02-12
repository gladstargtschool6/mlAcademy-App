import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet/es6';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Config } from '../../Config';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicsNames: [],
      topicsIDs: []
    };
  }

  componentDidMount() {
    axios.get(`${Config.apiUrl}topics`).then(res => {
      this.setState({
        topicsNames: res.data.topics_names,
        topicsIDs: res.data.topics_ids
      });
    });
  }

  goTo(route) {
    this.props.history.push(route);
  }

  render() {
    const { topicsNames, topicsIDs } = this.state;
    return (
      <Box
        direction="row-responsive"
        pad="small"
        gap="small"
        fill
        wrap
        style={{ 'background-image': 'linear-gradient(#7D4CDB, #613bac, #7D4CDB)' }}
        height="100%"
        justify="center"
        align="center"
      >
        {topicsNames.map((name, index) => {
          const topicID = topicsIDs[index];
          return (
            <Box
              as="button"
              background="white"
              onClick={() => {
                this.goTo(`labs/${topicID}`);
              }}
              round="small"
              animation="fadeIn"
              width="200px"
              height="350px"
              elevation="small"
              pad="small"
            >
              <h1>{name}</h1>
              <h2>Description</h2>
            </Box>
          );
        })}
      </Box>
    );
  }
}

Topics.propTypes = propTypes;
Topics.defaultProps = defaultProps;

export default withRouter(Topics);
