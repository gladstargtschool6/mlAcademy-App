import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Heading } from 'grommet';
import Markdown from 'markdown-to-jsx';
import Editor from './Editor';
import loading from '../img/loading.svg';

const propTypes = {
  changeCode: PropTypes.func.isRequired,
  lessonID: PropTypes.number.isRequired,
  lesson: PropTypes.object.isRequired,
  codeSnippet: PropTypes.string.isRequired
};
const defaultProps = {};

class LabView extends React.Component {
  onChangeCode(newCode) {
    this.props.changeCode(newCode, this.props.lessonID);
  }

  render() {
    const { codeSnippet, lesson } = this.props;

    if (typeof this.props.lesson.name === 'string') {
      return (
        <>
          <Box pad="small" basis="2/4" overflow="auto" elevation="xsmall">
            <Heading>{lesson.name}</Heading>
            <Markdown style={{ 'font-family': 'Lato' }}>{lesson.content}</Markdown>
          </Box>
          <Box pad="small" basis="2/4">
            <Editor codeSnippet={codeSnippet} changeCode={this.onChangeCode.bind(this)} />
          </Box>
        </>
      );
    } else {
      return (
        <img src={loading} alt="..." style={{ position: 'absolute', top: '30%', left: '48%' }} />
      );
    }
  }
}

LabView.propTypes = propTypes;
LabView.defaultProps = defaultProps;

export default withRouter(LabView);
