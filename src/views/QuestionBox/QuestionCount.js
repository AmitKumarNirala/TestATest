import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div >
      <table style={{width:"100%"}}>
      <th style={{listStyleType: "none", margin: 0, padding: 0,textAlign: "left"}}>{props.counter} of {props.total}</th>
      <th style={{textAlign: "right"}}>+4 | -1</th>
    </table>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
