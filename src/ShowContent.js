import React from "react";
import PropTypes from "prop-types";

import marked from "marked";
import { Box } from "grommet";

class ShowContent extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    content: PropTypes.string.isRequired
  };
  render() {
    console.log(this.props);
    return (
      <article
        dangerouslySetInnerHTML={{ __html: marked(this.props.content) }}
      />
    );
  }
}

export default ShowContent;
