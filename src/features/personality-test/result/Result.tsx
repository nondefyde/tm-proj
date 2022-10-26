import React from 'react';
import { QuestionResultStyledContainer } from './Result.styled';
import { QuestionStyledButton, StyledButtons } from '../question-set/question/Question.styled';
import { useAppDispatch } from '../../../app/hooks';
import { resetTest } from '../PersonalityTestSlice';

export const Result = () => {
  const dispatch = useAppDispatch();
  
  const onShowAnswers = () => {
  }
  
  const onRetakeTest = () => {
    dispatch(resetTest());
  }
  
  return (
    <QuestionResultStyledContainer>
      Hello
      <StyledButtons>
        <QuestionStyledButton
          $isDefault={true}
          onClick={onRetakeTest}>
          Retake Question
        </QuestionStyledButton>
        <QuestionStyledButton
          onClick={onShowAnswers}>
          Show my Answers
        </QuestionStyledButton>
      </StyledButtons>
    </QuestionResultStyledContainer>
  );
}
