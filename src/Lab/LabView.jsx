import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Button, Heading, Markdown } from 'grommet';
import Editor from './Editor';
import loading from '../img/loading.svg';

const propTypes = {
  history: PropTypes.object.isRequired,
  changeCode: PropTypes.func.isRequired,
  lessonID: PropTypes.number.isRequired,
  lesson: PropTypes.object.isRequired,
  codeSnippet: PropTypes.string.isRequired
};
const defaultProps = {};

class LabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  onChangeCode(newCode) {
    this.props.changeCode(newCode, this.props.lessonID);
  }

  goTo(route) {
    const { history } = this.props;
    history.push(route);
  }

  render() {
    if (typeof this.props.lesson.name === 'string') {
      return (
        <div>
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
            <Box pad="small" basis="2/4" overflow="auto" elevation="xsmall">
              <Heading>{this.props.lesson.name}</Heading>
            </Box>

            <Box pad="small" basis="2/4">
              <Editor
                codeSnippet={this.props.codeSnippet}
                changeCode={this.onChangeCode.bind(this)}
              />
            </Box>
          </Box>
        </div>
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
