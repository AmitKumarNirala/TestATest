import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <p style={{textAlign: "left" , padding:"5px"}}>{props.content}</p>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
