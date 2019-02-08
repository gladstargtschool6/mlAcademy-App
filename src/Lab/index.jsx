import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet/es6';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { Config } from '../Config';
import loading from '../img/loading.svg';
import LabView from './LabView';
import sleep from '../Sleep';
import Loading from '../Loading';

const propTypes = {
  topicID: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};
const defaultProps = {};

class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIsLoading: true,
      isLoading: true,
      codeSnippets: [],
      lessons: [],
      lessonID: 0
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`${Config.apiUrl}lessons/`, {
        params: { topic: this.props.topicID }
      })
      .then(res => {
        let response = res.data.lessons;
        this.setState({
          lessons: res.data.lessons,
          codeSnippets: response.map(response => response.code),
          isLoading: false,
          pageIsLoading: false
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lessonID !== prevState.lessonID) {
      this.setState({ isLoading: true });
      console.log('next');
      sleep(300).then(() => {
        this.setState({ lessonID: this.state.lessonID, isLoading: false });
      });
    }
  }

  onChangeCode(newCode, lessonID) {
    let newCodeSnippets = [];
    this.setState(prevState => (newCodeSnippets = prevState.codeSnippets));
    newCodeSnippets[lessonID] = newCode;
    console.log(newCodeSnippets);
    this.setState({ codeSnippets: newCodeSnippets });
  }

  goTo(route) {
    this.props.history.push(route);
  }

  handlePrev() {
    this.setState(prevState => ({ lessonID: prevState.lessonID - 1 }));
  }

  handleNext() {
    this.setState(prevState => ({ lessonID: prevState.lessonID + 1 }));
  }

  handleFinish() {
    alert("you're done");
    this.goTo(`/`);
  }

  render() {
    console.log();
    if (!this.state.pageIsLoading) {
      const { lessonID } = this.state;
      const { codeSnippet } = this.state.codeSnippets[lessonID];
      return (
        <div>
          {!this.state.isLoading ? (
            <LabView
              lesson={this.state.lessons[this.state.lessonID]}
              codeSnippet={this.state.codeSnippets[this.state.lessonID]}
              lessonID={this.state.lessonID}
              changeCode={this.onChangeCode.bind(this)}
            />
          ) : (
            <Box
              height="83vh"
              direction="row"
              border={{
                color: 'accent-3',
                size: 'large'
              }}
              pad="medium"
              elevation="medium"
            >
              <Loading />
            </Box>
          )}
          <Box
            tag="footer"
            direction="row"
            height="70px"
            justify="end"
            pad="small"
            gap="small"
            flex={false}
          >
            {typeof this.state.lessons[this.state.lessonID - 1] !== 'undefined' ? (
              <Button
                icon={<Icons.FormPrevious />}
                label="Back"
                onClick={this.handlePrev.bind(this)}
                primary
              />
            ) : (
              <Button icon={<Icons.FormPrevious />} label="Back" disabled />
            )}
            {typeof this.state.lessons[this.state.lessonID + 1] !== 'undefined' ? (
              <Button
                label="Next"
                icon={<Icons.FormNext />}
                margin={{ right: '10px' }}
                onClick={this.handleNext.bind(this)}
                primary
                reverse
              />
            ) : (
              <Button
                icon={<Icons.Checkmark />}
                label="Finish"
                onClick={this.handleFinish.bind(this)}
                margin={{ right: '10px' }}
                green
              />
            )}
          </Box>
        </div>
      );
    } else {
      return (
        <Box
          height="83vh"
          direction="row"
          border={{
            color: 'accent-3',
            size: 'large'
          }}
          pad="medium"
        >
          <Loading />
        </Box>
      );
    }
  }
}

Lab.propTypes = propTypes;
Lab.defaultProps = defaultProps;

export default withRouter(Lab);
