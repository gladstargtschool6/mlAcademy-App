import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet/es6';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Config } from '../Config';
import LabView from './LabView';
import { sleep, goTo } from '../helpers';
import Loading from '../components/Loading';

const propTypes = {
  topicID: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
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
    console.log(newCodeSnippets);
    this.setState({ codeSnippets: newCodeSnippets });
  }

  handlePrev() {
    this.setState({ isLoading: true });
    sleep(300).then(() => {
      this.setState(prevState => ({ isLoading: false, lessonID: prevState.lessonID - 1 }));
    });
  }

  handleNext() {
    this.setState({ isLoading: true });
    sleep(300).then(() => {
      this.setState(prevState => ({ isLoading: false, lessonID: prevState.lessonID + 1 }));
    });
  }

  handleFinish() {
    alert("you're done");
    goTo(this.props, `/`);
  }

  render() {
    const { pageIsLoading, isLoading } = this.state;
    const { height } = this.props;
    const LoadScreen =
      pageIsLoading || isLoading ? (
        <Loading />
      ) : (
        <LabView
          lesson={this.state.lessons[this.state.lessonID]}
          codeSnippet={this.state.codeSnippets[this.state.lessonID]}
          lessonID={this.state.lessonID}
          changeCode={this.onChangeCode.bind(this)}
        />
      );

    const PrevButton =
      typeof this.state.lessons[this.state.lessonID - 1] !== 'undefined' ? (
        <Button
          icon={<Icons.FormPrevious />}
          label="Back"
          onClick={this.handlePrev.bind(this)}
          primary
        />
      ) : (
        <Button icon={<Icons.FormPrevious />} label="Back" disabled />
      );

    const NextButton =
      typeof this.state.lessons[this.state.lessonID + 1] !== 'undefined' ? (
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
      );

    return (
      <>
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
      </>
    );
  }
}

Lab.propTypes = propTypes;
Lab.defaultProps = defaultProps;

export default withRouter(Lab);
