import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet/es6';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Config } from '../../Config';

import { sleep } from '../../helpers';
import Loading from '../../components/Loading';

const propTypes = {
  /*history: PropTypes.class.isRequired*/
};
const defaultProps = {};

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      topics_names: [],
      topics_ids: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(`${Config.apiUrl}topics`).then(res => {
      this.setState({
        isLoading: false,
        topics_names: res.data.topics_names,
        topics_ids: res.data.topics_ids
      });
    });
  }

  goTo(route) {
    this.props.history.push(route);
  }

  render() {
    const { isLoading, topics_names, topics_ids } = this.state;
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
        {topics_names.map((name, index) => {
          const id = topics_ids[index];
          return (
            <Box
              as="button"
              onClick={() => {
                this.goTo(`labs/${id}`);
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
