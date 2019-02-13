import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import { Config } from '../../Config';
import LabView from './LabView';
import { Loading } from '../components';

const propTypes = {
  topicID: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
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
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`${Config.apiUrl}lessons/`, {
        params: { topic: this.props.topicID }
      })
      .then(res => {
        const response = res.data.lessons;
        this.setState({
          lessons: res.data.lessons,
          codeSnippets: response.map(response => response.code),
          isLoading: false,
          pageIsLoading: false
        });
      });
  }

  onChangeCode(newCode, lessonID) {
    let newCodeSnippets = [];
    this.setState(prevState => (newCodeSnippets = prevState.codeSnippets));
    newCodeSnippets[lessonID] = newCode;
    this.setState({ codeSnippets: newCodeSnippets });
  }

  handlePrev() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState(prevState => ({ isLoading: false, lessonID: prevState.lessonID - 1 }));
    }, 200);
  }

  handleNext() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState(prevState => ({ isLoading: false, lessonID: prevState.lessonID + 1 }));
    }, 200);
  }

  render() {
    const { pageIsLoading, isLoading } = this.state;
    const { height, history } = this.props;
    const LoadScreen =
      pageIsLoading || isLoading ? (
        <Loading />
      ) : (
        <LabView
          lesson={this.state.lessons[this.state.lessonID]}
          codeSnippet={this.state.codeSnippets[this.state.lessonID]}
          lessonID={this.state.lessonID}
          changeCode={this.onChangeCode}
        />
      );

    const PrevButton =
      typeof this.state.lessons[this.state.lessonID - 1] !== 'undefined' ? (
        <Button icon={<Icons.FormPrevious />} label="Back" onClick={this.handlePrev} primary />
      ) : (
        <Button icon={<Icons.FormPrevious />} label="Back" disabled />
      );

    const NextButton =
      typeof this.state.lessons[this.state.lessonID + 1] !== 'undefined' ? (
        <Button
          label="Next"
          icon={<Icons.FormNext />}
          margin={{ right: '10px' }}
          onClick={this.handleNext}
          primary
          reverse
        />
      ) : (
        <Button
          icon={<Icons.Checkmark />}
          label="Finish"
          onClick={() => {
            notify.show("you've finished the course! 🎉 (Just a test message)", 'success');
            history.replace('/');
          }}
          margin={{ right: '10px' }}
          green
        />
      );

    return (
      <Box animation="fadeIn" background="white">
        <Box
          height={`${height - 120}px`}
          direction="row"
          border={{
            color: 'accent-3',
            size: 'large'
          }}
          pad="medium"
          elevation="medium"
        >
          {LoadScreen}
        </Box>

        <Box
          tag="footer"
          direction="row"
          height="50px"
          justify="end"
          pad={{ top: 'small' }}
          gap="small"
          flex={false}
        >
          {PrevButton}
          {NextButton}
        </Box>
      </Box>
    );
  }
}

Lab.propTypes = propTypes;
Lab.defaultProps = defaultProps;

export default withRouter(Lab);
