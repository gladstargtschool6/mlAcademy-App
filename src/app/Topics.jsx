import React, { useEffect, useState } from 'react';
import logo from '../img/logos/text_white.svg';
import { tagline } from '../Constants';
import Topic from './topics/Topic';
import { useGlobalState } from '../state';
import axios from 'axios';
import { apiUrl } from '../config';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    axios.get(`${apiUrl}topics`).then(res => {
      this.setState({
        topics: res.data.topics
      });
    });
  }

  render() {
    const { topics } = this.state;

    return (
      <div className="container">
        <div style={{ display: 'flex', 'flex-direction': 'row', 'flex-wrap': 'wrap' }}>
          {topics.map(topic => (
            <Topic title={topic.name} description={topic.description} />
          ))}
        </div>
      </div>
    );
  }
}
export default Topics;
