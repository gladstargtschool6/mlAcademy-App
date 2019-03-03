import React from 'react';
import './topics/Topics.css';
import Topic from './topics/Topic';
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
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
        {topics.map((topic, index) => (
          <Topic title={topic.name} description={topic.description} key={index} />
        ))}
      </div>
    );
  }
}
export default Topics;
