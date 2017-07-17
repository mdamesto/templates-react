import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const propTypes = {
  example: PropTypes.string,
};

const s = StyleSheet.create({
  root: {
    backgroundColor: 'yellow',
  },
});

const Template = () => {
  return (
    <div className={css(s.root)}>
      empty
    </div>
  );
};

Template.propTypes = propTypes;

export default Template;
