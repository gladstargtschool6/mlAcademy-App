import React, { useEffect, useState } from 'react';
import logo from '../img/logos/text_white.svg';
import { tagline } from '../Constants';
import './topics/Topics.css';
import Topic from './topics/Topic';
import { useGlobalState } from '../state';
import axios from 'axios';
import { apiUrl } from '../config';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(`${apiUrl}topics`).then(res => {
      this.setState({
        topics: res.data.topics,
        isLoading: false
      });
    });
  }

  render() {
    const { topics } = this.state;

    return (
      <div className="topics-wrapper">
        {topics.map(topic => (
          <Topic title={topic.name} description={topic.description} />
        ))}
      </div>
    );
  }
}
export default Topics;
