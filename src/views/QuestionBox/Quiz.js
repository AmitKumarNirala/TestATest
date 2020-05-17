import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
<>
      <div key={props.questionId}>
        <card>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Divider/>
        <Question content={props.question} style={{ marginLeft: "5px", padding: "5px"}}/>
        <Divider variant ="middle" />
        <ul style={{listStyleType: "none", margin: "5px", padding: "5px",textAlign: "left"}} className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        </card>
      </div>
      <ButtonGroup fullWidth="true" variant="contained" color="primary" aria-label="contained primary button group">
      <Button>Previous</Button>
      <Button>Next  </Button>
      </ButtonGroup>
      </>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
