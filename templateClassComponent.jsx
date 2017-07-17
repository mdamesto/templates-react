import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const propTypes = {
  example: PropTypes.string,
};

const s = StyleSheet.create({
  root: {
    backgroundColor: 'red',
  },
});

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={css(s.root)}>
        EMPTY
      </div>
    );
  }
}

Template.propTypes = propTypes;

export default Template;
